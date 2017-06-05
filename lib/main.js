module.exports = (function() {
    'use strict';
    var turboLogo = require('turbo-logo');

    return {
        print: printLogo
    }

    ///////////////////


    function printLogo(options, description) {
        var data = turboLogo(options.name || 'N/A', options.color || 'rainbow', {
            'dataOnly': true
        });
        console.log(data, options.version || 'v N/A')
        console.log(options.description || '')
        console.log('\n')
    }

})();
