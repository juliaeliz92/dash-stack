import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from 'lucide-react';


export function SearchInput() {
    return (
        <InputGroup>
            <InputGroupAddon>
                <Search size={16} />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search"/>
        </InputGroup>
    )
}   

export default SearchInput
