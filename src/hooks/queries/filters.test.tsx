// @vitest-environment jsdom

import {renderHook, waitFor} from "@testing-library/react"
import {useFetchFilters} from "./filters"
import {describe, expect, it} from "vitest"
import {createQueryProviderWrapper} from "../../utils/testing/create-query-provider-wrapper"
import {getFiltersResponse} from "../../mocks/data"

describe("useFetchFilters", () => {
  it("should return filters", async () => {
    const {result} = renderHook(() => useFetchFilters(), {
      wrapper: createQueryProviderWrapper(),
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    await waitFor(() => expect(result.current.data).toEqual(getFiltersResponse))
  })
})
