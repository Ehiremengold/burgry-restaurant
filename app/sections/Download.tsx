import Image from "next/image";
import MockUp from "../../public/assets/order-image.png";
import PrimaryLine from "../components/PrimaryLine";
import deliveryIcon from "@/public/assets/download-icons/delivery.svg";
import payIcon from "@/public/assets/download-icons/pay.svg";
import appStore from "@/public/assets/appstore.svg";
import playStore from "@/public/assets/googlestore.svg";

const Download = () => {
  return (
    <section className="section">
      <div className="px-6 container flex lg:flex-row flex-col-reverse lg:items-stretch items-center lg:justify-between justify-center gap-20">
        <Image src={MockUp} alt="app mockup" />
        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center max-sm:items-start gap-4">
          <h1 className="text-white font-oswald font-bold text-2xl lg:text-4xl">
            Order Your Favorite Food Right from Your Phone
          </h1>
          <PrimaryLine />
          <p className="text-subtle lg:text-xl text-base font-dmSans lg:items-start max-sm:text-left md:text-center lg:text-left">
            Craving a delicious meal? Skip the lines and order effortlessly
            through our app. Fast, easy, and at your fingertips!
          </p>
          <div className="flex flex-col gap-5 lg:justify-start justify-center lg:items-start items-center">
            {[
              {
                img: deliveryIcon,
                main: "free delivery",
                sub: "Get your favorite meals delivered straight to your door – no extra cost, no hassle!",
              },
              {
                img: payIcon,
                main: "Special Promo",
                sub: "Exclusive deals just for app users! Save more while enjoying your favorite burgers.",
              },
            ].map((item, index) => {
              const { img, main, sub } = item;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-5 bg-tertiary rounded-xl px-3 py-6"
                >
                  <Image alt="" src={img} />
                  <div className="flex flex-col gap-3">
                    <h1 className="uppercase font-oswald font-bold text-white text-lg lg:text-xl">
                      {main}
                    </h1>
                    <p className="font-dmSans text-subtle lg:text-lg text-base">
                      {sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3  max-[470px]:self-center">
            <Image
              src={appStore}
              className="max-[375px]:w-1/2"
              alt="apple app store"
            />
            <Image
              src={playStore}
              className="max-[375px]:w-1/2"
              alt="google play store"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Download;
