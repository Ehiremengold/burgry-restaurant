import PrimaryLine from "../components/PrimaryLine";
import Image from "next/image";
import { articles } from "../lib/utils";

const Article = () => {
  return (
    <section className="section">
      <div className="container px-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold font-oswald text-white lg:text-4xl text-xl uppercase">
            NEWS & ARTICLES
          </h1>
          <PrimaryLine />
          <p className="font-dmSans text-subtle lg:text-xl  text-base text-center lg:w-3/5">
            Stay updated with the latest news, delicious recipes, and exciting
            events. Discover what’s happening in our world of flavor!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          {articles.map((article, index) => {
            const { title, category, img, beginning } = article;
            return (
              <div
                key={index}
                className="flex h-full flex-col gap-4"
              >
                <div className="h-fit relative">
                  <Image src={img} className="object-cover" alt={title} />
                  <div className="absolute bottom-0 left-0 p-3 bg-secondary rounded-tr-xl text-primary font-dmSans text-sm">
                    {category}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-white font-oswald font-bold text-xl">
                    {title}
                  </h1>
                  <p className="text-subtle text-base font-dmSans">
                    {beginning}
                  </p>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <p className="text-primary text-base">Read More</p>
                    <span className="text-primary">&rarr;</span>
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
export default Article;
