import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const customerName = useSelector(store => store.customerName);
    const streetAddress = useSelector(store => store.streetAddress);
    const city = useSelector(store => store.city);
    const zipCode = useSelector(store => store.zipCode);
    const type = useSelector(store => store.type);
    const checkoutPrice = useSelector(store => store.checkoutPrice);
    const cart = useSelector(store => store.cart);

    const submitInfo = (event) => {
        event.preventDefault();
        addCustomer();
        history.push('/checkout');
    }

    const nameChange = (event) => {
        const action = { type: 'SET_CUSTOMER_NAME', payload: event.target.value };
        dispatch(action);
    }

    const addressChange = (event) => {
        const action = { type: 'ADD_STREET_ADDRESS', payload: event.target.value };
        dispatch(action);
    }

    const addCity = (event) => {
        const action = { type: 'ADD_CITY', payload: event.target.value };
        dispatch(action);
    }

    const addZipCode = (event) => {
        const action = { type: 'SET_ZIP_CODE', payload: event.target.value };
        dispatch(action);
    }

    const setPickup = (event) => {
        const action = { type: 'SET_PICKUP', payload: event.target.value};
        dispatch(action);
    }

    const setDelivery = (event) => {
        const action = { type: 'SET_DELIVERY', payload: event.target.value };
        dispatch(action);
    }
    

    const addCustomer = () => {
        const data = {
            customer_name: customerName,
                street_address: streetAddress,
                city: city,
                zip: zipCode,
                type: type,
                total: checkoutPrice,
                pizzas: cart,
        };
        console.log(data);
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
        }).catch((error) => {
            console.log(`Error in POST for CustomerForm ${error}`)
            alert('Something went wrong!');
        });
    }

    return (
        <div>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={submitInfo}>
                <input type="text" value={customerName} onChange={nameChange} placeholder="Customer Name"/>
                <br/>
                <input type="text" value={streetAddress} onChange={addressChange} placeholder="Street Address"/>
                <br/>
                <input type="text" placeholder="City" value={city} onChange={addCity}/>
                <br/>
                <input type="text" placeholder="Zip Code" value={zipCode} onChange={addZipCode}/>
                <br/>
                <input type="radio" name="Order Type" value="Pickup" onChange={setPickup}/>Pickup
                <input type="radio" name="Order Type" value="Delivery" onChange={setDelivery}/>Delivery
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CustomerForm;