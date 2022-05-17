export default function CartPage({ userName, updateLogInStatus, total, totalPrice, totalWatch1, totalWatch2, totalWatch3, totalWatch4, totalWatch5 }) {

    function product1() {
        if (totalWatch1 > 0) {
            return (
                <>
                    <img src="https://www.md-watches.com/wp-content/uploads/2019/10/Rolex-79174-5.jpg" ></img>
                    <p>amount: {totalWatch1}</p>
                </>
            )
        }
    }
    function product2() {
        if (totalWatch2 > 0) {
            return (
                <>
                    <img src="https://www.md-watches.com/wp-content/uploads/2019/06/Rolex-69173-diamond-grey-3.jpg" ></img>
                    <p>amount: {totalWatch2}</p>
                </>
            )
        }
    }
    function product3() {
        if (totalWatch3 > 0) {
            return (
                <>
                    <img src="https://www.md-watches.com/wp-content/uploads/2017/12/Rolex-Oyster-Perpetual-Datejust-steel-1-.jpg" ></img>
                    <p>amount: {totalWatch3}</p>
                </>
            )
        }
    }
    function product4() {
        if (totalWatch4 > 0) {
            return (
                <>
                    <img src="https://www.md-watches.com/wp-content/uploads/2017/12/Rolex-Oyster-Perpetual-Datejust-diamonds-1.jpg" ></img>
                    <p>amount: {totalWatch4}</p>
                </>
            )
        }
    }
    function product5() {
        if (totalWatch5 > 0) {
            return (
                <>
                    <img src="https://www.md-watches.com/wp-content/uploads/2019/10/Rolex-69174-roman-5.jpg" ></img>
                    <p>amount: {totalWatch5}</p>
                </>
            )
        }
    }

    function handleClick(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }


    function purchase(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
        alert("You purchased " + total + " products with the price of: " + totalPrice + " SEK")
    }

    return (

        <>
            <h1>Thanks for ordering {userName}</h1>
            <h1>Products: {total}</h1>
            <h1>Total price: {totalPrice} SEK</h1>
            {product1()}
            {product2()}
            {product3()}
            {product4()}
            {product5()}
            <button onClick={purchase}>Purchase</button>
            <button onClick={handleClick}>Log Out</button>
        </>
    )
}