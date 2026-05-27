import { ProductCarousel } from "@/components"

const products = [
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 1",
        price: 29.99,
        cur: "$",
        rating: 4.5,
        reviews: 120,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 2",
        price: 19.99,
        cur: "$",
        rating: 4.0,
        reviews: 45,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 3",
        price: 39.99,
        cur: "$",
        rating: 4.8,
        reviews: 230,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 4",
        price: 24.99,
        cur: "$",
        rating: 3.9,
        reviews: 18,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 5",
        price: 49.99,
        cur: "$",
        rating: 4.7,
        reviews: 89,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 6",
        price: 14.99,
        cur: "$",
        rating: 3.5,
        reviews: 12,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 7",
        price: 59.99,
        cur: "$",
        rating: 4.9,
        reviews: 340,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 8",
        price: 9.99,
        cur: "$",
        rating: 3.8,
        reviews: 7,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 9",
        price: 34.99,
        cur: "$",
        rating: 4.2,
        reviews: 66,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 10",
        price: 74.99,
        cur: "$",
        rating: 4.6,
        reviews: 150,
    },
    {
        images: [
            "https://picsum.photos/id/0/",
            "https://picsum.photos/id/1/",
            "https://picsum.photos/id/2/",
        ],
        title: "Product 11",
        price: 27.5,
        cur: "$",
        rating: 4.1,
        reviews: 33,
    },
]


function ProductCarouselGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
                <ProductCarousel
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