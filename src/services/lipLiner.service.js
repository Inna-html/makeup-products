import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const lipLinerService = {
    getAll: () => axiosService.get(urls.lip_liner)
};

export { lipLinerService };