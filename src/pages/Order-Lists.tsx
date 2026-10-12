import { FilterBar } from "@/components/order-lists";

function Orders() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Order Lists</h1>
      <div className="flex flex-col gap-4">
        <FilterBar />
      </div>
    </section>
  );
}

export default Orders;