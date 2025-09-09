"use client";

// @ts-expect-error don`t find splide types
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import teamMembers from "@/features/team/teamMembers";

export default function TeamMembersSlider() {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        perPage: 3,
        focus: 0,
        omitEnd: true,
        interval: 4000,
        pauseOnHover: true,
        arrows: false,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
      }}
    >
      {teamMembers.map((member) => (
        <SplideSlide key={member.social.twitter} className="h-[625px]">
          <div className="w-[370px] h-fit flex flex-col m-auto max-sm:items-center">
            <div className="bg-[#F5F5F5] w-[370px] h-[430px] flex items-end justify-center rounded-[6px]">
              <Image
                className="w-[300px] h-[400px]"
                src={member.image}
                alt={`${member.name} photo`}
                width={300}
                height={500}
              />
            </div>
            <h5 className="font-medium text-[32px] mt-2">{member.name}</h5>
            <p className="text-[16px]">{member.position}</p>
            <div className="flex justify-between w-[150px] mt-4">
              <a href={member.social.twitter} className="hover:scale-125">
                <Image
                  src="/icons/twitterIcon.png"
                  alt="twitterIcon"
                  width={25}
                  height={25}
                />
              </a>
              <a href={member.social.instagram} className="hover:scale-125">
                <Image
                  src="/icons/instagramIcon.png"
                  alt="instagramIcon"
                  width={25}
                  height={25}
                />
              </a>
              <a href={member.social.linkedin} className="hover:scale-125">
                <Image
                  src="/icons/linkedinIcon.png"
                  alt="linkedinIcon"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
