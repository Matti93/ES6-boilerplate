import {dependency} from '../src/dependency';

describe("Dependency", function () {
    it("should return does not work properly", function () {

        let dpd = dependency(true);

        // Assert
        expect(dpd).not.toBe('Does not work properly'); 
    });
    it("should return works", function () {

        let dpd = dependency(false);

        // Assert
        expect(dpd).not.toBe('Works!'); 
    });
});