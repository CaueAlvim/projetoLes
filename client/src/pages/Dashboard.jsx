import { Box, Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DashboardService from "../services/DashboardService";
import LivroService from "../services/LivroService";

function Dashboard() {
    const [filter, setFilter] = useState({ produtoId: 0, dataInicial: '2024-01-01', dataFinal: moment().format('YYYY-MM-DD') });
    const [listaVendasPeriodosProduto, setListaVendasPeriodosProduto] = useState([]);
    const [listaLivrosSelect, setListaLivrosSelect] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    const fetchLivros = async () => {
        try {
            const listaLivros = await LivroService.searchAll(filter);
            setListaLivrosSelect(listaLivros);
        } catch (error) {
            console.error(error)
        }
    }

    const handlePesquisar = async () => {
        try {
            const lista = await DashboardService.pesquisar(filter);
            setListaVendasPeriodosProduto(lista);
        } catch (error) {
            console.error(error)
        }
    }

    const chartData = listaVendasPeriodosProduto.map(item => ({
        data: new Date(moment(item?.dataPedido).format('YYYY, MM, DD')),
        valorTotal: item?.valorTotalPedidoItem
    }));

    const dateFormatter = date => {
        return moment(date).format('DD/MM/YY');
    };

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
                                    value={filter.produtoId}
                                    onChange={(event) => setFilter({ ...filter, produtoId: event.target.value })}
                                >
                                    <MenuItem value={0}>TODOS</MenuItem>
                                    {listaLivrosSelect?.map((livro) => (
                                        <MenuItem key={livro.id} value={livro.id}>
                                            {livro.id} - {livro.titulo}
                                        </MenuItem>
                                    ))}
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
                    <Button id='cypress-dashboard-search' onClick={handlePesquisar} sx={{ mb: 1, mr: 5 }}>Pesquisar</Button>
                </Box>

                <Divider variant='fullWidth' sx={{ width: '97%', margin: 'auto', marginBottom: '1rem' }} />

                <Box sx={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={chartData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis
                                dataKey="data"
                                type="category"
                                tickFormatter={dateFormatter}
                            />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            <Area name="Total Vendido" type="monotone" dataKey="valorTotal" stroke="#bc7655" fill="#ce8659" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>

        </Grid>
    )
}

export default Dashboard;