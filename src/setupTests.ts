import {afterAll, afterEach, beforeAll} from "vitest"
import server from "./mocks/server"
import {fetch, Headers, Request, Response} from "cross-fetch"

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "error",
  })
)
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
