"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import teamMembers from "@/features/team/teamMembers";

export default function TeamMembersSlider() {
  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={teamMembers.length > 3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        style={
          {
            height: "auto",
            "--swiper-pagination-color": "#db4444",
            "--swiper-pagination-bullet-inactive-color": "rgba(0, 0, 0,1)",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-border-radius": "50%",
            "--swiper-pagination-bottom": "0px",
          } as React.CSSProperties
        }
        className="team-members-swiper w-full"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={`member-${index}`} className="h-auto">
            <div className="w-full max-w-[370px] h-fit flex flex-col mx-auto items-center mb-10">
              <div className="bg-[#F5F5F5] w-full max-w-[370px] h-[430px] flex items-end justify-center rounded-[6px]">
                <Image
                  className="w-[300px] h-[400px] object-cover"
                  src={member.image}
                  alt={`${member.name} photo`}
                  width={300}
                  height={400}
                  priority={index < 3}
                />
              </div>
              <h5 className="font-medium text-[32px] mt-2 text-center">
                {member.name}
              </h5>
              <p className="text-[16px] text-center">{member.position}</p>
              <div className="flex justify-between w-[150px] mt-4">
                <a
                  href={member.social.twitter}
                  className="hover:scale-125 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/twitterIcon.png"
                    alt="twitterIcon"
                    width={25}
                    height={25}
                  />
                </a>
                <a
                  href={member.social.instagram}
                  className="hover:scale-125 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/instagramIcon.png"
                    alt="instagramIcon"
                    width={25}
                    height={25}
                  />
                </a>
                <a
                  href={member.social.linkedin}
                  className="hover:scale-125 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/linkedinIcon.png"
                    alt="linkedinIcon"
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
