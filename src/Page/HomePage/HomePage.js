import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Cart } from '../../Components/Cart/Cart'

const useStyles = makeStyles({
    homeComp: {
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
       
    }
})

export const HomePage = () => {
    const classes = useStyles()
    return (
        <div >
            <Container className={classes.homeComp}  maxWidth="xl">
                <Grid container>
                    <Grid xs={8} item>
                    <Typography>this is home page</Typography>
                    </Grid>
                    <Grid xs={4} item>
                    <Cart/>
                    </Grid>
                </Grid>
                
            
            </Container>
           
            
        </div>
    )
}
