import axios from "axios";

const avatarAPI = {
    getCats: (limit = 10) => axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
};

export default avatarAPI;