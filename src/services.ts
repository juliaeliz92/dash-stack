import { useQuery } from "@tanstack/react-query";
import { salesInsightsApi, saleChartDataApi } from "@/apis";

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

export { useSalesInsights, useSalesChartData };