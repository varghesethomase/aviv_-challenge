import {createQuery} from "react-query-kit"
import {API_BASE_URL} from "../../configs"

export type FilterResponseItem = {
  name: string
  description: string
  filterType: FilterTypes
  type: InputTypes
}
export enum FilterTypes {
  Input = "input",
  Select = "select",
}

export enum InputTypes {
  Button = "button",
  Text = "text",
  CheckBox = "checkbox",
  Email = "email",
}

const useFetchFilters = createQuery<Response, void, Error>({
  primaryKey: `${API_BASE_URL}/filters`,
  queryFn: ({queryKey: [primaryKey]}: {queryKey: [string]}) => {
    return fetch(primaryKey)
      .then((res) => res.json())
      .catch((err) => err)
  },
  suspense: true,
})

export {useFetchFilters}
