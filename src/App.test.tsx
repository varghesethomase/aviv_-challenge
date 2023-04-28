// @vitest-environment happy-dom

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
      render(<App />)

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
    it("closes the modal on clicking the close modal button", async () => {
      render(<App />)

      expect(screen.getByTestId("dialog")).not.toHaveAttribute("open")
      fireEvent.click(
        screen.getByRole("button", {
          name: /select filters/i,
        })
      )
      await waitFor(() => {
        expect(screen.getByTestId("dialog")).toHaveAttribute("open")
        expect(screen.getByTestId("dialog-close")).toBeInTheDocument()
      })
      fireEvent.click(screen.getByTestId("dialog-close"), {focus: true})
      await waitFor(() =>
        expect(screen.getByTestId("dialog")).toHaveClass("dialog--is-hidden")
      )
    })

    it("adds the class dialog--open to the body when dialog is open and removes it when closed", async () => {
      render(<App />)
      expect(screen.getByTestId("dialog")).not.toHaveAttribute("open")
      fireEvent.click(
        screen.getByRole("button", {
          name: /select filters/i,
        })
      )
      await waitFor(() => {
        expect(screen.getByTestId("dialog")).toHaveAttribute("open")
      })
      expect(document.body?.classList.contains("dialog--open")).toBeTruthy()
      fireEvent.click(screen.getByTestId("dialog-close"))
      await waitFor(() =>
        expect(document.body?.classList.contains("dialog--open")).toBeFalsy()
      )
    })
  })
})
