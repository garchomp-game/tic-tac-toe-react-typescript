import React from 'react'
import Board from './Board'
import calculateWinner from './calculateWinner'
import './App.css'

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props)
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			xIsNext: true,
			stepNumber: 0
		}
	}
    handleClick(i: number): void {
		const history: Array<HistoryInterface> = this.state.history.slice(
			0,
			this.state.stepNumber + 1)
		const current: HistoryInterface = history[history.length - 1];
		const squares: Array<string | null> = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
		  return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
		  history: history.concat([{
			squares
		  }]),
		  stepNumber: history.length,
		  xIsNext: !this.state.xIsNext,
		});
	}
	jumpTo(step: number) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0
		})
	}
	render(): JSX.Element {
		const history: Array<HistoryInterface> = this.state.history;
		const current: HistoryInterface = history[this.state.stepNumber];
		const winner: string | null = calculateWinner(current.squares);

		const moves: Array<JSX.Element> = history.map((step: HistoryInterface, move: number) => {
			const desc = move ?
			'Go to move #' + move :
			'Go to game start'
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>
						{desc}
					</button>
				</li>
			)
		})
	
		let status;
		if (winner) {
		  status = 'Winner: ' + winner;
		} else {
		  status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}
		return (
			<div className="game">
				<div className="game-board">
					<Board
					squares={current.squares}
					onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
               		<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		)
	}
}

export default App