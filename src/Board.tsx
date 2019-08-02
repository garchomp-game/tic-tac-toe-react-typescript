import React from 'react'
import Square from './Square'
import {map} from 'lodash'

class Board extends React.Component<BoardProps, BoardState> {
    renderSquare(i: number): JSX.Element {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }

    render(): JSX.Element {
        let list: Array<JSX.Element>
        list = map(Array(3), (v, k): JSX.Element => {
            let renderSquare: Array<JSX.Element> = map(Array(3), (v2, k2): any => this.renderSquare(k * 3 + k2))
            return (
                <div className="board-row">
                    {renderSquare}
                </div>
            )
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}
export default Board