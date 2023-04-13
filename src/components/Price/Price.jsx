import { useSelector } from "react-redux";

function Price() {
    const checkoutPrice = useSelector(store => store.checkoutPrice);

    return (
        <div id='priceDiv'>
            <h3>Total: ${(Math.round(checkoutPrice * 100) / 100).toFixed(2)}</h3>
        </div>
    );
}

export default Price;