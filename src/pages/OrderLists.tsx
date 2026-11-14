import { useCallback, useState } from "react";
import { FilterBar, DataTable } from "@/components/order-lists";
import orderListTableColumns from "@/components/order-lists/data-table-columns";
import { useOrderListApi } from "@/services";

function Orders() {
  const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);
  const [selectedOrderTypes, setSelectedOrderTypes] = useState<string[]>([]);
  const [selectedOrderStatuses, setSelectedOrderStatuses] = useState<string[]>([]);
  const { data: orderListData, isLoading: isOrderListLoading, error: orderListError } = useOrderListApi(dateFilter, selectedOrderTypes, selectedOrderStatuses);

  const updateFilters = useCallback((date: Date | undefined, orderTypes: string[], orderStatuses: string[]) => {
    setDateFilter(date);
    setSelectedOrderTypes(orderTypes);
    setSelectedOrderStatuses(orderStatuses);
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Order Lists</h1>
      <div className="flex flex-col gap-4">
        {
          isOrderListLoading ? (
          <div className="h-24 text-center">Loading...</div>
        ) : orderListError ? (
          <div className="h-24 text-center text-red-500">Error: {orderListError.message}</div>
        ) : orderListData?.totalCount ? (
          <>
            <FilterBar updateFilters={updateFilters} />
            <DataTable
              columns={orderListTableColumns}
              data={orderListData.orderList}
              count={orderListData.totalCount}/>
          </>
        ) : (
          <div className="h-24 text-center">No data available</div>
        )}
      </div>
    </section>
  );
}

export default Orders;