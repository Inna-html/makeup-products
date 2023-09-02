import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const lipstickService = {
    getAll: () => axiosService.get(urls.lipstick)
};

export { lipstickService };