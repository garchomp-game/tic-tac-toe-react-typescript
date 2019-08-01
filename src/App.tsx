import React from 'react'
import Board from './Board'
import './App.css'

const App: React.FC = (): JSX.Element => (
	<div className="game">
		<div className="game-board">
			<Board />
		</div>
		<div className="game-info">
			<div>{/* status */}</div>
			<ol>{/* TODO */}</ol>
		</div>
	</div>
)

export default App