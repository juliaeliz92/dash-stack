import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import type { ButtonGroupItem } from "@/types"

function ButtonGroupContainer({ buttonGroups }: { buttonGroups: ButtonGroupItem[] }) {
  return (
    <ButtonGroup>
      {buttonGroups.map((item, index) => (
        <>
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              {item.icon ? (
                <Button variant="outline" size="icon" onClick={item.onClick}>
                  {item.icon}
                </Button>
              ) : (
                <Button variant="outline" size="icon" onClick={item.onClick}>
                  {item.name}
                </Button>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
          {index < buttonGroups.length - 1 && <ButtonGroupSeparator />}
        </>
      ))}
    </ButtonGroup>
  );
}

export default ButtonGroupContainer;