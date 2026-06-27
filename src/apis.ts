import { insightData } from "@/constants";
import type { SalesInsight } from "./types";

const salesInsightsApi = ():Promise<SalesInsight[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(insightData);
        }, 1000);
    });
}

export { salesInsightsApi };