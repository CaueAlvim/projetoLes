import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';
import ResumoCompra from '../components/ResumoCompra';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutProducts from '../components/CheckoutProducts';
import CarrinhoService from '../services/CarrinhoService';
import CartaoService from '../services/CartaoService';
import EnderecoService from '../services/EnderecoService';
import Loading from '../components/Loading';
import PedidoVendaService from '../services/PedidoVendaService';
import CupomService from '../services/CupomService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalFinalizacaoPagamento from '../components/ModalFinalizacaoPagamento';

function Checkout() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({});
    const [carrinho, setCarrinho] = useState({});
    const [listaCartoes, setListaCartoes] = useState([]);
    const [listaEnderecos, setListaEnderecos] = useState([]);
    const [enderecoField, setEnderecoField] = useState('');
    const [cardFields, setCardFields] = useState([{ cardFieldId: 1, cartaoInfo: null, cartaoValor: 10 }]);
    const [valorFrete, setValorFrete] = useState(30);
    const [cupom, setCupom] = useState('');
    const [listaCupons, setListaCupons] = useState([]);
    const [modalFinalizacaoOpen, setModalFinalizacaoOpen] = useState(false);

    useEffect(() => {
        fetchLocalStorage();
    }, []);

    const fetchLocalStorage = async () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            fetchCarrinho(storedUser.id);
            fetchCards(storedUser.id);
            fetchAddresses(storedUser.id);
        }
    }

    const fetchCarrinho = async (id) => {
        setCarrinho(await CarrinhoService.carregarCarrinho(id));
    }

    const fetchCards = async (id) => {
        setListaCartoes(await CartaoService.carregarPorCliente(id));
    }

    const fetchAddresses = async (id) => {
        setListaEnderecos(await EnderecoService.carregarPorCliente(id));
    }

    // const prepararFinalizacao = () => {
    //     if (cardFields[0]?.cartaoInfo === null) {
    //         toast.warning("Selecione pelo menos um cartão ou utilize um cupom de troca!", {
    //             toastId: 'coupon-validated-warning',
    //             autoClose: 2000,
    //             position: toast.POSITION.BOTTOM_LEFT
    //         });
    //     } else {
    //         setModalFinalizacaoOpen(true);
    //     }
    // }

    const handleFinalizarCompra = async () => {
        try {
            setIsLoading(true);

            const form = {
                clienteId: user?.id,
                enderecoId: parseInt(enderecoField.slice(0)),
                valorPedido: carrinho?.valorTotalItens,
                valorFrete: valorFrete,
                cuponsIds: listaCupons.map(cupom => cupom?.cupomId),
                itens: carrinho?.itens?.map(item => ({
                    livroId: item?.livroId,
                    quantidade: item?.quantidade,
                    valor: item?.valor
                })),
                cartoes: cardFields.map(card => ({
                    cartaoId: parseInt(card.cartaoInfo.slice(0)),
                    valorPago: parseFloat(card.cartaoValor).toFixed(2)
                }))
            };

            const pedidoCodigo = await PedidoVendaService.salvar(form);
            navigate(`/finalizacao/${pedidoCodigo}`)
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    }

    const validarCupom = async () => {
        try {
            if (listaCupons.find(c => c.codigoCupom === cupom)) { 
                toast.warning("Cupom já validado!", {
                    toastId: 'coupon-validated-warning',
                    autoClose: 2000,
                    position: toast.POSITION.BOTTOM_LEFT
                });
            } else {
                const cupomValidado = await CupomService.validar(cupom);
                if (cupomValidado !== undefined) {
                    setListaCupons(prevListaCupons => [...prevListaCupons, cupomValidado]);
                    toast.success("Cupom validado com sucesso!", {
                        toastId: 'coupon-validated-success',
                        autoClose: 2000,
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                }
            }
        } catch (error) {
            toast.error("Cupom invalido!", {
                toastId: 'coupon-validated-fail',
                autoClose: 1500,
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch isCheckout={true} />

                <Loading loading={isLoading} />

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid container item spacing={2} xs={12} md={12} sx={{ height: 'auto', width: '91vw', marginTop: '.5rem' }}>

                        <Grid item xs={12} md={8} sx={{ height: 'auto', mt: '.5rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', bgcolor: 'white', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <Box sx={{ borderBottom: '1px solid #000', paddingBottom: '10px', width: '100%' }}>
                                    <Typography variant="h4" sx={{ ml: 1.8, mt: 1.8 }}>
                                        Checkout
                                    </Typography>
                                </Box>

                                <CheckoutForm
                                    listaCartoes={listaCartoes} listaEnderecos={listaEnderecos} user={user}
                                    cardFields={cardFields} setCardFields={setCardFields}
                                    enderecoField={enderecoField} setEnderecoField={setEnderecoField} />

                            </Box>

                            <CheckoutProducts carrinho={carrinho} />

                        </Grid>

                        <Grid item xs={12} md={4} sx={{ mt: '.5rem' }}>
                            <ResumoCompra
                                isCheckout={true}
                                quantidadeProdutos={carrinho?.quantidadeTotalItens}
                                valorTotal={carrinho?.valorTotalItens}
                                valorFrete={valorFrete}
                                handleFinalizarCompra={() => setModalFinalizacaoOpen(true)}
                                cupom={cupom}
                                setCupom={setCupom}
                                validarCupom={validarCupom}

                            />
                        </Grid>
                    </Grid>
                </Grid>

                <ModalFinalizacaoPagamento
                    open={modalFinalizacaoOpen}
                    setOpen={setModalFinalizacaoOpen}
                    cartoesUsados={cardFields}
                    setCartoesUsados={setCardFields}
                    valorTotalItens={carrinho?.valorTotalItens}
                    valorFrete={valorFrete}
                    listaCupons={listaCupons.filter(cupom => cupom?.troca === true)}
                    cupomDesconto={listaCupons.find(cupom => cupom?.troca === false)} 
                    handleFinalizarCompra={handleFinalizarCompra}/>

                <Footer />
            </Grid>
        </>
    );
}


export default Checkout;