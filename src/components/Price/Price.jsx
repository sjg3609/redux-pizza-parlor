import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Price() {
    const checkoutPrice = useSelector(store => store.checkoutPrice);

    return (
        <div id='priceDiv'>    
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/select">Menu</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li id="totalDiv"><h3>Total: ${(Math.round(checkoutPrice * 100) / 100).toFixed(2)}</h3></li>
        </ul>
        </div>
    );
}

export default Price;