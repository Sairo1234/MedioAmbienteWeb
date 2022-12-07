import axios from 'axios';
import { logicaFakeSettings } from '../config.js';

export const logicaFakeUsuario = {

    async editarPerfil(nickname, newData) {

        try {

            var response = await axios.put(logicaFakeSettings.baseURL + '/usuarios/' + nickname + '/editarPerfil', newData)
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