import React from 'react'

const Square: React.FC<SquareProps> = (props): JSX.Element => (
    <button className={
        `square ${
            props.hilightFlg ? 'hilight' : 'normal'
        }`
    } onClick={props.onClick}>
        {props.value}
    </button>
)
export default Square
