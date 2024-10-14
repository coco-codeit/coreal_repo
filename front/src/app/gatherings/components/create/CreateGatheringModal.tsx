"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { isToday, format } from "date-fns";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Button from "@/app/gatherings/components/Button";
import Calendar from "@/app/components/Calendar";
import TimeButton from "@/app/gatherings/components/create/TimeButton";
import { useCreateGathering } from "@/hooks/queries/useCreateGatheringQuery";
import { createType, locations, timeSlots } from "@/types/gatherings";
import { DownIcon, DeleteIcon } from "@/app/gatherings/components/list/Icons";
import { useCreateGatheringStore } from "@/stores/useCreateGatheringStore";

const createSChema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  location: z.string().min(1, "장소를 선택해주세요."),
  type: z.string().min(1, "서비스를 선택해주세요."),
  image: z
    .instanceof(File, { message: "이미지를 첨부해주세요." })
    .refine((file) => !!file, "이미지를 첨부해주세요."),
  dateTime: z.string().min(1, "날짜 및 시간을 선택해주세요."),
  capacity: z
    .string()
    .min(1, "모집 정원을 입력해주세요.")
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value) && value >= 5, {
      message: "최소 5명 이상이어야 합니다.",
    }),
});

type createData = z.infer<typeof createSChema>;

const CreateGatheringModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    setError,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<createData>({
    resolver: zodResolver(createSChema),
  });

  const { mutate, isPending } = useCreateGathering();

  const onSubmit = (data: createData) => {
    if (!selectedDate || !selectedTime) {
      setError("dateTime", {
        type: "manual",
        message: "날짜 및 시간을 선택해주세요.",
      });
      return;
    }

    const imageFile = data.image as File;

    const datePart = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
    const dateTimeString = `${datePart}T${selectedTime}:00`;
    setValue("dateTime", dateTimeString);

    if (data.location === "을지로 3가") data.location = "을지로3가";
    if (data.type === "오피스 스트레칭") data.type = "OFFICE_STRETCHING";
    if (data.type === "워케이션") data.type = "WORKATION";
    if (data.type === "마인드풀니스") data.type = "MINDFULNESS";

    console.log(data);
    const gatheringData = {
      ...data,
      image: imageFile,
    };

    mutate(gatheringData, {
      onSuccess: () => {
        resetModal();
        onClose();
      },
    });
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    setSelectedTime(undefined);
    setValue("dateTime", "");
  };

  const handleTimeClick = async (time: string) => {
    if (selectedDate) {
      setSelectedTime(time);

      const datePart = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
      const dateTimeString = `${datePart}T${time}:00`;

      setValue("dateTime", dateTimeString, {
        shouldValidate: false,
        shouldDirty: true,
      });

      await trigger("dateTime", { shouldFocus: false }); // dateTime 필드만 검증
      clearErrors("dateTime");
    } else {
      setError("dateTime", {
        type: "manual",
        message: "날짜를 먼저 선택해주세요.",
      });
    }
  };

  const { location, setLocation, image, setImage, type, setType, resetModal } =
    useCreateGatheringStore();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  );

  const handleTypeChange = (type: string) => {
    setType(type);
    setValue("type", type);
    clearErrors("type");
  };

  const handleLocationChange = (loc: string) => {
    setLocation(loc);
    setValue("location", loc);
    clearErrors("location");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);
      setValue("image", file);
    }
  };

  const getTimeState = (time: string) => {
    const timeParts = time.split(":");
    const timeHours = parseInt(timeParts[0], 10);
    const timeMinutes = parseInt(timeParts[1], 10);
    const now = new Date();
    const selectedDateObject = selectedDate ? new Date(selectedDate) : null;
    if (!selectedDateObject) return "default";

    const isPastDate = selectedDateObject < now;
    if (isPastDate && !isToday(selectedDateObject)) return "inactive";

    if (isToday(selectedDateObject)) {
      const selectedTimeDate = new Date(selectedDateObject);
      selectedTimeDate.setHours(timeHours, timeMinutes);
      if (selectedTimeDate < now) return "inactive";
    }
    if (selectedTime === time) return "active";

    return "default";
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => {
          onClose();
          resetModal();
        }}
      >
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50" />
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <DialogPanel className="max-h-[90vh] overflow-y-auto bg-white px-[16px] py-[24px] md:px-[24px] md:py-[24px] w-[375px] md:w-[520px] rounded-xl flex flex-col gap-6">
            <div className="flex justify-between">
              <DialogTitle className="text-lg font-semibold">
                모임 만들기
              </DialogTitle>
              <div
                className="cursor-pointer"
                onClick={() => {
                  onClose();
                  resetModal();
                }}
              >
                <DeleteIcon color="#64748B" />
              </div>
            </div>

            <form
              className="flex flex-col gap-6 w-full text-gray-800"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-3">
                <label className="font-semibold">이름</label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="이름을 입력해주세요."
                  className="py-[10px] px-4 rounded-xl bg-gray-50 focus:ring-orange-500 focus:ring-2 focus:outline-none"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-semibold">장소</label>
                <div className="w-full">
                  <Menu as="div" className="relative inline-block w-full">
                    <MenuButton
                      className={`w-full h-10 rounded-xl bg-gray-50 border-gray-50 inline-flex items-center justify-between 
                        py-2 px-3 border-2 focus:ring-orange-500 focus:ring-2 focus:outline-none ${location ? " text-gray-800" : " text-gray-400"} `}
                    >
                      <span>{location || "장소를 선택해주세요."}</span>
                      <DownIcon />
                    </MenuButton>

                    <MenuItems className="mt-2 absolute z-20 w-full rounded-xl shadow-xl bg-white focus:outline-none">
                      <div className="p-1">
                        {locations.map((loc) => (
                          <MenuItem key={loc}>
                            <button
                              className="block px-4 py-2 w-full text-left hover:bg-orange-100 rounded-xl cursor-pointer"
                              onClick={() => handleLocationChange(loc)}
                            >
                              {loc}
                            </button>
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Menu>
                </div>

                <input
                  type="hidden"
                  {...register("location")}
                  value={location || ""}
                />

                {errors.location && (
                  <span className="text-red-500 text-sm">
                    {errors.location.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-semibold">이미지</label>
                <div className="flex justify-between">
                  <div className="w-[251px] md:w-[360px] py-[10px] px-4 rounded-xl bg-gray-50 ">
                    {image ? (
                      <span className="text-gray-800">{image.name}</span>
                    ) : (
                      <span className="text-gray-400">
                        이미지를 첨부해주세요.
                      </span>
                    )}
                  </div>

                  <Button
                    type="button"
                    className="px-[14px] md:px-[20px] py-[10px] focus:ring-orange-500 focus:ring-2 focus:outline-none "
                    style="outlined"
                    size="responsive"
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    파일 찾기
                  </Button>

                  <input
                    id="fileInput"
                    type="file"
                    {...register("image", {
                      required: "이미지를 첨부해주세요.",
                      onChange: handleFileChange,
                    })}
                    className="hidden"
                  />
                </div>
                {errors.image && (
                  <span className="text-red-500 text-sm">
                    {typeof errors.image.message === "string"
                      ? errors.image.message
                      : "이미지를 첨부해주세요."}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-semibold">선택 서비스</label>
                <div className="flex gap-[8px] md:gap-[2px]">
                  {createType.map((service) => (
                    <div
                      key={service.id}
                      className={`flex flex-row items-start pl-[8px] pt-[6px] md:pl-4 md:pt-3 cursor-pointer transition-all 
                        duration-200 w-[109px] h-[76px] md:w-[160px] md:h-[70px] rounded-lg gap-[8px] 
                        ${type === service.name ? "bg-gray-900" : "bg-gray-50"}`}
                      onClick={() => handleTypeChange(service.name)}
                    >
                      <Image
                        src={
                          type === service.name
                            ? "/images/check_active.svg"
                            : "/images/check_default.svg"
                        }
                        alt="check"
                        width={24}
                        height={24}
                      />

                      <input
                        type="hidden"
                        {...register("type")}
                        value={type || ""}
                      />

                      <div className="flex flex-col gap-1">
                        <span
                          className={`text-sm font-semibold ${type === service.name ? "text-white" : "text-gray-900"} `}
                        >
                          {service.tab}
                        </span>
                        {service.name !== "워케이션" && (
                          <span
                            className={`text-xs ${type === service.name ? "text-white" : "text-gray-700"}`}
                          >
                            <span className="block md:hidden">
                              {service.name.split(" ").map((word, index) => (
                                <span key={index} className="block">
                                  {word}
                                </span>
                              ))}
                            </span>
                            <span className="hidden md:block">
                              {service.name}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {errors.type && (
                  <span className="text-red-500 text-sm">
                    {errors.type.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-semibold">날짜</label>
                <div className="flex justify-center mb-[12px]">
                  <Calendar
                    selectedDate={selectedDate}
                    onSelectDate={handleDateChange}
                  />
                </div>
                <div className="text-sm text-gray-800">오전</div>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.morning.map((time) => (
                    <TimeButton
                      key={time}
                      time={time}
                      state={getTimeState(time)}
                      onClick={() => handleTimeClick(time)}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-800">오후</div>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.afternoon.map((time) => (
                    <TimeButton
                      key={time}
                      time={time}
                      state={getTimeState(time)}
                      onClick={() => handleTimeClick(time)}
                    />
                  ))}
                </div>

                <input type="hidden" {...register("dateTime")} />
                {errors.dateTime && (
                  <span className="text-red-500 text-sm">
                    {errors.dateTime.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-semibold">모집 정원</label>
                <input
                  type="number"
                  {...register("capacity", {
                    required: "모집 정원을 입력해주세요.",
                  })}
                  placeholder="최소 5인 이상 입력해주세요."
                  className="py-[10px] px-4 rounded-xl bg-gray-50 focus:ring-orange-500 focus:ring-2 focus:outline-none"
                  min={5}
                />
                {errors.capacity && (
                  <span className="text-red-500 text-sm">
                    {errors.capacity.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                style="solid"
                size="responsive"
                className="mt-4 py-[10px] items-center flex justify-center"
                disabled={
                  isPending || Object.keys(errors).length > 0 || isSubmitting
                }
              >
                {isPending ? "모임 생성 중...." : "확인"}
              </Button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateGatheringModal;
