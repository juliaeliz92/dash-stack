import { useContext } from "react"
import { ProductCarousel } from "@/components"
import { FavoriteContext } from "@/favorite-context"
import { useProductApi } from "@/services";

function ProductCarouselGrid({isFavorites}: {isFavorites?: boolean}) {

    const { favorites } = useContext(FavoriteContext);
    const { data: productsData, isLoading, error } = useProductApi();
    let productsToShow = productsData;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading products.</p>;
    }

    if (isFavorites) {
        productsToShow = productsData?.filter(product => favorites.includes(product.id));
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productsToShow?.map((product, index) => (
                <ProductCarousel
                    id={product.id}
                    key={index}
                    images={product.images}
                    title={product.title}
                    price={product.price}
                    cur={product.cur}
                    rating={product.rating}
                    reviews={product.reviews}
                />
            ))}
        </div>
    )
}

export default ProductCarouselGrid