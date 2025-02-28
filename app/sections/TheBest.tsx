import Image from "next/image";
import bgImage from "../../public/assets/the-best-image.jpg";
import PrimaryLine from "../components/PrimaryLine";
import playButton from "../../public/assets/playbutton.svg";

const TheBest = () => {
  return (
    <section className="section h-[450px] !p-0 relative">
      <Image
        src={bgImage}
        className="h-full w-full object-cover"
        alt="bg-image"
      />
      <div className="absolute inset-0 bg-slate-600 bg-opacity-45 grid place-items-center">
        <div className="container mt-16 flex flex-col justify-center items-center gap-2 text-center md:w-3/4 lg:w-9/12">
          <button className="">
            <Image className="" src={playButton} alt="play button" />
          </button>
          <h1 className="font-oswald uppercase font-bold lg:text-5xl text-3xl text-white">
            EXPERIENCE with us THE FINEST FLAVORS
          </h1>
          <PrimaryLine />
          <p className="font-dmSans text-subtle lg:text-2xl text-xl">
            Crafted with passion, served with perfection. Dive into a world of
            unforgettable tastes.
          </p>
        </div>
      </div>
    </section>
  );
};
export default TheBest;
