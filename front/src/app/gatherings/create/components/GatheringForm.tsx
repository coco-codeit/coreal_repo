"use client";

import Button from "@/app/gatherings/components/Button";
import GatheringType from "@/app/gatherings/create/components/GatheringType";
import Connection from "@/app/gatherings/create/components/Connection";
import ImageUploader from "@/app/gatherings/create/components/ImageUploader";
import Dropdown from "@/app/gatherings/create/components/Dropdown";
import Calendar from "@/app/gatherings/create/components/Calendar";
import {
  daysOptions,
  timeOptions,
  fieldOptions,
  participantOptions,
} from "@/types/options";
import useFormStore from "@/store/gatherings/useFormStore";

function GatheringForm() {
  const {
    type,
    title,
    description,
    day,
    time,
    field,
    participant,
    setTitle,
    setDescription,
    setDay,
    setTime,
    setField,
    setParticipant,
  } = useFormStore();

  const optionsButton = (
    options: string[],
    selected: string,
    onSelect: (option: string) => void,
  ) =>
    options.map((option) => (
      <Button
        key={option}
        variant={selected === option ? "secondary" : "neutral"}
        size="small"
        onClick={() => onSelect(option)}
      >
        {option}
      </Button>
    ));

  const handleParticipant = (value: string) => {
    const participantNumber = Number(value.replace("명", ""));
    setParticipant(participantNumber);
  };

  return (
    <div className="flex flex-col">
      <p className="font-title text-headline py-2">모임 만들기</p>
      <GatheringType />
      <div className="flex flex-col gap-14 py-10 px-8">
        <div className="flex flex-col gap-2">
          <label>모임이름</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="모임이름을 입력해주세요."
            className="w-full border border-purple-2 hover:border-purple-3 focus:outline-none focus:ring-1 focus:ring-purple-3 active:ring-purple-3 rounded-2xl h-12 p-5"
          />
        </div>
        <Connection />
        <ImageUploader />
        <Calendar />
        <div className="flex flex-col gap-2">
          <label>요일</label>
          <div className="flex flex-wrap gap-2">
            {optionsButton(daysOptions, day, setDay)}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>시간</label>
          <div className="flex flex-wrap gap-2">
            {optionsButton(timeOptions, time, setTime)}
          </div>
        </div>

        <div
          className={`flex ${type === "project" ? "flex-row-reverse" : "flex-row"} gap-4`}
        >
          <div className="flex flex-col gap-2 w-1/2">
            <label>모집인원</label>
            <Dropdown
              options={participantOptions}
              selectedValue={`${participant}명`}
              onSelect={handleParticipant}
            />
          </div>
          {type === "project" ? (
            <div className="flex flex-col gap-2 w-1/2">
              <label>모집분야</label>
              <Dropdown
                options={fieldOptions}
                selectedValue={field}
                onSelect={setField}
              />
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label>모임설명</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="모임설명을 입력해주세요."
            className="resize-none h-36 w-full border border-purple-2 hover:border-purple-3 focus:outline-none focus:ring-1 focus:ring-purple-3 active:ring-purple-3 rounded-2xl p-5"
          />
        </div>

        <div className="flex justify-end">
          <Button variant="primary">만들기</Button>
        </div>
      </div>
    </div>
  );
}

export default GatheringForm;
