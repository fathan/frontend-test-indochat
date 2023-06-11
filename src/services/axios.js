import axios from 'axios';

function AxiosClient (options = {}) {
  this.options = options;
  this.instances = axios.create(options);
  this.instancesSettings();
}

// ///////////////////////////

AxiosClient.prototype.instancesSettings = function () {
  const {
    transform: {
      requestInterceptors,
      responseInterceptors,
      responseInterceptorsError
    }
  } = this.options;

  // /////////////////

  this.instances.interceptors.request.use(
    (configuration) => {
      if (typeof requestInterceptors === 'function') {
        configuration = requestInterceptors(configuration);
      }

      return configuration;
    }, undefined
  );

  // /////////////////

  this.instances.interceptors.response.use(
    responseInterceptors,
    responseInterceptorsError
  );
};

// ///////////////////////////

AxiosClient.prototype.requestToServer = function (configuration) {
  return new Promise((resolve, reject) => {
    this.instances.request(configuration)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export default AxiosClient;