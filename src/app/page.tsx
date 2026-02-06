import Header from "@/components/Header";
import Arrival from "@/components/ui/Arrival";
import PopularProducts from "@/components/ui/PopularProducts";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <PopularProducts />
      <Arrival />
    </div>
  );
}
