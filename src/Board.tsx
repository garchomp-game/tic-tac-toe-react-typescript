import React from 'react'
import Square from './Square'
import { map } from 'lodash'
class Board extends React.Component<BoardProps, BoardState> {
    renderSquare(i: number): JSX.Element {
        let hilightFlg: boolean | null = this.props.winner && this.props.winner.indexOf(i) !== -1
        return <Square
            key={i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            hilightFlg={hilightFlg}
        />
    }
    render(): JSX.Element {
        return (
            <div>
                {map(Array(3), (v, k): JSX.Element => (
                    <div
                        key={k}
                        className="board-row"
                    >
                        {map(Array(3), (v2, k2): JSX.Element => this.renderSquare(k * 3 + k2))}
                    </div>
                ))}
            </div>
        )
    }
}
export default Board