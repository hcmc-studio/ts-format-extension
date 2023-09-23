export var StringFormat;
(function (StringFormat) {
    function commaString(n) {
        const s = n.toString();
        const tokens = [];
        const start = s.length % 3;
        if (start > 0) {
            tokens.push(s.slice(0, start));
        }
        for (let i = start; i < s.length; i += 3) {
            tokens.push(s.slice(i, i + 3));
        }
        return tokens.join(',');
    }
    StringFormat.commaString = commaString;
})(StringFormat || (StringFormat = {}));
