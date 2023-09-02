import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const eyeLinerService = {
    getAll: () => axiosService.get(urls.eyeliner)
};

export { eyeLinerService };