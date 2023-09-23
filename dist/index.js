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
export var DateFormat;
(function (DateFormat) {
    /**
     * 모든 시간 처리는 UTC를 기준삼아 작동 중이라는 가정에서, 클라이언트에게 최종적으로 표시되는 시각은 Asia/Seoul로 조정해야 함
     * @param d 변환할 Date
     * @param timeZone 변환할 대상 timezone(기본=Asia/Seoul)
     * @param fractionalSecondDigits 밀리초 표시 자릿수(기본=3)
     */
    function tableDateTime(d, timeZone = 'Asia/Seoul', fractionalSecondDigits = undefined) {
        return d.toLocaleString('sv-SE', {
            timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            hourCycle: 'h23',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits,
            timeZoneName: 'long'
        }).replace(',', '.');
    }
    DateFormat.tableDateTime = tableDateTime;
})(DateFormat || (DateFormat = {}));
