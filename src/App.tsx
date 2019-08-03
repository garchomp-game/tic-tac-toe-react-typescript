import React from 'react'
import Board from './Board'
import calculateWinner from './calculateWinner'
import './App.css'

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props)
		this.state = {
			history: [{
				squares: Array(9).fill(null),
				launch: null
			}],
			xIsNext: true,
			stepNumber: 0,
			reverseFlg: false
		}
		this.changeHistorySort = this.changeHistorySort.bind(this)
	}
	handleClick(i: number): void {
		const history: Array<HistoryInterface> = this.state.history.slice(
			0,
			this.state.stepNumber + 1)
		const current: HistoryInterface = history[history.length - 1]
		const squares: Array<string | null> = current.squares.slice()
		if (calculateWinner(squares) || squares[i]) {
			return
		}
		const launch: string | null = this.calcLaunch(i)
		squares[i] = this.state.xIsNext ? 'X' : 'O'
		this.setState({
			history: history.concat([{
				squares,
				launch
			}]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		})
	}
	jumpTo(step: number) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		})
	}
	calcLaunch(launch: number | null): string | null {
		if (launch != null) {
			return `col: ${Math.floor(launch / 3)} row: ${Math.floor(launch % 3)}`
		} else {
			return null
		}
	}
	movesList(history: Array<HistoryInterface>, flg: boolean): Array<JSX.Element> {
		let moves = history.map((step: HistoryInterface, move: number) => {
			const desc = move ?
				'Go to move #' + move :
				'Go to game start'
			return (
				<li key={move}>
					<button
						className={this.state.stepNumber === move ? 'bold' : 'normal'}
						onClick={() => this.jumpTo(move)}
					>
						{desc}
					</button>
				</li>
			)
		})
		if (flg) {
			return moves
		} else {
			return moves.reverse()
		}
	}
	changeHistorySort() {
		this.setState({
			reverseFlg: !this.state.reverseFlg
		})
	}
	render(): JSX.Element {
		const history: Array<HistoryInterface> = this.state.history
		const current: HistoryInterface = history[this.state.stepNumber]
		const winner: Array<number> | null = calculateWinner(current.squares)
		const moves: Array<JSX.Element> = this.movesList(history, this.state.reverseFlg)

		let status: string
		if (winner) {
			// あとで読みやすい形に変える
			status = 'Winner: ' + winner[0]
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
		}
		let launch: string | null
		launch = current.launch
		return (
			<div className="game">
				<div className="game-board">
					<Board
						winner={winner}
						squares={current.squares}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<button onClick={this.changeHistorySort}>ならべかえる</button> 
					<div>{launch}</div>
					<ol reversed={this.state.reverseFlg}>
						{moves}
					</ol>
				</div>
			</div>
		)
	}
}

export default App