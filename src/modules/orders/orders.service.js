module.exports = function(config, $q) {
  'use strict';
  // Public API
  var service = {
    getOrders: getOrders
  };

  return service;

  function getOrders() {
    var mockResponse = [
      {
        orderDate: new Date('12-06-2014 13:20:31'),
        orderRef: '12345',
        quantity: 3,
        items: [
          {
            productName: 'Baseball Cap',
            amount: 20.00,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          },
          {
            productName: 'Baseball Cap',
            amount: 20.00,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          },
          {
            productName: 'Baseball',
            amount: 10.00,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          }
        ]
      },
      {
        orderDate: new Date('12-06-2014 13:23:45'),
        orderRef: '1232457',
        quantity: 3,
        items: [
          {
            productName: 'Baseball Cap',
            amount: 20.00,
            cardId: null,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          },
          {
            productName: 'Baseball Cap',
            amount: 20.00,
            cardId: null,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          },
          {
            productName: 'Women\'s Card',
            amount: 50.00,
            cardId: null,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          }
        ]
      },
      {
        orderDate: new Date('12-06-2014 13:28:40'),
        orderRef: '3216547',
        quantity: 4,
        items: [
          {
            productName: 'Baseball Cap',
            amount: 20.00,
            cardId: null,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          },
          {
            productName: 'Baseball Cap',
            amount: 20.00,
            cardId: null,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          },
          {
            productName: 'Women\'s Card',
            amount: 50.00,
            cardId: null,
            giftMessage: {
              line1: 'Message Line 1',
              line2: 'Message Line 2',
              line3: 'Message Line 3',
              line4: 'Message Line 4'
            }
          }
        ]
      }
    ];

    return $q.when(mockResponse);
  }

};
