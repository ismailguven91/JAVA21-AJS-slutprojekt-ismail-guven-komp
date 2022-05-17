import ReactDOM from "react-dom/client";
import { useState } from "react";
import HomePage from "./modules/Homepage";
import ShopPage from "./modules/ShopPage";
import CartPage from "./modules/Cartpage";



function App(){
    //useState and setter for username
    const [stateName, setStateName] = useState('');
    function updateUserInfo(userName){
        setStateName(userName);
        console.log(userName);
    }

    //useState for log in value and a method that sets the value
    const [stateIsLoggedIn, setStateIsLoggedIn] = useState("HomePage");
    function updateLogInStatus(status){
        setStateIsLoggedIn(status)
    }

    //useState and setter for total amount of products
    const [total, setTotal] = useState(0);
    function totalProducts(tot){
        setTotal(tot);
    }

    //useState to get total price from ShopPage and send it to ShoppingCart
    const [totalPrice, setTotalPrice] = useState(0);
    function totalPriceMain(tot){
        setTotalPrice(tot);
    }

    const[totalWatch1, setTotalWatch1] = useState(0);
    const[totalWatch2, setTotalWatch2] = useState(0);
    const[totalWatch3, setTotalWatch3] = useState(0);
    const[totalWatch4, setTotalWatch4] = useState(0);
    const[totalWatch5, setTotalWatch5] = useState(0);
    function totalWatch(totWatch1,totWatch2,totWatch3,totWatch4,totWatch5){
        setTotalWatch1(totWatch1);
        setTotalWatch2(totWatch2);
        setTotalWatch3(totWatch3);
        setTotalWatch4(totWatch4);
        setTotalWatch5(totWatch5);
    }


    return (
        //this return renders different components depending on the stateIsLoggedIn value.
        <>
        {stateIsLoggedIn == "ShopPage" && <ShopPage updateLogInStatus={updateLogInStatus} userName={stateName} totalProducts={totalProducts} totalPriceMain={totalPriceMain} totalWatch ={totalWatch} />}
        {stateIsLoggedIn == "HomePage" && <HomePage updateLogInStatus={updateLogInStatus} updateUserInfo={updateUserInfo}/>}
        {stateIsLoggedIn == "Cart" && <CartPage updateLogInStatus={updateLogInStatus} userName={stateName} total={total} totalPrice={totalPrice} totalWatch1 = {totalWatch1} totalWatch2 = {totalWatch2} totalWatch3 = {totalWatch3} totalWatch4 = {totalWatch4} totalWatch5 = {totalWatch5} />}
        </>
    )
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);