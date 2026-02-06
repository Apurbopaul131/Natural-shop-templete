import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Onion from "../../assets/onion.png";

const DiscountProduct = () => {
  return (
    <div className="flex gap-2 p-3 bg-white rounded-md">
      <div>
        <Image
          src={Onion}
          alt="Onion"
          className="bg-secondary p-2 rounded-md"
        ></Image>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <FaStar color="#FFC107" size={16} />
          <span>4.5</span>
        </div>
        <h3 className="text-xl font-medium">Onion 1kg</h3>
        <p className="font-medium">$93.88</p>
      </div>
    </div>
  );
};

export default DiscountProduct;
