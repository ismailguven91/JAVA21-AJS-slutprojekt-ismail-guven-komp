export default function ProductDetails({ pInfo, totalSum, removeFromSum, }) {
    const { Name, price, url, info, id } = pInfo

    let totalProducts = 0;

  //add +1 amount to cart and send the current product price
  function addToCart(){
    totalSum(price), id
}
//subtract -1 amount from cart and send the current product price
function removeFromCart(){
    removeFromSum(price,id);
}

    
    return (
        <>
            <h2>{Name}</h2>
            <img src={url} id="zoom1"/>
            <p>{info}</p>


            <div class="container">
                <div class="row row-cols-auto">
                    <div class="col">                        
                    <h3>{price} SEK</h3>
                    </div>
                    <div class="col">                        
                    <button onClick={addToCart}>+</button>
                    </div>
                    <div class="col">                        
                    <button onClick={removeFromCart}>-</button>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </>
    )
}





// NUMBER INPUT FÖR ATT VÄLJA HUR MÅNGA MAN SKA KÖPA
