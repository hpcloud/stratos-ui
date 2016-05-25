/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

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
    apiManager.register('cloud-foundry.api.Buildpacks', new BuildpacksApi($http));
  }

  function BuildpacksApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(BuildpacksApi.prototype, {

   /*
    * Change the position of a Buildpack
    * Buildpacks are maintained in an ordered list.  If the target position is already occupied,
    * the entries will be shifted down the list to make room.  If the target position is beyond
    * the end of the current list, the buildpack will be positioned at the end of the list.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/buildpacks/change_the_position_of_a_buildpack.html
    */
    ChangePositionOfBuildpack: function (guid, value, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/buildpacks/' + guid + '';
      config.method = 'PUT';
      config.data = value;
      return this.$http(config);
    },

   /*
    * Creates an admin Buildpack
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/buildpacks/creates_an_admin_buildpack.html
    */
    CreatesAdminBuildpack: function (value, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/buildpacks';
      config.method = 'POST';
      config.data = value;
      return this.$http(config);
    },

   /*
    * Delete a Particular Buildpack
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/buildpacks/delete_a_particular_buildpack.html
    */
    DeleteBuildpack: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/buildpacks/' + guid + '';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Enable or disable a Buildpack
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/buildpacks/enable_or_disable_a_buildpack.html
    */
    EnableOrDisableBuildpack: function (guid, value, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/buildpacks/' + guid + '';
      config.method = 'PUT';
      config.data = value;
      return this.$http(config);
    },

   /*
    * List all Buildpacks
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/buildpacks/list_all_buildpacks.html
    */
    ListAllBuildpacks: function (params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/buildpacks';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * Lock or unlock a Buildpack
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/buildpacks/lock_or_unlock_a_buildpack.html
    */
    LockOrUnlockBuildpack: function (guid, value, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/buildpacks/' + guid + '';
      config.method = 'PUT';
      config.data = value;
      return this.$http(config);
    },

   /*
    * Retrieve a Particular Buildpack
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/buildpacks/retrieve_a_particular_buildpack.html
    */
    RetrieveBuildpack: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/buildpacks/' + guid + '';
      config.method = 'GET';
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();