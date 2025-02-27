import MenuTab from "../components/MenuTab";
import PrimaryLine from "../components/PrimaryLine";

const Menu = () => {
  return (
    <section className="section">
      <div className="container px-6">
        <div className="flex flex-col gap-7 text-center items-center justify-center">
          <h1 className="text-white font-oswald text-3xl lg:text-5xl font-bold text-center">
            Discover Our Bestsellers
          </h1>
          <span>

          <PrimaryLine />
          </span>
          <p className="font-dmSans text-subtle">
            Handpicked favorites crafted to perfection. From classic beef to
            crispy chicken, explore the flavors that keep everyone coming back
            for more!
          </p>
        </div>

        <MenuTab />
      </div>
    </section>
  );
};
export default Menu;
