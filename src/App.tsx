import Dialog from "./components/Dialog/Dialog"
import "./App.css"

// Start the mock service worker. Can be removed when replaced with the real server
import browser from "./mocks/browser"
import {useAuthenticate} from "./hooks/queries/filters"
if (import.meta.env.DEV) {
  browser.start()
}

const variables = {username: "varghese", password: "test123"}

function App() {
  const {data} = useAuthenticate({variables, suspense: true})
  console.log(data)
  return (
    <>
      <button>select filters</button>
      <Dialog />
    </>
  )
}

export default App
