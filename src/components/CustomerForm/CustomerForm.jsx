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

    const submitInfo = (event) => {
        event.preventDefault();
        addCustomer();
    }

    // const nameChange 

    const addCustomer = () => {
        axios({
            method: 'POST',
            url: '/api/orders',
            data: {
                customer_name: customerName,
                street_address: streetAddress,
                city: city,
                zip: zipCode,
                type: type,
                total: total,
                pizzas: pizzas,
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(`Error in POST for CustomerForm ${error}`)
            alert('Something went wrong!');
        });
    }

    const nextPage = (event) => {
        event.preventDefault();
        history.push('/checkout');
    }

    return (
        <div>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={submitInfo}>
                <input type="text" value="Name"/>
                <br/>
                <input type="text" value="Street Address"/>
                <br/>
                <input type="text" value="City" />
                <br/>
                <input type="text" value="Zip Code"/>
                <br/>
                <input type="checkbox" value="Pickup"/>Pickup
                <input type="checkbox" value="Delivery"/>Delivery
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default CustomerForm;