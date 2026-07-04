import { dealsData, insightData, salesChartData } from "@/constants";
import type { SalesInsight, SalesChartDataProps, ProductDealProps } from "@/types";

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

export { salesInsightsApi, saleChartDataApi, productDealsApi };