const Button = ({ color, text }: { color: string; text: string }) => {
  return (
    <button
      className={`rounded-lg px-6 py-2 md:text-base uppercase  font-oswald ${
        color === "primary" ? "text-secondary  bg-primary" : "bg-secondary text-white"
      }`}
    >
      {text}
    </button>
  );
};
export default Button;
