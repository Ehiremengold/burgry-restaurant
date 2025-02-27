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
      className={`${makeBold && "font-semibold"} w-fit rounded-lg px-6 py-2 md:text-base uppercase  font-oswald ${
        color === "primary"
          ? "text-secondary  bg-primary"
          : "bg-secondary text-white"
      }`}
    >
      {text}
    </button>
  );
};
export default Button;
