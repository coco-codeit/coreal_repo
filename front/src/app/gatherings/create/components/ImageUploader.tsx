import { useState, useRef } from "react";
import Image from "next/image";

function ImageUploader() {
  const [image, setImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (reader.readyState === 2 && event.target) {
        const imgUrl = event.target.result as string;
        setImage(imgUrl);
      }
    };
  };

  return (
    <div className="flex flex-col gap-2">
      <label>대표 이미지</label>
      <div
        className={`relative aspect-square rounded-2xl w-1/2 h-48 flex items-center justify-center hover:cursor-pointer ${
          image ? "" : "bg-gray-200"
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        {image ? (
          <Image
            src={image}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
            alt="대표 이미지"
          />
        ) : (
          <span>이미지를 선택해주세요.</span>
        )}
      </div>

      <input
        id="img"
        ref={fileInputRef}
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleImage}
      />
    </div>
  );
}

export default ImageUploader;
