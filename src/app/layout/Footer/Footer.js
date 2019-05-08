import React from 'react'
import Typography from '@material-ui/core/Typography';


const Footer = ({styles}) => {
    return (
        <footer className={styles}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
            </Typography>
        </footer>
    )
}

export default Footer
