import { Box, Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function Dashboard() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openStatusDialog, setOpenStatusDialog] = useState(false);
    const [pedidoSelecionado, setPedidoSelecionado] = useState();
    const [alterarStatus, setAlterarStatus] = useState({ id: 0, status: '' });
    const [filter, setFilter] = useState({ produto: 0, dataInicial: '2024-01-01', dataFinal: moment().format('YYYY-MM-DD') });
    const [listaPedidos, setListaPedidos] = useState([]);

    // useEffect(() => {
    //     console.log();
    // }, []);

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ width: '75%', height: 'auto' }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Gráfico de vendas por produtos
                </Typography>

                <Divider variant='fullWidth' sx={{ width: '100%', margin: ' auto', bgcolor: 'black' }} />
                <Container fixed sx={{ mt: 3, mb: 3 }}>

                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: .3 }}>
                        <Grid item xs={6}>
                            <FormControl variant="filled" fullWidth>
                                <InputLabel id="dashboard-livro">Produtos</InputLabel>
                                <Select
                                    labelId="dashboard-livro"
                                    value={[]}
                                    onChange={() => 1}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic"
                                label="Data Inicial"
                                type='date'
                                variant="filled"
                                fullWidth
                                value={filter.dataInicial}
                                onChange={(event) => setFilter({ ...filter, dataInicial: event.target.value })} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic"
                                label="Data Final"
                                type='date'
                                variant="filled"
                                fullWidth
                                value={filter.dataFinal}
                                onChange={(event) => setFilter({ ...filter, dataFinal: event.target.value })} />
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <Button id='cypress-dashboard-search' onClick={() => 1} sx={{ mb: 1, mr: 5 }}>Pesquisar</Button>
                </Box>

                <Divider variant='fullWidth' sx={{ width: '97%', margin: 'auto', marginBottom: '2rem' }} />

                <Box sx={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <LineChart width={730} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
                            <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>

        </Grid>
    )
}

export default Dashboard;