// src/mocks/handlers.js
import {rest} from "msw"
import {API_BASE_URL} from "../configs"
import {getFiltersResponse} from "./data"
export const handlers = [
  rest.get(`${API_BASE_URL}/filters`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getFiltersResponse))
  }),
]
