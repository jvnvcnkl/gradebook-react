import HttpService from "./HttpService";


class TeacherService extends HttpService {

    getAll = async () => {
        try {
            const { data } = await this.client.get("teachers");
            return data;
        } catch (error) {
            console.log(error);
        }

        return [];
    }
    getAvailable = async () => {
        try {
            const { data } = await this.client.get("teachers/available");
            return data;

        } catch (error) {
            console.log(error);
        }

        return [];
    }



}

const teacherService = new TeacherService();
export default teacherService;

