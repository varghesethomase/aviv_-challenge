// src/mocks/handlers.js
import {rest} from "msw"
import {API_BASE_URL} from "../configs"
export const handlers = [
  rest.post(`${API_BASE_URL}/login`, (_req, res, ctx) => {
    return res(
      ctx.json({
        isAuthenticated: true,
      })
    )
  }),
]
