import axios from 'axios';

class Http {
    constructor(baseURL, timeout = 20000) {
        this.instance = axios.create({
            baseURL,
            timeout,
        });

        this.pendingRequests = new Map();
    }

    setAuthToken(token) {
        this.instance.defaults.headers.common['x-key'] = token;
    }

    cancelPendingRequests(url) {
        if (this.pendingRequests.has(url)) {
            const cancelToken = this.pendingRequests.get(url);
            cancelToken.cancel('Request cancelled due to duplication');
        }
        this.pendingRequests.delete(url);
    }

    request(config) {
        this.cancelPendingRequests(config.url);

        const source = axios.CancelToken.source();
        this.pendingRequests.set(config.url, source);

        config.cancelToken = source.token;
        return this.instance.request(config)
            .then((response) => {
                // if (response && response.data && response.data.message) { // Enable for common toast
                //     toast.info(response.data.message, { position: toast.POSITION.TOP_RIGHT });
                // }

                this.pendingRequests.delete(config.url);
                return response;
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request cancelled:', error.message);
                }
                // else { // Enable for common toast
                //     if (error.response && error.response.data && error.response.data.error) {
                //         toast.error(error.response.data.error, { position: toast.POSITION.TOP_RIGHT });
                //     } else {
                //         toast.error('An error occurred while processing your request.', { position: toast.POSITION.TOP_RIGHT });
                //     }
                // }
                throw error;
            });
    }

    get(url, config) {
        return this.request({ ...config, method: 'get', url });
    }

    post(url, data, config) {
        return this.request({ ...config, method: 'post', url, data });
    }

    put(url, data, config) {
        return this.request({ ...config, method: 'put', url, data });
    }

    patch(url, data, config) {
        return this.request({ ...config, method: 'put', url, data });
    }

    delete(url, data, config) {
        return this.request({ ...config, method: 'delete', url, data });
    }
}

export default Http;
