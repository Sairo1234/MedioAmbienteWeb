import axios from 'axios';
import { APISettings } from '../config.js';

export const AuthAPI = {

    login(email, password) {
        
        const data = { 
            email: email, 
            password: password 
        }

        return axios.post(APISettings.baseURL + '/usuarios/login', data).then((response) => {
            console.log(response)
            if (response.status == 200) {
                return response.data;
            } else {
                throw response.body.message;
            }
        })

    }
}