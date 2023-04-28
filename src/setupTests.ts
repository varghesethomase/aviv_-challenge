import {afterAll, afterEach, beforeAll} from "vitest"
import matchers from "@testing-library/jest-dom/matchers"
import {expect} from "vitest"
import {fetch, Headers, Request, Response} from "cross-fetch"
import server from "./mocks/server"

expect.extend(matchers)

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  })
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
