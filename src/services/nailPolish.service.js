import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const nailPolishService = {
    getAll: () => axiosService.get(urls.nail_polish)
};

export { nailPolishService };