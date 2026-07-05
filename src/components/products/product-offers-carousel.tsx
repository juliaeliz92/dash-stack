import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import { useOfferCarouselData } from "@/services";

function ProductOffersCarousel() {
    const { data: productOffers, isLoading, error } = useOfferCarouselData();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error loading product offers.</div>;
    }
    return (
        <div className="w-full flex justify-center">
            <Carousel className="w-full">
                <CarouselContent>
                    {productOffers?.map((deal, index) => (
                        <CarouselItem key={index}>
                            <Card className="p-0" >
                                <CardContent className={`${deal.backgroundColor} h-64 text-white flex flex-col justify-center rounded-lg gap-2 p-12`}>
                                    <p>{deal.dateRange}</p>
                                    <h1 className="text-2xl font-extrabold">{deal.title}</h1>
                                    <p>{deal.caption}</p>
                                    <Button className="w-min mt-4 bg-orange-500 hover:bg-orange-600">{deal.buttonText}</Button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
            </Carousel>
        </div>
    );
}

export default ProductOffersCarousel;
