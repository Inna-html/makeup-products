import { urls } from "../configs/urls";
import { axiosService } from "./axios.service";

const blushService = {
    getAll: () => axiosService.get(urls.blush)
};

// const blushPowderService = {
//     getAll: () => axiosService.get(urls.powder)
// };
// const blushCreamService = {
//     getAll: () => axiosService.get(urls.cream)
// };

export { blushService, 
    // blushPowderService, blushCreamService 
};

