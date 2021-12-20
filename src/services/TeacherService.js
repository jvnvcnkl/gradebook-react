import HttpService from "./HttpService";


class TeacherService extends HttpService {

    getAll = async (filter = '') => {
        try {
            console.log(filter)
            const { data } = await this.client.get(`teachers/?filter=${filter}`);
            return data;
        } catch (error) {
            console.log(error);
        }

        return [];
    }
    getAvailable = async () => {
        try {
            const { data } = await this.client.get("teachers/available");
            console.log(data)
            return data;


        } catch (error) {
            console.log(error);
        }

        return [];
    }



}

const teacherService = new TeacherService();
export default teacherService;

