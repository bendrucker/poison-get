'use strict'

var castArray = require('cast-array')

module.exports = function poison (obj, keys, message) {
  keys = castArray(keys)

  return keys.reduce(function (obj, key) {
    return Object.defineProperty(obj, key, {
      get: function () {
        throw new Error(message)
      }
    })
  }, obj)
}
