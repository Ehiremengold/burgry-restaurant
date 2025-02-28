const Button = ({
  color,
  text,
  makeBold,
}: {
  color: string;
  text: string;
  makeBold?: boolean;
}) => {
  return (
    <button
      className={`whitespace-nowrap relative overflow-hidden border-2 border-transparent ${
        makeBold && "font-semibold"
      } transition-all duration-300 ease-in-out w-fit rounded-lg px-6 py-2 uppercase font-oswald
        ${
          color === "primary"
            ? "text-secondary bg-primary"
            : "bg-secondary text-white"
        }
        ${color === "primary" ? "group hover:text-white hover:border-white" : "border-transparent"}
      `}
    >
      <span className="relative z-10 lg:text-base text-sm">{text}</span>
      <span
        className={`absolute inset-0 bg-black transition-transform duration-300 ease-in-out 
          translate-y-[-100%] w-full h-full 
          group-hover:translate-y-0
        `}
      />
    </button>
  );
};

export default Button;
