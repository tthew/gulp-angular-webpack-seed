var service = require('modules/orders/orders.service.js');
var expect = chai.expect;

describe('orders.service', function () {
  beforeEach(function () {
    angular.module('test', [])
      .factory('service', service);
  });

  describe('Public API', function () {
    describe('.getOrders()', function () {
      var service, $timeout;

      beforeEach(angular.mock.module('test', function ($provide) {
        $provide.value('config', {});
        $provide.value('Restangular', {});
      }));

      beforeEach(inject(function (_service_, _$timeout_) {
        service = _service_;
        $timeout = _$timeout_;
      }));

      it('should exist', function () {
        expect(service.getOrders).to.exist();
      });

      it('should return orders', function (done) {
        service.getOrders()
        .then(function (orders) {
          expect(orders.length).to.eq(3);
        })
        .finally(done);
        $timeout.flush();
      });
    });
  });

});
