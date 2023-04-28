import {screen, render, fireEvent, waitFor} from "@testing-library/react"
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
  describe("Functionality", () => {
    it("opens the modal on clicking the select filters button", async () => {
      expect(screen.getByTestId("dialog")).not.toHaveAttribute("open")

      fireEvent.click(
        screen.getByRole("button", {
          name: /select filters/i,
        })
      )
      await waitFor(() =>
        expect(screen.getByTestId("dialog")).toHaveAttribute("open")
      )
    })
  })
})
