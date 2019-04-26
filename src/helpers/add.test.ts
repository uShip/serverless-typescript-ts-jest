import { Add } from './add';

describe('example unit test', () => {
    it('1 + 2 should equal 3', () => {
        const sum = Add(1, 2);
        expect(sum).toEqual(3);
    });
});
