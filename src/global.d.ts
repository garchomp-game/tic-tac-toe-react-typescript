// Appコンポーネントのインターフェース
interface HistoryInterface {
	/**
	 * ボード９マスの配列(Array(9))
	 * ９マスの中にo x nullのいずれか入る
	 */
	squares: Array<string | null>
}
interface AppState {
	/**
	 * 履歴保存用。next prevをするためにある
	 */
	history: Array<HistoryInterface>
	/**
	 * 次のプレイヤー判断用
	 */
	xIsNext: boolean
	/**
	 * 手数表示用
	 */
	stepNumber: number
	/**
	 * 着手したマスの保存用(から8までの数字が入る)
	 */
	launch: number | null
}
interface AppProps {
}

// boardコンポーネントのインターフェース
interface BoardProps {
	onClick(i: number):  void
	squares: Array<string | null>
}
interface BoardState {
    xIsNext: boolean
}

interface SquareProps {
	/**
	 * squaresの中身のo x nullのいずれかが入る
	 */
    value: string | null
    onClick(): void
}