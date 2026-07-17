import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from 'lucide-react';


export function SearchInput({placeholder}: {placeholder?: string}) {
    return (
        <InputGroup className="bg-gray-100 max-w-[200px]">
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            <InputGroupInput placeholder={placeholder || "Search"} />
        </InputGroup>
    )
}   

export default SearchInput
