import { TextField, Button, RadioGroup, Radio, FormControlLabel, FormControl } from '@mui/material';
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
        const action = { type: 'SET_PICKUP', payload: event.target.value };
        dispatch(action);
    }

    const setDelivery = (event) => {
        const action = { type: 'SET_DELIVERY', payload: event.target.value };
        dispatch(action);
    }

    const previousPage = () => {
        history.push('/select')
    }


    return (
        <div>
            <h2>Step 2: Customer Information</h2>
            <FormControl>
                <TextField variant="standard" type="text" value={customerName} onChange={nameChange} placeholder="Customer Name" />
                <br />
                <TextField variant="standard" type="text" value={streetAddress} onChange={addressChange} placeholder="Street Address" />
                <br />
                <TextField variant="standard" type="text" placeholder="City" value={city} onChange={addCity} />
                <br />
                <TextField variant="standard" type="text" placeholder="Zip Code" value={zipCode} onChange={addZipCode} />
                <br />
                <RadioGroup type="radio" name="Order Type" onChange={setPickup}>
                    <FormControlLabel value="Pickup" control={<Radio />} label="Pickup" />
                </RadioGroup>

                <RadioGroup type="radio" name="Order Type" onChange={setDelivery}>
                    <FormControlLabel value="Delviery" control={<Radio />} label="Delivery" />
                </RadioGroup>
                <br />
                <br />
                <Button type="submit" variant="contained" onClick={submitInfo}>Submit</Button>
            </FormControl>
            <br />
            <br />
            <Button variant="contained" onClick={previousPage}>Back</Button>
        </div>
    )
}

export default CustomerForm;