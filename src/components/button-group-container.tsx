import React from "react";
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
        <React.Fragment key={index}>
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              {item.icon ? (
                <Button variant="outline" size="icon" onClick={item.onClick} {...item.disabled && {disabled: item.disabled}}>
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
        </React.Fragment>
      ))}
    </ButtonGroup>
  );
}

export default ButtonGroupContainer;