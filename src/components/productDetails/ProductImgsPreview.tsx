"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImgsPreviewType = {
  gallery?: string[];
};

export default function ProductImgsPreview({
  gallery,
}: ProductImgsPreviewType) {
  const [imgUrl, setImgUrl] = useState(gallery ? gallery[0] : "");
  return (
    <section className="flex gap-4 h-[600px] max-sm:h-[400px] max-sm:flex-col">
      <div className="flex flex-col justify-between max-sm:flex-row max-sm:gap-2">
        {gallery?.map((img, index) => (
          <div
            key={index}
            className="bg-[#F5F5F5] cursor-pointer rounded-[4px] w-[170px] h-[138px] flex items-center justify-center"
          >
            <Image
              onClick={() => setImgUrl(img)}
              src={img}
              alt={img}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center bg-[#F5F5F5] rounded-[4px] w-[500px] max-sm:w-[300] max-sm:h-[300] max-sm:self-center">
        <Image
          src={imgUrl}
          alt={imgUrl}
          width={500}
          height={500}
          className="max-sm:w-[200px] max-sm:h-[200px]"
        />
      </div>
    </section>
  );
}
