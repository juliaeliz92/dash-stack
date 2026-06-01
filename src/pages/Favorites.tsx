import { ProductCarouselGrid } from "@/components"

function Favorites() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Favorites</h1>
      <ProductCarouselGrid isFavorites />
    </section>
  );
}

export default Favorites