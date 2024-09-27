const HeroLeft = () => {
  return (
    <div className="md:w-1/2 w-full h-full flex items-center p-10 justify-center rounded-sm">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <p className="w-14 h-1.5 bg-gray-800"></p>
          <span data-aos="fade-up-right">OUR BESTSELLERS</span>
        </div>
        <div>
          <h1
            data-aos="fade-up-left"
            className="text-4xl tracking-wider font-bold"
          >
            SUMMER <br /> COLLECTION
          </h1>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="w-14 h-1.5 bg-gray-800"></p>
          <span data-aos="fade-down-right" className="font-bold">
            SHOP NOW
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
