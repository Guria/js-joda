import {expect} from 'chai';
import {assert} from '../src/assert';

describe('assert', () => {
    it('should not fail if assert is true', () => {
        assert(true);
    });

    it('should throw an Error if assert is false', () => {
        expect(() => {
            assert(false, 'assert fail message');
        }).to.throw(Error);
    });

    it('should throw an specific Error if assert is false and an Error class is passed', () => {
        var TestError = () => {};
        expect(() => {
            assert(false, 'assert fail message', TestError);
        }).to.throw(TestError);
    });
});