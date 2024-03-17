import axios from "axios";
import {Platform} from "react-native";

const BASE_URL = 'https://19d2-213-152-241-52.ngrok-free.app/';
export const axiosInstance = axios.create({ baseURL: BASE_URL });
export const askQuestion = async (user_question: string, ) => {
    const config = {
        timeout: 30000,
        headers: {'Content-Type': 'application/json',}
    }


try {
        const response = await axiosInstance.post('generate_comments', body, config);
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }
}


