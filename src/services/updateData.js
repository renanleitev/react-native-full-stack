import axios from "axios";
import { baseURL } from "../config/api";

export const updateData = async (body) => {
    const url = `${baseURL}/update`;
    const result = await axios.post(url, body);
    return result.data;
}