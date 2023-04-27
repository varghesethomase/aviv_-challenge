import {createQuery} from "react-query-kit"
import {API_BASE_URL} from "../../configs"

type Response = {isAuthenticated: boolean}
type Variables = {username: string; password: string}

const useAuthenticate = createQuery<Response, Variables, Error>({
  primaryKey: `${API_BASE_URL}/login`,
  queryFn: ({
    queryKey: [primaryKey, variables],
  }: {
    queryKey: [string, Variables]
  }) => {
    console.log("here", primaryKey)
    return fetch(primaryKey, {
      method: "POST",
      body: JSON.stringify(variables),
    }).then((res) => res.json())
  },
  suspense: false,
})

export {useAuthenticate}
