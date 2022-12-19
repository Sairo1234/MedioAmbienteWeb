import axios from 'axios';
import { logicaFakeSettings } from '../config.js';

export const logicaFakeAuth = {

    async register(nickname, email, password) {

        const data = {
            nickname: nickname,
            email: email,
            password: password
        }

        try {

            var response = await axios.post(logicaFakeSettings.baseURL + '/usuarios/register', data)
            let payload = response;
            return payload;

        } catch (error) {
            let payload = error.response.data            
            let errors; // errors = [{msg: string}]   
            if (payload.errors) {  
                errors = payload.errors 
            }
            else {
                errors = [{ msg: payload.msg }]
            }            
            throw errors;
        }


    },


    async login(email, password) {

        const data = {
            email: email,
            password: password
        }

        try {

            var response = await axios.post(logicaFakeSettings.baseURL + '/usuarios/login', data)
            let payload = response.data;
            return payload;

        } catch (error) {
            let payload = error.response.data            
            let errors; // errors = [{msg: string}]   
            if (payload.errors) {  
                errors = payload.errors 
            }
            else {
                errors = [{ msg: payload.msg }]
            }            
            throw errors;
        }


    },

    async cambiarContrasenya(nickname, currentPassword, newPassword) {

        const data = {
            currentPassword: currentPassword,
            password: newPassword
        }

        try {

            var response = await axios.post(logicaFakeSettings.baseURL + '/usuarios/' + nickname + '/cambiarContrasenya', data)
            let payload = response.data;
            return payload;

        } catch (error) {
            let payload = error.response.data            
            let errors; // errors = [{msg: string}]   
            if (payload.errors) {  
                errors = payload.errors 
            }
            else {
                errors = [{ msg: payload.msg }]
            }            
            throw errors;
        }

        

    }

}