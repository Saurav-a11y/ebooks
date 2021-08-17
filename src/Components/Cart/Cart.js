import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    cartComp: {
        height: "100vh",
        borderLeft: "1px solid #bdbdbd"
    }
})

export const Cart = () => {
    const classes = useStyles()
    return (
        <div className={classes.cartComp}  >
            this is cart
        </div>
    )
}
