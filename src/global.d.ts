// Appコンポーネントのインターフェース
interface HistoryInterface {
	/**
	 * ボード９マスの配列(Array(9))
	 * ９マスの中にo x nullのいずれか入る
	 */
	squares: Array<string | null>
	/**
	 * 着手したマスの保存用(から8までの数字が入る)
	 */
	launch: string | null
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
	 * 履歴リスト上下入れ替え用の履歴のフラグ
	 */
	reverseFlg: boolean
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
