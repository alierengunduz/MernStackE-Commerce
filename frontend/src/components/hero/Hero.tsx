import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="w-full md:gap-y-0 gap-y-10 flex md:flex-row flex-col  justify-between h-[600px] rounded-sm border-4 shadow-md shadow-gray-300 border-double">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
