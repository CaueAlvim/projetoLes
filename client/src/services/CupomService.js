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
}