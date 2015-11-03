'use strict'

var test = require('tape')
var poison = require('./')

test('one', function (t) {
  var obj = poison({}, 'foo')
  t.throws(function () {
    return obj.foo
  })
  t.end()
})

test('multiple', function (t) {
  var obj = poison({}, ['foo', 'bar'])
  t.throws(function () {
    return obj.foo
  })
  t.throws(function () {
    return obj.bar
  })
  t.end()
})

test('custom error', function (t) {
  var obj = poison({}, 'foo', 'Denied')
  t.throws(function () {
    return obj.foo
  }, /Denied/)
  t.end()
})
