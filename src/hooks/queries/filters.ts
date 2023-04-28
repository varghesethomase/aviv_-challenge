import {createQuery} from "react-query-kit"
import {API_BASE_URL} from "../../configs"

type Response = {isAuthenticated: boolean}
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

const useFetchFilters = createQuery<Response, null, Error>({
  primaryKey: "http://filters",
  queryFn: ({queryKey: [primaryKey]}: {queryKey: [string, null]}) => {
    return fetch(primaryKey)
      .then((res) => res.json())
      .catch((err) => err)
  },
  suspense: false,
})

export {useFetchFilters}
