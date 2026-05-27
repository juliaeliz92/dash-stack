import { ProductDealsCarousel } from "../components";

function Products() {
    return (
        <section className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Products</h1>
            <ProductDealsCarousel />
        </section>
    );
}

export default Products