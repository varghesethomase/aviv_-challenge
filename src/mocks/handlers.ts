// src/mocks/handlers.js
import {rest} from "msw"
export const handlers = [
  rest.get("http://filters", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "abc",
        description: "",
        value: "",
        type: "",
      })
    )
  }),
]
