import axios from "axios";
import { baseURL } from "../config/api";

export const sendData = async (body) => {
    const url = `${baseURL}/send-data`;
    const result = await axios.post(url, body);
    return result.data;
}