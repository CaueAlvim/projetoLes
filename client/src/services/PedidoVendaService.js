export default class PedidoVendaService {
    static async salvar(form) {
        const response = await fetch('http://localhost:5000/pedidovenda/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error('Erro');
        }
        const pedidoVendaId = await response.json();
        return pedidoVendaId;
    }

    static async search(form) {
        const response = await fetch('http://localhost:5000/pedidovenda/pesquisar', {
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
        const response = await fetch(`http://localhost:5000/pedidovenda/alterarstatus/${id}/${status}`, {
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

    static async cancelarPedido(id) {
        const response = await fetch(`http://localhost:5000/pedidovenda/cancelar/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }
        return response.status;
    }
}