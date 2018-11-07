import config from 'config';
// import { authHeader } from '../_helpers';

export const newTaskService = {
    getAll,
    getById,
    createTask,
    update,
    delete: _delete
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`http://localhost:3001/createTask/`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`http://localhost:3001/tasks/${id}`, requestOptions).then(handleResponse);
}

function createTask(newTask) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
    };

    return fetch(`http://localhost:3001/createTask/createTask`, requestOptions).then(handleResponse);
}

function update(newTask) {
    const requestOptions = {
        method: 'PUT',
        // headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
    };

    return fetch(`http://localhost:3001/tasks/${newTask.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        // headers: authHeader()
    };

    return fetch(`http://localhost:3001/tasks/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}