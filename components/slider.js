// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        Slide 1
        <br />
        <Image
          src="/next.svg"
          width={100}
          height={100}
          alt="Picture of the author"
          priority={true}
        />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>
        Slide 3 <br />
        <Image
          src="/vercel.svg"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}
