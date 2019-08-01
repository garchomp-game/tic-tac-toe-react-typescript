// Appコンポーネントのインターフェース
interface HistoryInterface {
	squares: Array<string | null>
}
interface AppState {
	history: Array<HistoryInterface>
	xIsNext: boolean
	stepNumber: number
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
