import {Routes , Route} from "react-router-dom"
import { Firstcomponent } from "../Discription/firstcomponets"
import { Home } from "../Home/Home"
import { Login } from "../LoginSignup/login/login"
import { Register } from "../LoginSignup/login/register"
import { Navbar } from "../LoginSignup/navbar/navbar"
import { ProductPage } from "../product/productpage"

export const AllRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/register" exact element={<Register/>}/>
                <Route path="/productpage" exact element={<ProductPage/>}/>
                <Route path="/discription" exact element={<Firstcomponent/>}/>
                {/* <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } /> */}
            </Routes>
        </>
    )
}