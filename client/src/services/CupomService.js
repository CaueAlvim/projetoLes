export default class CupomService {
    static async validar(cupom) {
        const response = await fetch(`http://localhost:5000/cupom/validar/${cupom}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Erro ao validar o cupom');
        }

        const valido = await response.json();
        return valido;
    }

    static async carregarPorCliente(id) {
        const response = await fetch(`http://localhost:5000/cupom/pesquisar/cliente/${id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Erros');
        }
        const data = await response.json();
        return data;
    }
}