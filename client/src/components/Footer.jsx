import { Grid, Typography } from '@mui/material'

function Footer() {

    return (
        <>
            <Grid sx={{ width: "100%", height: "auto", backgroundColor: "#559bbc", paddingTop: "1rem",paddingBottom: "1rem", }} >
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            Mundo dos livros
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="black" variant="subtitle">
                            {'2024 | React | Material UI | React Router'}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Footer;