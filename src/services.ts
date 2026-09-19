import { useQuery } from "@tanstack/react-query";
import {
    salesInsightsApi,
    saleChartDataApi,
    productDealsApi,
    offerCarouselDataApi,
    productApi,
    inboxListApi,
    getConversationById,
    inboxListStarredEmailsApi,
    inboxListSentEmailsApi
} from "@/apis";

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

const useProductApi = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['productApi'],
        queryFn: async () => {
            return productApi();
        }
    });
    return { data, isLoading, error };
}

const useInboxListApi = (firstIndex: number, lastIndex: number) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['inboxListApi', firstIndex, lastIndex],
        queryFn: async () => {
            return inboxListApi(firstIndex, lastIndex);
        }
    });
    return { data, isLoading, error };
}

const useConversationById = (id: number) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['conversationById', id],
        queryFn: async () => {
            return getConversationById(id);
        }
    });
    return { data, isLoading, error };
}

const useInboxListStarredEmailsApi = (firstIndex: number, lastIndex: number) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['inboxListStarredEmailsApi', firstIndex, lastIndex],
        queryFn: async () => {
            return inboxListStarredEmailsApi(firstIndex, lastIndex);
        }
    });
    return { data, isLoading, error };
}

const useInboxListSentEmailsApi = (firstIndex: number, lastIndex: number) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['inboxListSentEmailsApi', firstIndex, lastIndex],
        queryFn: async () => {
            return inboxListSentEmailsApi(firstIndex, lastIndex);
        }
    });
    return { data, isLoading, error };
}

export {
    useSalesInsights,
    useSalesChartData,
    useProductDeals,
    useOfferCarouselData,
    useProductApi,
    useInboxListApi,
    useConversationById,
    useInboxListStarredEmailsApi,
    useInboxListSentEmailsApi
};