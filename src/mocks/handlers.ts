// src/mocks/handlers.js
import {rest} from "msw"
import {API_BASE_URL} from "../configs"
export const handlers = [
  rest.get(`${API_BASE_URL}/filters`, (_req, res, ctx) => {
    console.log("in the server")
    return res(
      ctx.json({
        name: "",
        description: "",
        value: "",
        type: "",
      })
    )
  }),
]
