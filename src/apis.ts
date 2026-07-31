import { dealsData, insightData, offerCarouselData, salesChartData, products, inboxList } from "@/constants";
import type { SalesInsight, SalesChartDataProps, ProductDealProps, OfferCarouselData, ProductProps, InboxTableColumn } from "@/types";

const salesInsightsApi = ():Promise<SalesInsight[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(insightData);
        }, 1000);
    });
}

const saleChartDataApi = ():Promise<SalesChartDataProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(salesChartData);
        }, 1000);
    });
}

const productDealsApi = (): Promise<ProductDealProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dealsData);
        }, 1000);
    });
}

const offerCarouselDataApi = (): Promise<OfferCarouselData[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(offerCarouselData);
        }, 1000);
    });
}

const productApi = (): Promise<ProductProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

const inboxListApi = (firstIndex: number, lastIndex: number): Promise<{ inboxList: InboxTableColumn[], totalCount: number }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ inboxList: inboxList.slice(firstIndex, lastIndex + 1), totalCount: inboxList.length });
        }, 1000);
    });
}


export { salesInsightsApi, saleChartDataApi, productDealsApi, offerCarouselDataApi, productApi, inboxListApi };