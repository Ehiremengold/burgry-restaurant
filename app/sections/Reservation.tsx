import bgImage from "@/public/assets/special-occassion-image.jpg";
import Image from "next/image";
import PrimaryLine from "../components/PrimaryLine";

const Reservation = () => {
  return (
    <section className="section h-[450px] relative !p-0">
      <Image
        src={bgImage}
        className="h-full w-full object-center object-cover"
        alt="background image"
      />
      <div className="absolute inset-0 bg-slate-600 bg-opacity-60">
        <div className="container h-full  justify-center flex flex-col px-6">
          <span className="lg:w-3/4 flex flex-col gap-4 lg:justify-start justify-center lg:items-start items-center">
            <h1 className="max-md:text-center uppercase text-white font-bold font-oswald text-3xl lg:text-5xl lg:leading-snug">
              Get a special offer for your special occasion
            </h1>
            <PrimaryLine />
            <p className="text-white font-dmSans lg:text-2xl text-lg lg:text-left text-center">
              Celebrate in style with us! Reserve your spot today and make your
              special moments even more memorable with exclusive deals and
              delicious food.
            </p>
            <button
              className={`relative overflow-hidden border-2 border-transparent font-semibold transition-all duration-300 ease-in-out w-fit rounded-lg px-6 py-4 md:text-xl text-lg uppercase font-oswald text-secondary bg-primary group hover:text-white hover:border-white
      `}
            >
              <span className="relative z-10">Book a reservation</span>
              <span
                className={`absolute inset-0 bg-black transition-transform duration-300 ease-in-out 
          translate-y-[-100%] w-full h-full 
          group-hover:translate-y-0
        `}
              />
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Reservation;
