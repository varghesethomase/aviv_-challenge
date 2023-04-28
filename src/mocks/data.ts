import {
  FilterTypes,
  InputTypes,
  FilterResponseItem,
} from "../hooks/queries/filters"
const getFiltersResponse: FilterResponseItem[] = [
  {
    name: "Pin Code",
    description: "Enter the pin code",
    filterType: FilterTypes.Input,
    type: InputTypes.Text,
  },
]

export {getFiltersResponse}
