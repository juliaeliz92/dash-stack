import { useContext } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import { FavoriteContext } from "@/favorite-context"

function ProductCarousel({id, images, title, price, cur, rating, reviews}: {id: number, images: string[], title: string, price: number, cur: string, rating: number, reviews: number}) {
    const { favorites, updateFavorites } = useContext(FavoriteContext);

    return (
        <Card className="w-full pt-0">
            <CardContent className="p-0">
                <Carousel>
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index} >
                                <picture>
                                    <source srcSet={`${src}1200/900`} media="(min-width: 1024px)" />
                                    <source srcSet={`${src}800/600`} media="(min-width: 768px)" />
                                    <source srcSet={`${src}400/300`} media="(min-width: 640px)" />
                                    <img src={`${src}600/400`} alt={`Product ${index + 1}`} className="w-full" />
                                </picture>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 w-5 h-5" />
                    <CarouselNext className="right-4 w-5 h-5" />
                </Carousel>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
                <div>
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-sm text-blue-500 font-bold">{cur}{price}</p>
                    <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star
                                key={index}
                                className={`w-4 h-4 text-${index < Math.floor(rating) ? 'yellow-500' : 'gray-400'} fill-current mr-1`}
                            />
                        ))}
                        <span className="text-sm text-gray-400 ml-1">({reviews.toFixed(1)} reviews)</span>
                    </div>
                    <Button className="mt-2 bg-gray-200 hover:bg-gray-300 text-black font-bold">Edit Product</Button>
                </div>
                <div className="flex items-start h-full">
                    <Button variant="ghost" className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer" onClick={() => {
                        if (favorites.includes(id)) {
                            updateFavorites(favorites.filter(fav => fav !== id));
                        } else {
                            updateFavorites([...favorites, id]);
                        }
                    }}>
                        <Heart size={20} color={favorites.includes(id) ? "red" : "black"} style={{ fill: favorites.includes(id) ? "red" : "none" }} />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProductCarousel