import Image from "next/image";
import BannerImage from "../../assets/hero-vegetables.png";
const Banner = () => {
  return (
    <div className="text-[#111111]">
      <div className="text-center pt-16 pb-8 space-y-4">
        <h1 className="text-5xl font-semibold">
          Freshness{" "}
          <span className="text-accent">
            You can <br /> Count
          </span>{" "}
          On, Prices You Love!
        </h1>
        <p className="text-xl">
          Shop your daily essentials at unbeatable prices. From fresh produce to
          pantry <br /> staples, we’ve got you covered every day!
        </p>
      </div>
      <div className="absolute bottom-0 md:left-1/2 md:-translate-x-1/2">
        <Image
          src={BannerImage}
          width={600}
          height={400}
          alt="banner-image"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
