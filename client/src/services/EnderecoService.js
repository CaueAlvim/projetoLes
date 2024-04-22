export default class EnderecoService {

    static async carregar(id) {
        const response = await fetch(`http://localhost:5000/endereco/${id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Erros');
        }
        const data = await response.json();
        return data;
    }

    static async carregarPorCliente(id) {
        const response = await fetch(`http://localhost:5000/endereco/pesquisar/cliente/${id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Erros');
        }
        const data = await response.json();
        return data;
    }

    static async salvar(form) {
        const response = await fetch('http://localhost:5000/endereco/', {
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

    static async edit(form) {
        const response = await fetch('http://localhost:5000/endereco/', {
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
    
    static async pesquisar(form) {
        const response = await fetch('http://localhost:5000/endereco/pesquisar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error('Erro');
        }
        const data = await response.json();
        return data;
    }
    
    static async delete(id) {
        const response = await fetch(`http://localhost:5000/endereco/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erros');
        }
        return response.status;
    }
}