import { useSelector } from "react-redux";
import "./Cart.css"
function Cart() {
    const selector = useSelector((state: any) => state.cart);
    
    function calculateTotalAmount() {
        let amount = 0;
        for (let x of selector.selectedProducts) {
            amount = amount + x.price;
        }
        return Math.round(amount);
    }

    return (
        <>
            {selector.selectedProducts.length === 0 ? (
                <div>Cart is Empty</div>
            ) : (
                <>
                    <section className="price-section">
                        <p className="amount-title">
                            Total Amount: <strong> &#8377; {calculateTotalAmount()}</strong>{" "}
                        </p>
                    </section>
                    <section className="product-listing">
                        {selector.selectedProducts.map((item: any) => {
                            return (
                                <section className="product-card">
                                    <img
                                        className="product-card-image"
                                        src={item.images[0]} alt={item.title}
                                    ></img>
                                    <div className="product-card-title">
                                        <h4 className="">{item.title}</h4>
                                        <p>{item.description}</p>
                                        <h5> &#8377;{item.price}</h5>
                                    </div>
                                </section>
                            );
                        })}
                    </section>
                </>
            )}
        </>
    );
}
export default Cart;