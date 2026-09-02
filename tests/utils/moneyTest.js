import { formatCurrency } from '../../scripts/utils/money.js';


describe('test suite: formatCurrency', () => {
    it('convert number to nearest decimal', () => {
        expect(formatCurrency(2095)).toEqual('20.95')
    });
    it('works with 0', () => {
        expect(formatCurrency('0')).toEqual('0.00')
    });
    it('works with decimal', () => {
        expect(formatCurrency('25.06')).toEqual('0.25')
    });
    it('works with decimal', () => {
        expect(formatCurrency('25.60')).toEqual('0.26')
    });
    it('works with decimal', () => {
        expect(formatCurrency("2999.5")).toEqual('30.00')
    });
    it('works with negative', () => {
        expect(formatCurrency('-12.66')).toEqual('-0.13')
    });

});