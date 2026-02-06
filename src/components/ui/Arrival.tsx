import Image from "next/image";
import DawatLogo from "../../assets/dawat-logo.png";
import DawatPictue from "../../assets/dawat-mock-up.png";
import InidaGateLogo from "../../assets/india-gate-logo.png";
import InidaGatePicture from "../../assets/india-gate-mock-up.png";
const Arrival = () => {
  return (
    <div className="md:container w-[90%] mx-auto my-20">
      <h3 className="text-2xl text-accent font-semibold mb-5">
        Arrival & Offers
      </h3>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
        <div className="md:col-span-3 grid grid-cols-2 gap-8 items-center p-4 bg-[#115414] rounded-2xl">
          <div className="space-y-4">
            <Image src={DawatLogo} alt="dawat-logo"></Image>
            <button className="px-6 py-4 bg-[#63B76D] rounded-xl text-white">
              Cook Exotic Dishes
            </button>
            <h3 className="text-2xl text-white">
              UP to <span className="font-semibold">20% OFF</span>
            </h3>
          </div>
          <div>
            <Image src={DawatPictue} alt="dawat-picture"></Image>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-8 items-center p-4 bg-[#102861] rounded-2xl">
          <div className="space-y-4">
            <Image src={InidaGateLogo} alt="dawat-logo"></Image>
            <button className="px-6 py-4 bg-[#2A4D97] rounded-xl text-white">
              World’s No.1 Rice
            </button>
            <h3 className="text-2xl text-white">
              UP to <span className="font-semibold">40% OFF</span>
            </h3>
          </div>
          <div>
            <Image src={InidaGatePicture} alt="dawat-picture"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
