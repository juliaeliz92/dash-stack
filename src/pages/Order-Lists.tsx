import { FilterBar } from "@/components/order-lists";

function Orders() {
  const updateFilters = (dateFilter: Date | undefined, selectedOrderTypes: string[], selectedOrderStatuses: string[]) => {
    console.log("Filters updated:", { dateFilter, selectedOrderTypes, selectedOrderStatuses });
  }
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Order Lists</h1>
      <div className="flex flex-col gap-4">
        <FilterBar updateFilters={updateFilters} />
      </div>
    </section>
  );
}

export default Orders;