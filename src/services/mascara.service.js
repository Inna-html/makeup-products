import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const mascaraService = {
    getAll: () => axiosService.get(urls.mascara)
};

export { mascaraService };

