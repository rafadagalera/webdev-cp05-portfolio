import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './components/menu'
import Footer from './components/footer'
export default function App() {
  return (
    <>
    <div >
      <Menu/>
      <Outlet/>
    </div>
      <Footer/>
    </>
  )
}