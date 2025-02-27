import Image from "next/image";
import offeringImg1 from "../../public/assets/offerings/offering-image-1.png";
import offeringImg2 from "../../public/assets/offerings/offering-image-2.png";
import offeringImg3 from "../../public/assets/offerings/offering-image-3.png";

const Offerings = () => {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-3 gap-6 px-6">
        <div className="relative bg-primary rounded-lg px-3 lg:pt-4 pt-3 pb-2 flex flex-col">
          <Image
            src={offeringImg1}
            className="absolute left-0 bottom-0 size-28 lg:size-32"
            alt="offering-img"
          />
          <div className="ml-[25%] sm:ml-[20%] md:ml-[40%] space-y-2">
            <h2 className="font-oswald text-white font-bold text-2xl uppercase">
              Food
            </h2>
            <p className="text-sm text-black font-dmSans font-medium leading-tight">
              Satisfy your cravings with our juicy burgers and more.
            </p>
          </div>
        </div>
        <div className="relative bg-[#007936] rounded-lg px-3 lg:pt-4 pt-3 pb-2">
          <Image
            src={offeringImg2}
            className="absolute left-0 bottom-0 size-28 lg:size-32"
            alt="offering-img"
          />
          <div className="ml-[25%] sm:ml-[20%] md:ml-[40%] space-y-2">
            <h2 className="font-oswald text-white font-bold text-2xl">Snack</h2>
            <p className="text-sm text-white font-dmSans font-medium leading-tight">
              Perfect bites for every mood. Crunchy, tasty, and fun!
            </p>
          </div>{" "}
        </div>
        <div className="relative bg-[#CC3433] rounded-lg px-3 lg:pt-4 pt-3 pb-2">
          <Image
            src={offeringImg3}
            className="absolute left-0 bottom-0 size-28 lg:size-32"
            alt="offering-img"
          />
          <div className="ml-[25%] sm:ml-[20%] md:ml-[40%] space-y-2">
            <h2 className="font-oswald text-white font-bold text-2xl uppercase">
              Beverage
            </h2>
            <p className="text-sm text-white font-dmSans font-medium leading-tight">
              Quench your thirst with our refreshing drinks.
            </p>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
export default Offerings;
