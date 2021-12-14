import HttpService from "./HttpService";


class GradebookService extends HttpService {
    async getAll() {
        try {
            const { data } = await this.client.get("gradebooks");

            return data;
        } catch (error) {
            console.log(error);
        }

        return [];
    }

    async get(id) {
        try {
            const { data } = await this.client.get(`gradebooks/${id}`);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async add(newGradebook) {
        try {
            const { data } = await this.client.post("gradebooks", newGradebook);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async edit(id, movie) {
        try {
            const { data } = await this.client.put(`gradebooks/${id}`, movie);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    async delete(id) {
        try {
            const { data } = await this.client.delete(`gradebooks/${id}`);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }
}

const gradebookService = new GradebookService();
export default gradebookService;

