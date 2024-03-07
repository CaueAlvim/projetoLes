import { Grid, Box, Typography } from '@mui/material'

function Footer() {

    return (
        <>
            <Box sx={{ width: "100%", height: "auto", backgroundColor: "#559bbc", paddingTop: "1rem",paddingBottom: "1rem", }} >
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            React Starter App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Footer;