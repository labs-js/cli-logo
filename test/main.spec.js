var main = require('../lib/main');

describe('main', function() {
    it('should return an object', function() {
        expect(typeof main).toBe('object');
    });

    it('should have print property', function() {
        expect(main.print).toBeDefined();
    });
});
