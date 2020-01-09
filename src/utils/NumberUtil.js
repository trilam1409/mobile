/**
 * Number.prototype.format(n, x)
 *
 * @param integer n: length of decimal
 * @param integer x: length of sections
 */
exports.formatNumber = function(value, n, x) {
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return value.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
