import axios from 'axios';
import { logicaFakeSettings } from '../config.js';

export const logicaFakeAuth = {

    async login(email, password) {

        const data = {
            email: email,
            password: password
        }
        
        try {

            var response = await axios.post(logicaFakeSettings.baseURL + '/usuarios/login', data)

        } catch (err) {
            // errors = [{msg: string}]     
            const errors = [{ msg: err.response.data.msg }]
            throw errors;
        }

        //                

        if (response.data.errors) {

            // errors = [{msg: string}]     
            const errors = response.data.errors
            throw errors;

        } else if (response.status == 200) { 

            //return user data
            return response.data

        }

    }
}