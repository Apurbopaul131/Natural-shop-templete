import Image from "next/image";
import VagitableOffer from "../../assets/vegetable-offer.png";
const DiscountCard = () => {
  return (
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
  );
};

export default DiscountCard;
