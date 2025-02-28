const Subscribe = () => {
  return (
    <section className="section !bg-primary">
      <div className="container px-6 flex lg:flex-row flex-col gap-10 lg:justify-between justify-center lg:items-start items-center">
        <div className="flex flex-col gap-3 lg:items-start items-center">
          <h1 className="font-oswald font-bold text-2xl uppercase lg:text-4xl">
            Get exclusive update
          </h1>
          <p className="font-dmSans font-medium text-secondary lg:text-lg  text-base lg:text-left text-center ">
            Be the first to know about special deals, new menu items, and
            exclusive offers. Join our community and never miss a bite!
          </p>
        </div>
        <div className="flex lg:items-stretch items-center lg:justify-start justify-center gap-3 max-sm:flex-col w-full">
          <input
            type="text"
            placeholder="Email Address"
            className="px-6 py-4 rounded-lg md:w-3/5 w-full"
          />
          <button className="px-4 py-4 rounded-lg uppercase bg-secondary font-oswald text-white font-bold border-none">Subscribe now</button>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
