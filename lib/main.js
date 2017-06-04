module.exports = (function() {
    'use strict';
    var turboLogo = require('turbo-logo');

    return {
        print: printLogo
    }

    ///////////////////


    function printLogo(name, description, version, type, color) {
        var data = turboLogo(name || 'N/A', color, {
            'dataOnly': true
        });
        console.log(data, version || 'unknow version')
        console.log(description || '')
        console.log('\n')
    }

})();
