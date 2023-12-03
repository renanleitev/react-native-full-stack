import axios from "axios";
import { baseURL } from "../config/api";

export const getData = async () => {
    const result = await axios.get(baseURL);
    return result.data;
};