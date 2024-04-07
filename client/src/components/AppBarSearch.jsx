import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Button, Box, Badge } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ModalLogin from './ModalLogin';
import ModalCadastroEndereco from './ModalCadastroEndereco';
import ModalCadastro from './ModalCadastro';
import ModalCadastroCartao from './ModalCadastroCartao';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.png';
import CarrinhoDrawer from './CarrinhoDrawer';

function AppBarSearch({ isCheckout }) {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '30px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 1,
      border: `2px solid #bc7655`,
      backgroundColor: '#bc7655',
      padding: '0 4px',
    },
  }));

  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [userCadastro, setUserCadastro] = useState(undefined);
  const [openCarrinhoDrawer, setOpenCarrinhoDrawer] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalCadastro, setOpenModalCadastro] = useState(false);
  const [openModalCadastroEndereco, setOpenModalCadastroEndereco] = useState(false);
  const [openModalCadastroCartao, setOpenModalCadastroCartao] = useState(false);

  useEffect(() => {
    fetchLocalStorage();
  }, []);

  const fetchLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }

  const products = [
    { id: 1, nome: 'Livro 1', imagem: 'https://via.placeholder.com/100', preco: 'R$100', descricao: 'Descricao Teste 1', quantidade: 1 },
    { id: 2, nome: 'Livro 2', imagem: 'https://via.placeholder.com/100', preco: 'R$200', descricao: 'Descricao Teste 2', quantidade: 1 },
    { id: 3, nome: 'Livro 3', imagem: 'https://via.placeholder.com/100', preco: 'R$300', descricao: 'Descricao Teste 3', quantidade: 1 },
    { id: 4, nome: 'Livro 4', imagem: 'https://via.placeholder.com/100', preco: 'R$400', descricao: 'Descricao Teste 4', quantidade: 1 },
    { id: 5, nome: 'Livro 5', imagem: 'https://via.placeholder.com/100', preco: 'R$500', descricao: 'Descricao Teste 5', quantidade: 1 },
    { id: 6, nome: 'Livro 6', imagem: 'https://via.placeholder.com/100', preco: 'R$600', descricao: 'Descricao Teste 6', quantidade: 1 },
    { id: 7, nome: 'Livro 7', imagem: 'https://via.placeholder.com/100', preco: 'R$700', descricao: 'Descricao Teste 7', quantidade: 1 },
    { id: 8, nome: 'Livro 8', imagem: 'https://via.placeholder.com/100', preco: 'R$800', descricao: 'Descricao Teste 8', quantidade: 1 },
    { id: 9, nome: 'Livro 9', imagem: 'https://via.placeholder.com/100', preco: 'R$900', descricao: 'Descricao Teste 9', quantidade: 1 },
    { id: 10, nome: 'Livro 10', imagem: 'https://via.placeholder.com/100', preco: 'R$1000', descricao: 'Descricao Teste 10', quantidade: 1 },
    { id: 11, nome: 'Livro 11', imagem: 'https://via.placeholder.com/100', preco: 'R$2000', descricao: 'Descricao Teste 11', quantidade: 1 },
    { id: 12, nome: 'Livro 12', imagem: 'https://via.placeholder.com/100', preco: 'R$3000', descricao: 'Descricao Teste 12', quantidade: 1 },
  ];

  return (
    <>
      <AppBar sx={{ backgroundColor: '#559bbc', position: 'relative', height: '4.2rem' }} >
        <Toolbar>

          <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} onClick={() => navigate('/')} />

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="O que gostaria de ler?"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: { xs: '20rem', md: '30rem', lg: '50rem' } }}
              />
            </Search>
          </Box>

          {user === undefined ? (
            <Button color="inherit" onClick={() => setOpenModalLogin(true)}>
              Login
            </Button>
          )
            :
            (
              <Button color="inherit" onClick={() => navigate('/home')}>
                <AccountCircleIcon />
              </Button>
            )}

          {!isCheckout && user !== undefined && (
            <IconButton aria-label="cart" color="inherit" onClick={() => setOpenCarrinhoDrawer(true)}>
              <StyledBadge badgeContent={products?.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          )}


        </Toolbar>
      </AppBar>
      <CarrinhoDrawer open={openCarrinhoDrawer} setOpen={setOpenCarrinhoDrawer} products={products} />
      <ModalLogin open={openModalLogin} setOpen={setOpenModalLogin} setOpenModalCadastro={setOpenModalCadastro} />
      <ModalCadastro open={openModalCadastro} setOpen={setOpenModalCadastro} setOpenModalLogin={setOpenModalLogin} setOpenCadastroEndereco={setOpenModalCadastroEndereco} setUserRegister={setUserCadastro} />
      <ModalCadastroEndereco open={openModalCadastroEndereco} setOpen={setOpenModalCadastroEndereco} setOpenModalCartao={setOpenModalCadastroCartao} userRegister={userCadastro} setUserRegister={setUserCadastro} />
      <ModalCadastroCartao open={openModalCadastroCartao} setOpen={setOpenModalCadastroCartao} userRegister={userCadastro} />

    </>
  )
}

export default AppBarSearch