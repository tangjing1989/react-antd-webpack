/**
 * Copyright @2016 www.wangbin.com
 */

import fetchApi from 'isomorphic-fetch';


export function fetch(url, options) {

    const finalOptions = Object.assign({credentials: 'include'}, options);
    return fetchApi(url, finalOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(error => {
            throw error
        });
}

export function get(url) {
    return fetch(url, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export function post(url, body) {
    return fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}
