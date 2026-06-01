import { useContext } from "react"
import { ProductCarousel } from "@/components"
import { products } from "@/constants.tsx"
import { FavoriteContext } from "@/favorite-context"

function ProductCarouselGrid({isFavorites}: {isFavorites?: boolean}) {

    const { favorites } = useContext(FavoriteContext);
    let productsToShow = products;

    if (isFavorites) {
        productsToShow = products.filter(product => favorites.includes(product.id));
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productsToShow.map((product, index) => (
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