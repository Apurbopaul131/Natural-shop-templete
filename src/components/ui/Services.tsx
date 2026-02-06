import Image from "next/image";
import ServicesImgTwo from "../../assets/delivery.png";
import ServicesImgThree from "../../assets/healthy.png";
import ServicesImgOne from "../../assets/service.png";
const Services = () => {
  return (
    <div className="container mx-auto py-20">
      <h3 className="text-accent font-semibold text-2xl pb-5">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-secondary text-center p-6 rounded-md">
          <div className="flex justify-center">
            <Image
              src={ServicesImgOne}
              alt="service_img"
              className="bg-white rounded-full p-4"
            ></Image>
          </div>
          <div className="space-y-2 mt-5">
            <h3 className="text-2xl font-semibold">24/7 Services</h3>
            <p className="text-[#111111]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="bg-secondary p-6 rounded-md">
          <div className="flex justify-center">
            <Image
              src={ServicesImgTwo}
              alt="service_img"
              className="bg-white rounded-full p-4"
            ></Image>
          </div>
          <div className="space-y-2 mt-5 text-center">
            <h3 className="text-2xl font-semibold">24/7 Services</h3>
            <p className="text-[#111111]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div className="bg-secondary text-center p-6 rounded-md">
          <div className="flex justify-center">
            <Image
              src={ServicesImgThree}
              alt="service_img"
              className="bg-white rounded-full p-4"
            ></Image>
          </div>
          <div className="space-y-2 mt-5">
            <h3 className="text-2xl font-semibold">24/7 Services</h3>
            <p className="text-[#111111]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
