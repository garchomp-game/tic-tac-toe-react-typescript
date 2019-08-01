import React from 'react'

interface SquareProps {
    value: string | null
    onClick(): void
}
const Square: React.FC<SquareProps> = (props): JSX.Element => (
    <button
        className="square"
        onClick={props.onClick}>
        {props.value}
    </button>
)
export default Square
