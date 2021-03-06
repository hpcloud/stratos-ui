/* DO NOT EDIT: This code has been generated by swagger-codegen */
(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'app.api.apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.HceDeploymentApi', new HceDeploymentApi($http));
  }

  /**
    * @constructor
    * @name HceDeploymentApi
    * @description For more information on this API, please see:
    * https://github.com/hpcloud/hce-rest-service/blob/master/app/v2/swagger.yml
    * @param {object} $http - the Angular $http service
    * @property {object} $http - the Angular $http service
    * @property {string} baseUrl - the API base URL
    */
  function HceDeploymentApi($http) {
    this.$http = $http;
    this.baseUrl = '/pp/v1/proxy/v2';
  }

  angular.extend(HceDeploymentApi.prototype, {
    /**
     * @name addDeploymentTarget
     * @description Add a deployment target.
     * @param {string} guid - the HCE instance GUID
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    addDeploymentTarget: function (guid, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments/targets';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'POST',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name deploymentOccurred
     * @description Record a deployment.
     * @param {string} guid - the HCE instance GUID
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    deploymentOccurred: function (guid, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'POST',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getDeployment
     * @description Get the specified deployment.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} deploymentId - Deployment id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getDeployment: function (guid, deploymentId, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments/{deployment_id}'
        .replace('{' + 'deployment_id' + '}', deploymentId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getDeploymentTarget
     * @description Get the specified deployment target.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} targetId - DeploymentTarget id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getDeploymentTarget: function (guid, targetId, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments/targets/{target_id}'
        .replace('{' + 'target_id' + '}', targetId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getDeploymentTargets
     * @description List the registered deployment targets, optionally filtering.
     * @param {string} guid - the HCE instance GUID
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getDeploymentTargets: function (guid, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments/targets';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getDeployments
     * @description List deployments, optionally filtering by Project id or Build id.
     * @param {string} guid - the HCE instance GUID
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getDeployments: function (guid, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name removeDeployment
     * @description Remove the specified deployment.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} deploymentId - Deployment id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    removeDeployment: function (guid, deploymentId, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments/{deployment_id}'
        .replace('{' + 'deployment_id' + '}', deploymentId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'DELETE',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name removeDeploymentTarget
     * @description Remove (unregister) the specified deployment target.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} targetId - DeploymentTarget id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    removeDeploymentTarget: function (guid, targetId, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments/targets/{target_id}'
        .replace('{' + 'target_id' + '}', targetId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'DELETE',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name updateTarget
     * @description Update the specified DeploymentTarget.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} targetId - DeploymentTarget id.
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    updateTarget: function (guid, targetId, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/deployments/targets/{target_id}'
        .replace('{' + 'target_id' + '}', targetId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'PUT',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    }
  });
})();
