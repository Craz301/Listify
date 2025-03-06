import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const notes = [
  { text: "Stay Organized!", color: "rgba(255, 215, 0, 0.6)" }, // Gold
  { text: "Plan Your Tasks!", color: "rgba(255, 99, 71, 0.6)" }, // Tomato
  { text: "Track Progress!", color: "rgba(70, 130, 180, 0.6)" }, // Steel Blue
  { text: "Stay Productive!", color: "rgba(50, 205, 50, 0.6)" }, // Lime Green
  { text: "Stay Organized!", color: "rgba(255, 215, 0, 0.6)" }, // Gold
  { text: "Plan Your Tasks!", color: "rgba(255, 99, 71, 0.6)" }, // Tomato
  { text: "Track Progress!", color: "rgba(70, 130, 180, 0.6)" }, // Steel Blue
  { text: "Stay Productive!", color: "rgba(50, 205, 50, 0.6)" }, // Lime Green
  { text: "Stay Productive!", color: "rgba(50, 205, 50, 0.6)" }, // Lime Green
  { text: "Stay Organized!", color: "rgba(255, 215, 0, 0.6)" }, // Gold
  { text: "Plan Your Tasks!", color: "rgba(255, 99, 71, 0.6)" }, // Tomato
  { text: "Track Progress!", color: "rgba(70, 130, 180, 0.6)" }, // Steel Blue
  { text: "Stay Productive!", color: "rgba(50, 205, 50, 0.6)" } // Lime Green
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectCoverflow]}
      effect="slide"
      spaceBetween={80}
      slidesPerView={6}
      centeredSlides={true}
      autoplay={{ delay: 2000 }}
      loop={true}
      className="w-screen"
    >
      {notes.map((note, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div
            className="relative w-full m-6 h-50 rounded-2xl flex items-center justify-center text-black text-lg border-5 border-black p-4r"
            style={{
              backgroundColor: note.color,
              backgroundImage: "repeating-linear-gradient(transparent, transparent 24px, #000 26px)",
              backgroundSize: "80% 26px",
              backgroundPosition: "center"
            }}
          >
            {/* Centered Oblongs on top with Chrome effect */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-7 rounded-full border-3 border-black"
                  style={{ background: "linear-gradient(135deg, #e0e0e0, #b0b0b0, #e0e0e0)" }}
                ></div>
              ))}
            </div>
            {note.text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
