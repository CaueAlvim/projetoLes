export default class LivroService {
    static async searchAll() {
        const response = await fetch(`http://localhost:5000/livro/`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Erros');
        }
        const data = await response.json();
        return data;
    }
}