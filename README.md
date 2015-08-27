# assoc-cache
A simple local memory cache via an associative array support .set() .get()

## Installation

```
npm install assoc-cache
```

## Usage

```javascript
var cache = require('assoc-cache');

// usage
cache.set('foo', 'bar');
cache.get('foo', function(value){console.log(value)});

```

Which should print

```
bar
```

## API
### ```set``` function(key, value)
- stores a value

### ```get``` function(key, callback)
- callback value or `undefined`
