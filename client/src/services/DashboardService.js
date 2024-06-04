export default class DashboardService {
    static async pesquisar(form) {
        const response = await fetch('http://localhost:5000/dashboard/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        if (!response.ok) {
            throw new Error(errorData.message);
        }
        const data = await response.json();
        return data;
    }
}