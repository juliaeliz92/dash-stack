import { ProductDealsCarousel, ProductCarouselGrid } from "../components";

function Products() {
    return (
        <section className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Products</h1>
            <ProductDealsCarousel />
            <ProductCarouselGrid />
        </section>
    );
}

export default Products