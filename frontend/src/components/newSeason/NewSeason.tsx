import Title from "../ui/Title";

const NewSeason = () => {
  return (
    <div className="mt-10">
      <Title text1="New Season" text2="Product" />
      <div className="rounded-sm grid  md:grid-cols-3 grid-cols-2 gap-2">
        <div data-aos="fade-up" data-aos-delay="300" className=" rounded-sm">
          <img
            className="rounded-sm"
            src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/160924-ANASAYFA-KOZMETIK-LP.JPG"
            alt="new season"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="rounded-sm">
          <img
            className="rounded-sm"
            src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/160924-ANASAYFA-AYK-AKS-LP.JPG"
            alt="new season"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="900" className="rounded-sm">
          <img
            className="rounded-sm"
            src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/160924-ANASAYFA-HOME-LP.JPG"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewSeason;
