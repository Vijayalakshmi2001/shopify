import './Header.css';
import Cart from "../../assets/svg/cart.svg";
import Logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
function Header() {
    const selector = useSelector((state:any)=>state.cart)                       
    console.log(selector);
    return (
        <header className="header-container">
            <section className="logo-sec">
                <img src={Logo} style={{ width: 30 }} alt="Logo"></img>
            </section>
            <section className="nav-links-sec">
                <div>
                    <Link className="nav-link" to="/shopify">
                    Home
                    </Link>
                </div>
                <div>
                    <Link className="nav-link" to="/about">
                    About
                    </Link>
                </div>
                <div>
                    <Link className="nav-link" to="/contact">
                    contact
                    </Link>
                </div>
                <div>
                    <Link className="nav-link nav-icon" to="/cart">
                    <img src={Cart} style= {{ width: 30 }} alt="svg"></img>
                    <div className="icon">{selector.selectedProducts.length}</div>
                    </Link>
                </div>
            </section>
        </header>
    
    );
}
export default Header;