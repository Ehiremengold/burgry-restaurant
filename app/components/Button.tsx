const Button = ({ color, text }: { color: string; text: string }) => {
  return (
    <button
      className={`rounded-lg px-4 md:text-2xl text-lg py-12 font-dmSans ${
        color === "primary" ? "text-secondary" : "text-white"
      }`}
    >
      {text}
    </button>
  );
};
export default Button;
