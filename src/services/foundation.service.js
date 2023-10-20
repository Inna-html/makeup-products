import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const foundationService = {
    getAll: () => axiosService.get(urls.foundation)
};

export { foundationService };

