import { Outlet } from "react-router-dom"
import Navbar from "../../Shared/Navbar/Navbar"

function Main() {
  return (
      <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
    </div>
  )
}
export default Main