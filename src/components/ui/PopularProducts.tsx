import DiscountCard from "./DiscountCard";
import DiscountProduct from "./DiscountProduct";
const PopularProducts = () => {
  return (
    <div className="bg-secondary py-20 my-20">
      <div className="md:container w-[90%] mx-auto">
        <h3 className="text-accent font-semibold text-2xl mb-5">
          Popular Products
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <DiscountCard />
          <div className="col-span-2 grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-4  gap-4">
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
            <DiscountProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
