import PrimaryLine from "../components/PrimaryLine";
import { reviews } from "../lib/utils";
import Image from "next/image";
const Review = () => {
  return (
    <section className="section !bg-tertiary">
      <div className="container px-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold font-oswald text-white lg:text-4xl text-xl uppercase">
            What Our customers are saying
          </h1>
          <PrimaryLine />
          <p className="font-dmSans text-subtle lg:text-xl  text-base text-center lg:w-3/5">
            Real feedback from real food lovers. See why our customers keep
            coming back for more!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {reviews.map((review, index) => {
            const { img, name, comment, occupation } = review;
            return (
              <div
                key={index}
                className="drop-shadow-xl rounded-xl p-5 bg-secondary flex flex-col gap-4 items-stretch"
              >
                <p className="font-dmSans text-lg text-white h-full">{comment}</p>
                <div className="flex gap-4 items-center ">
                  <Image
                    src={img}
                    className="object-cover object-top rounded-full h-[50px] w-[50px] border-2 border-primary"
                    alt={name}
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-base text-white font-oswald capitalize">
                      {name}
                    </h1>
                    <p className="text-subtle font-dmSans text-sm">
                      {occupation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Review;
