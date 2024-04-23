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
}