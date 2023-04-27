import {createQuery} from "react-query-kit"
import {API_BASE_URL} from "../../configs"

type Response = {isAuthenticated: boolean}
type Variables = {scope: string}
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

const useFetchFilters = createQuery<Response, Variables, Error>({
  primaryKey: `${API_BASE_URL}/filters`,
  queryFn: ({queryKey: [primaryKey]}: {queryKey: [string, Variables]}) => {
    return fetch(primaryKey, {
      method: "GET",
    }).then((res) => res.json())
  },
  suspense: true,
})

export {useFetchFilters}
