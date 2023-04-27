import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Dialog from "./components/Dialog/Dialog"
import "./App.css"

// Start the mock service worker. Can be removed when replaced with the real server
import browser from "./mocks/browser"
if (import.meta.env.DEV) {
  browser.start()
}

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <button>select filters</button>
      <Dialog />
    </QueryClientProvider>
  )
}

export default App
