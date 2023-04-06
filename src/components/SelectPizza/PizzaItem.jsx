import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function PizzaItem({ pizza }) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 140 }}
                image={pizza.image_path}
                title="pizza"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pizza.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pizza.description}
                </Typography>
                <CardActions>
                    ${pizza.price}
                    <Button>
                        Buy
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PizzaItem;