"use client";

import { leads } from "@/data/leads";
import { Scrollbar, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import LeadsCard from "./LeadsCard";
import { BiChevronRight } from "react-icons/bi";

const Leads = () => {
  // Create a ref for the Swiper instance
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full relative">
      <Swiper
        autoplay={false}
        speed={3000}
        navigation={false}
        scrollbar={false}
        spaceBetween={20}
        // Get the Swiper instance
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        slidesPerView={2}
      >
        {leads.map((lead, index) => (
          <SwiperSlide key={index}>
            <LeadsCard
              about={lead.about}
              avatar={lead.avatar}
              comment={lead.comment}
              company={lead.company}
              messageType={lead.messageType}
              name={lead.name}
              position={lead.position}
              type={lead.type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slideNext()} // Access the swiper instance and call slideNext
        className="absolute top-[50%] -right-3 z-20 p-1 rounded-full border bg-white shadow-sm"
      >
        <BiChevronRight size={24} className="text-blue-600" />
      </button>
    </div>
  );
};

export default Leads;
