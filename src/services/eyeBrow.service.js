import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const eyeBrowService = {
    getAll: () => axiosService.get(urls.eyebrows)
};

export { eyeBrowService };



