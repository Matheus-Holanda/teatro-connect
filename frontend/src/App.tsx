import MakeRoutes from "./routes/index.routes"
import { GeneralProvider } from "./contexts/general.context"

function App() {

  return (
    <>
      <GeneralProvider>
        <MakeRoutes />
      </GeneralProvider>
    </>
  )
}

export default App
