import { useQuery } from "@tanstack/react-query";
import { salesInsightsApi, saleChartDataApi, productDealsApi, offerCarouselDataApi } from "@/apis";

const useSalesInsights = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['salesInsights'],
        queryFn: async () => {
            return salesInsightsApi();
        }
    });

    return { data, isLoading, error };
}

const useSalesChartData = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['saleChartData'],
        queryFn: async () => {
            return saleChartDataApi();
        }
    });

    return { data, isLoading, error };
}

const useProductDeals = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['productDeals'],
        queryFn: async () => {
            return productDealsApi();
        }
    });

    return { data, isLoading, error };
}

const useOfferCarouselData = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['offerCarouselData'],
        queryFn: async () => {
            return offerCarouselDataApi();
        }
    });
    return { data, isLoading, error };
}

export { useSalesInsights, useSalesChartData, useProductDeals, useOfferCarouselData };