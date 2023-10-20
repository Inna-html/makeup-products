import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const bronzerService = {
    getAll: () => axiosService.get(urls.bronzer)
};

export { bronzerService };

