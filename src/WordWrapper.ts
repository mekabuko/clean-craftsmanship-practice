export class WordWrapper {
    /**
     * 渡された文字列を、指定された最大幅で折り返した文字列を返します。
     * ただし、単語の途中で区切られることはないように調整します。
     * 
     * @param str 入力文字列
     * @param width 最大幅
     * @returns 適切な最大幅で改行した文字列
     */
    wrap(str: string, width: number): string {
        if (width >= str.length) return str;
        // 単語の区切りを探すために、width を開始点として、それ以前にあるスペースを検索する
        let brakePosition = str.lastIndexOf(" ", width)
        // 存在しないなら、区切り位置は width でよい
        if (brakePosition === -1) brakePosition = width;
        return str.substring(0, brakePosition).trim() + "¥n"
            + this.wrap(str.substring(brakePosition).trim(), width)
    }
}