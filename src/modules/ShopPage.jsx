import { useState } from "react";
import ProductDetails from "./ProductDetails";


export default function ShopPage({ updateLogInStatus, userName, totalProducts, totalPriceMain, totalWatch }) {

    const Product1 = {
        Name: "ROLEX OYSTER PERPUTAL DATEJUST 26MM",
        url: "https://www.md-watches.com/wp-content/uploads/2019/10/Rolex-79174-5.jpg",
        price: 188200,
        info: "The Datejust’s enduring aesthetics make it instantly recognizable. The characteristic shape of the Oyster case, the 18 kt gold fluted bezel, the Cyclops lens over the date and the five-piece link Jubilee bracelet – specially made for the model – all contributed to making this watch a classic.",
        id: 1
    }

    const Product2 = {
        Name: "ROLEX OYSTER PERPUTAL DATEJUST DIAMONDS 26MM",
        url: "https://www.md-watches.com/wp-content/uploads/2019/06/Rolex-69173-diamond-grey-3.jpg",
        price: 119400,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k yellow gold and steel. The model is a compliment of sophisticated elegance with 10 diamonds, signed Rolex.",
        id: 2

    }
    const Product3 = {
        Name: "ROLEX OYSTER PERPUTAL DATEJUST 26MM",
        url: "https://www.md-watches.com/wp-content/uploads/2017/12/Rolex-Oyster-Perpetual-Datejust-steel-1-.jpg",
        price: 119400,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k yellow gold and steel. The model is a compliment of sophisticated elegance, signed Rolex.",
        id: 3

    }
    const Product4 = {
        Name: "ROLEX OYSTER PERPUTAL DATEJUST DIAMONDS",
        url: "https://www.md-watches.com/wp-content/uploads/2017/12/Rolex-Oyster-Perpetual-Datejust-diamonds-1.jpg",
        price: 124500,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k white gold and steel case. The model is a compliment of sophisticated elegance with 10 diamonds, signed by Rolex.",
        id: 4

    }

    const Product5 = {
        Name: "ROLEX OYSTER PERPUTAL DATEJUST BLACK 26MM",
        url: "https://www.md-watches.com/wp-content/uploads/2019/10/Rolex-69174-roman-5.jpg",
        price: 99800,
        info: "Feminine elegance at superlative, chronometer certified by a flawless and iconic accurate date display window , which change almost magical at midnight. It is one of the finest women’s watches, since 1957. The small dimensions make this model a manufacturing jeweler Rolex Jubilee Bracelet in agreement with 18k white gold and steel case. The model is a compliment of sophisticated elegance with 10 diamonds, signed by Rolex.",
        id: 5

    }

    

    //useState
    const [sum, setSum] = useState(0);
    const [Price, setPrice] = useState(0);
    const [Watch1, setWatch1] = useState(0);
    const [Watch2, setWatch2] = useState(0);
    const [Watch3, setWatch3] = useState(0);
    const [Watch4, setWatch4] = useState(0);
    const [Watch5, setWatch5] = useState(0);

    //Add 1 to sum and receive current product price and multipli to sum
    function totalSum(price, id) {
        setSum(sum + 1)
        setPrice(Price + price)

        if (id == 1){
            setWatch1(Watch1 + 1);
        }
        else if (id == 2){
            setWatch2(Watch2 + 1);
        }
        else if (id == 3){
            setWatch3(Watch3 + 1);
        }
        else if (id == 4){
            setWatch4(Watch4 + 1);
        }
        else {
            setWatch5(Watch5 + 1);
        }
        

    }
    //Subtract 1 to sum and receive current product price and multipli to sum
    function removeFromSum(price) {
        setSum(sum - 1);
        setPrice((sum - 1) * price)

        if (id == 1){
            setWatch1(Watch1 - 1);
        }
        else if (id == 2){
            setWatch2(Watch2 - 1);
        }
        else if (id == 3){
            setWatch3(Watch3 - 1);
        }
        else if (id == 4){
            setWatch4(Watch4 - 1);
        }
        else {
            setWatch5(Watch5 - 1);
        }
    }

    //function that directs to homepage
    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }

    //function that directs to Cart and sends the final total amount of products to ShoppingCartPage.jsx
    function goToCart() {
        totalProducts(sum);
        totalPriceMain(Price);
        totalWatch(Watch1);
        totalWatch(Watch2);
        totalWatch(Watch3);
        totalWatch(Watch4);
        totalWatch(Watch5);
        updateLogInStatus("Cart");
    }

    console.log(sum)
    console.log(Price)

    return (
        <>
            <h1>Welcome {userName}</h1>

            <div className="sticky-box">

                <p>Products: {sum}</p>
                <button onClick={goToCart}>Go to cart</button>
                <button onClick={clickToHomePage}>Log Out</button>

            </div>

            <br />
            <ProductDetails pInfo={Product1} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product2} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product3} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product4} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductDetails pInfo={Product5} totalSum={totalSum} removeFromSum={removeFromSum} />

        </>
    )
}