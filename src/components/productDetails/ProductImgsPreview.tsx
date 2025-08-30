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
    <section className="flex gap-4 h-[600px]">
      <div className="flex flex-col justify-between">
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
      <div className="flex items-center justify-center bg-[#F5F5F5] rounded-[4px] w-[500px]">
        <Image src={imgUrl} alt={imgUrl} width={500} height={500} />
      </div>
    </section>
  );
}
