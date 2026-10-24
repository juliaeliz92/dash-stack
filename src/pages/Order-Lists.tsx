import { useCallback, useState } from "react";
import { FilterBar, DataTable } from "@/components/order-lists";
import orderListTableColumns from "@/components/order-lists/data-table-columns";
import { useOrderListApi } from "@/services";

function Orders() {
  const [, setDateFilter] = useState<Date | undefined>(undefined);
  const [, setSelectedOrderTypes] = useState<string[]>([]);
  const [, setSelectedOrderStatuses] = useState<string[]>([]);
  const { data: orderListData, isLoading: isOrderListLoading, error: orderListError } = useOrderListApi(0, 14);

  const updateFilters = useCallback((dateFilter: Date | undefined, selectedOrderTypes: string[], selectedOrderStatuses: string[]) => {
    setDateFilter(dateFilter);
    setSelectedOrderTypes(selectedOrderTypes);
    setSelectedOrderStatuses(selectedOrderStatuses);
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Order Lists</h1>
      <div className="flex flex-col gap-4">
        <FilterBar updateFilters={updateFilters} />
        {
          isOrderListLoading ? (
          <div className="h-24 text-center">Loading...</div>
        ) : orderListError ? (
          <div className="h-24 text-center text-red-500">Error: {orderListError.message}</div>
        ) : orderListData?.totalCount ? (
          <div className="border border-gray-200 rounded-lg">
            <DataTable columns={orderListTableColumns} data={orderListData.orderList} />
          </div>
        ) : (
          <div className="h-24 text-center">No data available</div>
        )}
      </div>
    </section>
  );
}

export default Orders;