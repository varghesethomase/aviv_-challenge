import {screen, render} from "@testing-library/react"
import {describe, expect, it} from "vitest"
import App from "./App"

describe("Describe", () => {
  describe("Rendering", () => {
    it("displays the select filters button", () => {
      render(<App />)
      expect(
        screen.getByRole("button", {
          name: /select filters/i,
        })
      ).toBeInTheDocument()
    })
  })
  // describe("Functionality", () => {})
})
