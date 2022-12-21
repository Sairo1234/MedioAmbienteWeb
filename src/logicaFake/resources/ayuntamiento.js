import axios from 'axios';
import { logicaFakeSettings } from '../config.js';

export const logicaFakeAyuntamiento = {
   

    async getUsuarios(ayuntamientoId) {

        try {

            var response = await axios.get(logicaFakeSettings.baseURL + '/ayuntamientos/' + ayuntamientoId + '/usuarios')
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

    async getSensores(ayuntamientoId) {

        try {

            var response = await axios.get(logicaFakeSettings.baseURL + '/ayuntamientos/' + ayuntamientoId + '/sensores')
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

    async getSensoresUsuarios(ayuntamientoId) {

        try {

            var response = await axios.get(logicaFakeSettings.baseURL + '/ayuntamientos/' + ayuntamientoId + '/sensoresUsuarios')
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

    async asociarUsuarioSensor(_uuid, _nickname) {

        const data = {
            uuid: _uuid,
            nickname: _nickname
        }

        try {
            var response = await axios.put(logicaFakeSettings.baseURL + '/ayuntamientos/asociarSensor', data)    
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