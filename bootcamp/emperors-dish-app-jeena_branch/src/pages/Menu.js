import React from 'react'
import { makeStyles } from '@mui/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    CardMedia
} from '@mui/material';
import { createStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
//import Chevrolet from '../Images/Chevrolet.jpg'
// const theme = useTheme();
// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         padding: theme.spacing(2)
//     }
// }))

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        //padding: theme.spacing.unit
    },
  }),
);

const theme = createTheme();


export default function AltCard() {
    const classes = useStyles()
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ]
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {data.map(elem => (
                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                        <Card>
                        <CardMedia
                            component="img"
                            height="194"
                            image="./images/food.png"
                            alt="Paella dish"
                        />
                            <CardHeader
                                title={`quarter : ${elem.quarter}`}
                                subheader={`earnings : ${elem.earnings}`}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Hello World
                                </Typography>
                            </CardContent>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
    )
}