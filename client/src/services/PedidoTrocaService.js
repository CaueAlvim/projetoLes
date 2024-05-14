export default class PedidoTrocaService {
    static async solicitarPedido(form) {
        const response = await fetch('http://localhost:5000/pedidotroca/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error('Erro');
        }
        const pedidoTrocaId = await response.json();
        return pedidoTrocaId;
    }

    static async search(form) {
        const response = await fetch('http://localhost:5000/pedidotroca/pesquisar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error('Erro ao pesquisa pedidos');
        }
        const data = await response.json();
        return data;
    }

    static async alterarStatus(id, status) {
        const response = await fetch(`http://localhost:5000/pedidotroca/alterarstatus/${id}/${status}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Erro ao alterar status');
        }
        return response.status;
    }
}