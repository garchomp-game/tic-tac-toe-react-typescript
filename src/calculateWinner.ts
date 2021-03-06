function calculateWinner(squares: Array<string | null>): Array<number> | null {
    const lines: Array<Array<number>> = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i: number = 0; i < lines.length; i++) {
        const [a, b, c]: Array<number> = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // マッチした３マスの数字を返す
            return lines[i]
        } else if (squares.indexOf(null) === -1) {
            return []
        }
    }
    return null
}

export default calculateWinner