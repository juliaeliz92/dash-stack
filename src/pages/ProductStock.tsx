import { useProductStockApi } from "@/services";
import { DataTable, productStockTableColumns } from "@/components/product-stock";

function ProductStock() {
  const { data, isLoading, error } = useProductStockApi();

  return (
    <section className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Product Stock</h1>
          <div className="flex flex-col gap-4">
              {
                  isLoading ? (
                      <div className="h-24 text-center">Loading...</div>
                  ) : error ? (
                      <div className="h-24 text-center text-red-500">Error: {error.message}</div>
                  ) : data?.totalCount ? (
                      <>
                          <DataTable
                              columns={productStockTableColumns}
                              data={data.productStock}
                              count={data.totalCount} />
                      </>
                  ) : (
                      <div className="h-24 text-center">No data available</div>
                  )}
          </div>
    </section>
  );
}

export default ProductStock;