import HttpService from "./HttpService";


class GradebookService extends HttpService {

    getAll = async (page = 1, filter = '') => {
        try {
            let params = []

            if (!!filter) {
                params.push(`?filter=${filter}`)
            }
            if (page != 1) {
                params.push(`?page=${page}`)
            }
            const query = params.join('&')
            const { data } = await this.client.get(`gradebooks/${query}`);
            console.log(data)
            return data;
        } catch (error) {
            console.log(error);
        }

        return [];
    }

    get = async (id) => {
        try {
            const { data } = await this.client.get(`gradebooks/${id}`);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    add = async (newGradebook) => {
        try {
            const { data } = await this.client.post("gradebooks", newGradebook);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    edit = async (id, movie) => {
        try {
            const { data } = await this.client.put(`gradebooks/${id}`, movie);

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }

    delete = async (id) => {
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

