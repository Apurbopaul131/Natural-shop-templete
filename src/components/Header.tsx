import Navbar from "./shere/Navbar";
import Banner from "./ui/Banner";

const Header = () => {
  return (
    <div className="bg-linear-to-t from-primary to-secondary h-220 md:h-200 relative">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;
