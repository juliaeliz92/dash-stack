import { useQuery } from "@tanstack/react-query";
import { salesInsightsApi } from "@/apis";

const useSalesInsights = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['salesInsights'],
        queryFn: async () => {
            return salesInsightsApi();
        }
    });

    return { data, isLoading, error };
}

export { useSalesInsights };