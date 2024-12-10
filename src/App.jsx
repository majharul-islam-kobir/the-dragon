import { Outlet } from "react-router"
import Header from "./component/nevber/Header"
import Nevber from "./component/nevber/Nevber"


function App() {

  return (
    <>
      <div className=" w-10/12 mx-auto">
        <Header />
        <Nevber />
          <Outlet />
      </div>
    </>
  )
}

export default App
