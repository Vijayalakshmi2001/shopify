import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import Image from "../../assets/images/emptycart.jpg";
import Button from 'react-bootstrap/Button';
import { cartSlice } from "../../redux/cart/cartSlice";

function Cart() {
    const dispatch =useDispatch();
    const selector = useSelector((state: any) => state.cart);

    function calculateTotalAmount() {
        let amount = 0;
        for (let x of selector.selectedProducts) {
            amount = amount + x.price;
        }
        return Math.round(amount);
    }
    console.log(selector.selectedProducts);

    return (
        <>
            {selector.selectedProducts.length === 0 ? (
                <section className="empty-cart">
                    <img className="empty-cart-image" src={Image} alt="image"></img>
                </section>
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
                                        <h5 className="">{item.title}</h5>
                                        {/* <p>{item.description}</p> */}
                                        <h5> &#8377;{item.price}</h5>
                                    </div>
                                    <div className="button-sec">
                                        <Button variant="outline-danger"
                                            onClick={() => {
                                                const newItems: any =[
                                                    ...selector.selectedProducts,
                                                ].filter((value) => {
                                                    console.log(value.id !== item.id);
                                                    return value.id !== item.id;
                                                });
                                                console.log(newItems);
                                                dispatch(cartSlice.actions.updateProducts(newItems));
                                            }}>Remove
                                        </Button>
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