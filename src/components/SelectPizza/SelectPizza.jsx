import PizzaItem from "./PizzaItem";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";

function SelectPizza() {
    const [pizzaMenu, setPizzaMenu] = useState([]);
    const history = useHistory();

    const fetchPizzaMenu = () => {
        axios.get('/api/pizza').then((response) => {
            setPizzaMenu(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }

    const nextPage = () => {
        history.push('/customersInfo');
    }

    useEffect(() => {
        fetchPizzaMenu();
    }, []);
    
    return (
        <div>
            <Container>
                <Grid container 
                    columnSpacing={5}
                    rowSpacing={3}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    {pizzaMenu.map((pizza) => (
                        <Grid item xs={6} key={pizza.id}>
                            <PizzaItem 
                                pizza = {pizza}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Button variant="contained" onClick={nextPage} sx={{ m: 3 }}>Next</Button>
        </div>
    );
}

export default SelectPizza;