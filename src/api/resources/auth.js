import axios from 'axios';
import { APISettings } from '../config.js';

export const AuthAPI = {

    login(email, password) {

        const data = { 
            email: email, 
            password: password 
        }

        return axios.post(APISettings.baseURL + '/login', data).then((response) => {
            if (response.status != 200) {
                throw response;
            } else {
                return response.data;
            }
        })

    }
}