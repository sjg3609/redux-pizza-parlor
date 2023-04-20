import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Checkout() {

    const dispatch = useDispatch();
    const customerName = useSelector(store => store.customerName);
    const streetAddress = useSelector(store => store.streetAddress);
    const city = useSelector(store => store.city);
    const zipCode = useSelector(store => store.zipCode);
    const type = useSelector(store => store.type);
    const checkoutPrice = useSelector(store => store.checkoutPrice);
    const cart = useSelector(store => store.cart);

    console.log(cart);

    const addCustomer = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: customerName,
                street_address: streetAddress,
                city: city,
                zip: zipCode,
                type: type,
                total: checkoutPrice,
                pizzas: cart,
            }
        }).then((response) => {
            console.log(response);
            dispatch({type: 'EMPTY CART'});
        }).catch((error) => {
            console.log(`Error in POST for CustomerForm ${error}`)
            alert('Something went wrong!');
        });
    }

    // const fetchPizzas () => {
    //     axios.get('/api/pizzas')
    // }

    console.log(customerName);

    return (

        <>
            <h1>Checkout</h1>
            <div>
                <p>{customerName}</p>
                <p>{streetAddress}</p>
                <p>{city}</p>
                <p>{zipCode}</p>
                <p>{type}</p>

            </div>
            <ul>
                {
                    cart.map(order => (
                        <li key={order.id}>{order.name} {order.price}</li>
                    ))
                }
            </ul>

            <button onClick={addCustomer}>Checkout</button>
        </>
    )
}

export default Checkout;