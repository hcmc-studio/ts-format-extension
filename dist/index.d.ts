export declare namespace StringFormat {
    function commaString(n: number | bigint): string;
    function byteSizeToString(n: number | bigint): string;
}
export declare namespace DateFormat {
    /**
     * 모든 시간 처리는 UTC를 기준삼아 작동 중이라는 가정에서, 클라이언트에게 최종적으로 표시되는 시각은 Asia/Seoul로 조정해야 함
     * @param d 변환할 Date
     * @param timeZone 변환할 대상 timezone(기본=Asia/Seoul)
     * @param fractionalSecondDigits 밀리초 표시 자릿수(기본=3)
     */
    function tableDateTime(d: Date, timeZone?: string, fractionalSecondDigits?: 3 | 1 | 2 | undefined): string;
}
export declare namespace URLFormat {
    function buildPath(arg0: string, ...args: any[]): string;
}
