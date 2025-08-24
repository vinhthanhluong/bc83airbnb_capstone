import { useRoutes } from "react-router-dom"
import { routes } from "./routes";

function App() {
  const elementRoutes = useRoutes(routes);
  return (
    <>
      {elementRoutes}
    </>
  )
}

export default App
