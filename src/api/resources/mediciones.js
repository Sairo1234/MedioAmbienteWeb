import { APISettings } from '../config.js';

export const MedicionesAPI = {

    cargarMediciones() {        

        return fetch(APISettings.baseURL + '/mediciones', {
            method: 'GET',
            headers: APISettings.headers
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
        APISettings.headers.set('Content-Type', 'multipart/form-data');
        //APISettings.headers.set('Authorization', 'Bearer ' + APISettings.token);

        return fetch(APISettings.baseURL + '/mediciones', {
            method: 'POST',
            headers: APISettings.headers,
            body: data
        })
            .then(function (response) {
                if (response.status != 201) {
                    throw response.status;
                } else {
                    return response.json();
                }
            });
    },

    eliminarMedicion(id) {
        APISettings.headers.set('Content-Type', 'multipart/form-data');
        //APISettings.headers.set('Authorization', 'Bearer ' + APISettings.token);

        return fetch(APISettings.baseURL + '/mediciones/' + id, {
            method: 'DELETE',
            headers: APISettings.headers,
        })
            .then(function (response) {
                if (response.status != 201) {
                    throw response.status;
                } else {
                    return response.json();
                }
            });
    }
}