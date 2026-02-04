import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Onion from "../../assets/onion.png";
import VagitableOffer from "../../assets/vegetable-offer.png";
const PopularProducts = () => {
  return (
    <div className="bg-[#EFEBE3] py-20 my-20">
      <div className="md:container w-[90%] mx-auto">
        <h3 className="text-[#179800] font-semibold text-2xl mb-5">
          Popular Products
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-1 bg-linear-to-t from-[#a8ed9b] to-[#53db3a] space-y-2 pt-14 px-6 rounded-md">
            <h3 className="text-2xl font-bold text-white">30% off</h3>
            <p className="text-[#111111]">
              Discover a world of treats, toys and essentials handpicked for
            </p>
            <button className="px-7 py-2 bg-white rounded-md">Buy Now</button>
            <div className="flex justify-end">
              <Image src={VagitableOffer} alt="vagitable-offer"></Image>
            </div>
          </div>
          <div className="col-span-2 border-2 grid grid-cols-2 grid-rows-4 p-2 md:grid-cols-3 md:gird-rows-3 gap-4">
            <div className="flex gap-2 p-2 bg-white rounded-md">
              <div>
                <Image src={Onion} alt="Onion"></Image>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <FaStar />
                  <span>4.5</span>
                </div>
                <h3>Onion 1kg</h3>
                <p>$93.88</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white rounded-md">
              <div>
                <Image src={Onion} alt="Onion"></Image>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <FaStar />
                  <span>4.5</span>
                </div>
                <h3>Onion 1kg</h3>
                <p>$93.88</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
