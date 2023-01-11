import axios from 'axios';
import { logicaFakeSettings } from '../config.js';

export const MedicionesAPI = {

    cargarMediciones() {        

        return fetch(logicaFakeSettings.baseURL + '/mediciones', {
            method: 'GET',
            headers: logicaFakeSettings.headers
        })
            .then(function (response) {
                if (response.status != 200) {
                    throw response.status;
                } else {
                    return response.json();
                }
            });
    },

    guardarMedicion(data) {
        logicaFakeSettings.headers.set('Content-Type', 'multipart/form-data');
        //logicaFakeSettings.headers.set('Authorization', 'Bearer ' + logicaFakeSettings.token);

        return fetch(logicaFakeSettings.baseURL + '/mediciones', {
            method: 'POST',
            headers: logicaFakeSettings.headers,
            body: data
        })
            .then(function (response) {
                if (response.status != 201 || response.status != 200) {
                    throw response.status;
                } else {
                    return response.json();
                }
            });
    },

    eliminarMedicion(id) {
        logicaFakeSettings.headers.set('Content-Type', 'multipart/form-data');
        //logicaFakeSettings.headers.set('Authorization', 'Bearer ' + logicaFakeSettings.token);

        return fetch(logicaFakeSettings.baseURL + '/mediciones/' + id, {
            method: 'DELETE',
            headers: logicaFakeSettings.headers,
        })
            .then(function (response) {
                if (response.status != 204 || response.status != 200) {
                    throw response.status;
                } else {
                    return response.json();
                }
            });
    },

    async obtenerTodasMedicionesDelDia(instante)
    {
        try {

            var response = await axios.get(logicaFakeSettings.baseURL + '/mediciones/day/' + instante)

        } catch (err) {

            //                

            if (err.response.data.errors) {

                // errors = [{msg: string}] 
                const errors = err.response.data.errors
                throw errors;

            }

            // errors = [{msg: string}]     
            const errors = [{ msg: err.response.data.msg }]
            throw errors;
        }

        if (response.status == 200) {

            //return user data
            return response.data

        }
    },


    async obtenerTodasMedicionesDelDiaPorNickname(nickName)
    {
        try {

            var response = await axios.get(logicaFakeSettings.baseURL + '/usuarios/' + nickName + '/mediciones')

        } catch (err) {

            if (err.response.data.errors) {

                // errors = [{msg: string}] 
                const errors = err.response.data.errors
                throw errors;

            }

            // errors = [{msg: string}]     
            const errors = [{ msg: err.response.data.msg }]
            throw errors;
        }

        if (response.status == 200) {

            //return user data
            return response.data

        }
    },

    async obtenerMedicionesDeTemperaturaDelDiaPorNicknameYTipo(nickName, tipo)
    {
        try {

            var response = await axios.get(logicaFakeSettings.baseURL + '/mediciones/usuario/' + nickName + "?tipo=" + tipo)

        } catch (err) {

            if (err.response.data.errors) {

                // errors = [{msg: string}] 
                const errors = err.response.data.errors
                throw errors;

            }

            // errors = [{msg: string}]     
            const errors = [{ msg: err.response.data.msg }]
            throw errors;
        }

        if (response.status == 200) {

            //return user data
            return response.data

        }
    },
}