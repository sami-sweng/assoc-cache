var memory = {};
var index = [];
var itemNb = 0;
var lastItem = 0;
var maxNb = 10000;

/**
 * Local Memory caching module
 * @module cache
 */
module.exports = {

    /**
    * Set a key value element
    * @function
    * @param {string} key - The key
    * @param {*} value - The value
    */
    set: function(key, value) {
        if (memory[key] == undefined) {
            if (itemNb >= maxNb) {
                delete memory[index[lastItem]];
                lastItem = (lastItem + 1) % maxNb;
            } else {
                itemNb++;
            }
        };
        memory[key] = value;
        index[(lastItem - 1 + maxNb) % itemNb ] = key;
    },

    /**
    * retrieve an element from it's key
    * @function
    * @param {string} key - The key
    */
    get: function(key, cb) {
        cb(memory[key]);
    }
}
