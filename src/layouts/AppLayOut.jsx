import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppNavBar from "../components/AppNavBar";
import AppFooter from "../components/AppFooter";

const AppLayOut = ({products, carts, setToken}) => {
    return ( <>
        <AppHeader/>
        <AppNavBar products={products} carts={carts} setToken={setToken}/>
        <Outlet/>
        <AppFooter/>
    </> );

}
 
export default AppLayOut;