import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

function TableFooter({ isPreviousPage, previousPage, isNextPage, nextPage, firstIndex, setFirstIndex, secondIndex, setSecondIndex, count }: 
    {isPreviousPage: boolean, previousPage: () => void, isNextPage: boolean, nextPage: () => void, firstIndex: number, setFirstIndex: (index: number) => void, secondIndex: number, setSecondIndex: (index: number) => void, count: number}) {
  return (
      <div className="flex justify-between py-5">
          <p className="text-[12px] text-muted-foreground">
              Showing {firstIndex + 1} - {secondIndex} of {count}
          </p>
          <div>
              <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                      previousPage()
                      setFirstIndex(firstIndex - 10)
                      setSecondIndex(secondIndex - 10)
                  }}
                  disabled={!isPreviousPage}
              >
                  <ChevronLeft className="h-1 w-6" />
              </Button>
              <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                      nextPage()
                      setFirstIndex(firstIndex + 10)
                      setSecondIndex(secondIndex + 10 > count ? count : secondIndex + 10)
                  }}
                  disabled={!isNextPage}
              >
                  <ChevronRight className="h-4 w-4" />
              </Button>
          </div>
      </div>)
}

export default TableFooter