(function (mock) {
  'use strict';

  /* eslint-disable quote-props, quotes */
  mock.stackatoInfoAPI = mock.stackatoInfoAPI || {};

  mock.stackatoInfoAPI.Routes = {

    stackatoInfo: function () {
      return {
        url: '/pp/v1/stackato/info',

        response: {
          200: {
            body: {
              "version":{"proxy_version":"dev","database_version":20160511195737},"user":{"guid":"63ddbbe1-a185-465d-ba10-63d5c01f1a99","name":"admin@cnap.local","admin":true},"endpoints":{
                "other": {"a0b0f8c6-d00d-47f2-8636-1f558f7ec48e":
                  {"guid":"a0b0f8c6-d00d-47f2-8636-1f558f7ec48e","name":"OTHER_1","user":{"guid":"577f3715-8ae9-41c3-ba6e-67fff957ee48","name":"hsc-admin","admin":false}}
                },
                "hce":{"f0b0f8c6-d00d-47f2-8636-1f558f7ec48e":{"guid":"f0b0f8c6-d00d-47f2-8636-1f558f7ec48e","name":"HCE_1","version":"","user":{"guid":"577f3715-8ae9-41c3-ba6e-67fff957ee48","name":"hsc-admin","admin":false},"type":""}},"hcf":{"8221adff-529a-4567-b57a-155fb69f1bd0":{"guid":"8221adff-529a-4567-b57a-155fb69f1bd0","name":"HCF_1","version":"","user":{"guid":"ae257571-e323-4cd9-bd97-2b21223d9b36","name":"admin","admin":true},"type":""},"925f6b40-c0e4-4595-97e5-287c3c04b1c2":{"guid":"925f6b40-c0e4-4595-97e5-287c3c04b1c2","name":"HCF_2","version":"","user":{"guid":"58d56fe1-cacf-484b-aa7d-61cf019e6402","name":"admin","admin":true},"type":""},"bd4fd4f9-2001-4609-86e6-ccfa2a8ba92d":{"guid":"bd4fd4f9-2001-4609-86e6-ccfa2a8ba92d","name":"HCF_3","version":"","user":{"guid":"a8b7d5ef-dee6-4e71-ae8e-348971151351","name":"admin","admin":true},"type":""},"d13aa0f2-4500-4e0d-aa14-1b9f4e0769d8":{"guid":"d13aa0f2-4500-4e0d-aa14-1b9f4e0769d8","name":"HCF_4","version":"","user":{"guid":"0c97cd5a-8ef8-4f80-af46-acfa8697824e","name":"test","admin":false},"type":""}}}
            }
          }
        }
      };
    }
  };

  /* eslint-enable quote-props, quotes */
})(this.mock = this.mock || {});
