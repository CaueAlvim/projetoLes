export default class ClienteService {
    static async login(form) {
        const response = await fetch('http://localhost:5000/cliente/login', {
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

    static async salvar(form) {
        const response = await fetch('http://localhost:5000/cliente/', {
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
        const response = await fetch('http://localhost:5000/cliente/', {
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

    static async carregar(id) {
        const response = await fetch(`http://localhost:5000/cliente/${id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Erros');
        }
        const data = await response.json();
        return data;
    }
    
    static async search(form) {
        const response = await fetch('http://localhost:5000/cliente/pesquisar', {
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
        const response = await fetch(`http://localhost:5000/cliente/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erros');
        }
        return response.status;
    }
}