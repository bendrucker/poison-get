# poison-get [![Build Status](https://travis-ci.org/bendrucker/poison-get.svg?branch=master)](https://travis-ci.org/bendrucker/poison-get)

> Throw when a user attempts to access specified properties in an object


## Install

```
$ npm install --save poison-get
```


## Usage

```js
var poison = require('poison-get')

var obj = poison({}, 'foo')
obj.foo
//=> throws Error
```

## API

#### `poison(obj, keys, [message])` -> `object`

##### obj

*Required*  
Type: `object`

An object to modify with poison getters.

##### keys

*Required*  
Type: `string` / `array[string]`

The key (or keys) where poison getters will be assigned.

##### message

Type: `string`

An error message to use when throwing

##### 


## License

MIT © [Ben Drucker](http://bendrucker.me)
