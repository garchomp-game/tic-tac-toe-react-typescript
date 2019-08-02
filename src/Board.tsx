import React from 'react'
import Square from './Square'
import { map } from 'lodash'

class Board extends React.Component<BoardProps, BoardState> {
    renderSquare(i: number): JSX.Element {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }

    render(): JSX.Element {
        return (
            <div>
                {map(Array(3), (v, k): JSX.Element => (
                    <div className="board-row">
                        {map(Array(3), (v2, k2): any => this.renderSquare(k * 3 + k2))}
                    </div>
                ))}
            </div>
        )
    }
}
export default Board