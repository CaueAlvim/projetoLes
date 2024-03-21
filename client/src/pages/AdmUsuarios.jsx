import { Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import moment from 'moment';

function AdmUsuarios() {

    const usuariosTable = [
        { id: '1', usuario: 'NOMEUSUARIO1', dataCadastro: '2023-12-01' },
        { id: '2', usuario: 'NOMEUSUARIO2', dataCadastro: '2023-12-02' },
        { id: '3', usuario: 'NOMEUSUARIO3', dataCadastro: '2023-12-03' },
        { id: '4', usuario: 'NOMEUSUARIO4', dataCadastro: '2023-12-04' },
        { id: '5', usuario: 'NOMEUSUARIO5', dataCadastro: '2023-12-05' },
        { id: '6', usuario: 'NOMEUSUARIO6', dataCadastro: '2023-12-06' },
    ];

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ width: '75%', height: 'auto' }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Usuários cadastrados
                </Typography>

                <Divider variant='fullWidth' sx={{ width: '100%', margin: ' auto', bgcolor: 'black' }} />
                <Container fixed sx={{ mt: 3, mb: 5 }}>
                    <Typography variant="h6">Pesquisar:</Typography>
                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: .3 }}>
                        <Grid item xs={6}>
                            <TextField id="filled-basic" label="Nome usuário" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic" label="Data Inicial de Cadastro" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic" label="Data Final de Cadastro" variant="filled" fullWidth />
                        </Grid>
                    </Grid>
                </Container>

                <Divider variant='fullWidth' sx={{ width: '97%', margin: ' auto' }} />

                <Container fixed sx={{ my: 5 }}>
                    <TableContainer component={Paper} sx={{ width: '100%' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                <TableRow>
                                    <TableCell>Nome do usuário</TableCell>
                                    <TableCell align='right'>Membro desde</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usuariosTable.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.usuario}
                                        </TableCell>
                                        <TableCell align="right">
                                            {moment(row.dataCadastro).format('DD/MM/YYYY')}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>

            </Paper>
        </Grid>
    )
}

export default AdmUsuarios;