import Dialog from "./components/Dialog/Dialog"
import "normalize.css"
import "@fontsource/roboto"
import "./App.css"

// Start the mock service worker. Can be removed when replaced with the real server
import browser from "./mocks/browser"
import {useAuthenticate} from "./hooks/queries/filters"
import {useState} from "react"
if (import.meta.env.DEV) {
  browser.start()
}

const variables = {username: "varghese", password: "test123"}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {data} = useAuthenticate({variables, suspense: true})

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <button onClick={handleModalOpen}>select filters</button>
      <Dialog
        isOpen={isModalOpen}
        onClose={handleModalClose}
        classes="filter-dialog"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>hello world</div>
      </Dialog>
    </>
  )
}

export default App
