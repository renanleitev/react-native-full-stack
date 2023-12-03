import axios from "axios";
import { baseURL } from "../config/api";

export const deleteData = async (body) => {
    const url = `${baseURL}/delete`;
    const result = await axios.post(url, body);
    return result.data;
}