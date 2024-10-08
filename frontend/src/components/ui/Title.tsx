import { FC } from "react";

interface TitleProps {
  text1: string;
  text2: string;
}
const Title: FC<TitleProps> = ({ text1, text2 }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="inline-flex gap-2 items-center mb-3 text-2xl"
    >
      <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
