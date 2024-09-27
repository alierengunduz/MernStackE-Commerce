import Hero from "../../components/hero/Hero";
import Season from "../../components/season/Season";
import NewSeason from "../../components/newSeason/NewSeason";
import Info from "../../components/info/Info";
const HomePage = () => {
  return (
    <div className="px-10">
      <Hero />
      <NewSeason />
      <Season />
      <Info />
    </div>
  );
};

export default HomePage;
