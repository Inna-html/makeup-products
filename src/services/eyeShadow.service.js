import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const eyeShadowService = {
    getAll: () => axiosService.get(urls.eyeShadow)
};

export { eyeShadowService };