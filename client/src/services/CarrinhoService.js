export default class CarrinhoService {

    static async carregarCarrinho(id) {
        const response = await fetch(`http://localhost:5000/carrinho/${id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Erro');
        }
        const data = await response.json();
        return data;
    }

    static async adicionarItemCarrinho(form) {
        const response = await fetch('http://localhost:5000/carrinho/adicionar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error('Erro');
        }
        return response.status;
    }

    static async removerItemCarrinho(form) {
        const response = await fetch('http://localhost:5000/carrinho/remover', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error('Erro');
        }
        return response.status;
    }

    static async alterarQtd(form) {
        const response = await fetch('http://localhost:5000/carrinho/quantidade', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error('Erro');
        }
        return response.status;
    }
}