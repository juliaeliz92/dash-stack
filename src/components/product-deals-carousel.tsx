import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {Button} from "@/components/ui/button"

const productDeals = [
    { background: "bg-blue-400", body: <div>
        <p>September 12-22</p>
        <h1 className="text-2xl font-extrabold">Enjoy free home delivery in this summer</h1>
        <p>Designer Dresses - Pick from trendy Designer Dress.</p>
        <Button className="mt-4 bg-orange-500 hover:bg-orange-600">Get Started</Button>
    </div> },
    { background: "bg-green-400", body: <div>
        <p>October 1-15</p>
        <h1 className="text-2xl font-extrabold">Special discounts on selected items</h1>
        <p>Up to 30% off on a wide range of products.</p>
        <Button className="mt-4 bg-orange-500 hover:bg-orange-600">Shop Now</Button>
    </div> },
    { background: "bg-pink-400", body: <div>
        <p>November 10-25</p>
        <h1 className="text-2xl font-extrabold">Holiday sale is here!</h1>
        <p>Get ready for the most wonderful time of the year with exclusive deals.</p>
        <Button  className="mt-4 bg-yellow-500 hover:bg-yellow-600">Explore Deals</Button>
    </div> },
]

function ProductDealsCarousel() {
    return (
        <div className="w-full flex justify-center">
            <Carousel className="w-full">
                <CarouselContent>
                    {productDeals.map((deal, index) => (
                        <CarouselItem key={index}>
                            <Card className="p-0" >
                                <CardContent className={`${deal.background} h-64 text-white flex flex-col justify-center rounded-lg p-10`}>
                                    {deal.body}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 w-5 h-5" />
                <CarouselNext className="right-3 w-5 h-5" />
            </Carousel>
        </div>
    );
}

export default ProductDealsCarousel;
