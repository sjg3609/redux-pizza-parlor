import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

function Checkout() {

    const dispatch = useDispatch();
    const customerName = useSelector(store => store.customerName);
    const streetAddress = useSelector(store => store.streetAddress);
    const city = useSelector(store => store.city);
    const zipCode = useSelector(store => store.zipCode);
    const type = useSelector(store => store.type);
    const checkoutPrice = useSelector(store => store.checkoutPrice);
    let cart = useSelector(store => store.cart);


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
            console.log(`Error in POST for Checkout: ${error}`)
            alert('Something went wrong!');
        });
    }

    const removePizza = (id, price) => {
        for( var i = 0; i < cart.length; i++){ 
    
            if ( cart[i].id === id) { 
        
                cart.splice(i, 1); 
            }
        }
        dispatch({ type: 'UPDATE_CART', payload: cart });
        dispatch({ type: 'REMOVE_PIZZA', payload: price});
        console.log(cart);
    }

    

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
            <table id="orders">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(order => (
                            <tr key={order.id}>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td><button onClick={() => removePizza(order.id, order.price)}>Delete</button></td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
            <button onClick={addCustomer}>Checkout</button>
        </>
    )
}

export default Checkout;