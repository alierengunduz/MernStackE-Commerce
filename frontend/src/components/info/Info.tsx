import { FaToolbox } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";

const InfoData = [
  {
    icon: <FaToolbox className="text-4xl text-[#3B82F6]" />,
    title: "We offer a 20-day free return policy on our products",
    description: "Instant service with over 100 stores in 84 cities",
  },
  {
    icon: <MdOutlinePayment className="text-4xl text-[#3B82F6]" />,
    title: "Cash on delivery option available for all products",
    description: "Convenient payment with various payment options",
  },
  {
    icon: <GrCertificate className="text-4xl text-[#3B82F6]" />,
    title: "With the assurance of AEG Commerce",
    description:
      "Always at your service with quality, safe, and original products",
  },
  {
    icon: <FaCarSide className="text-4xl text-[#3B82F6]" />,
    title: "Free shipping on your first order",
    description: "Free shipping on the first order for registered members",
  },
];

const Info = () => {
  return (
    <ul
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
    >
      {InfoData.map((item, index) => (
        <li
          key={index}
          className="bg-[#EFF3FF] flex flex-col items-center hover:shadow-md hover:translate-x-1 transition-all duration-300 cursor-pointer justify-center p-5 rounded-md gap-y-5"
        >
          <span>{item.icon}</span>
          <p className="text-blue-500 font-bold text-lg text-center">
            {item.title}
          </p>
          <hr className="w-full border-none h-[1.5px] bg-gray-300" />
          <p className="text-sm text-center text-blue-400">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Info;
