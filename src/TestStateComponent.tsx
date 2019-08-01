import React from 'react'
interface Props {

}
interface State {
    name: string
    age: number
}
export default class TestStateComponent
extends React.Component<Props, State> {
    constructor (public props: Props) {
        super(props)
        this.handleInputName = this.handleInputName.bind(this)
        this.handleInputAge = this.handleInputAge.bind(this)
        this.state = {
            name: '',
            age: 0
        }
    }
    handleInputName(e: any) {
        this.setState({
            name: e.target.value
        });
    };
    handleInputAge(e: any) {
        this.setState({
            age: parseInt(e.target.value)
        });
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleInputName}
                />
                <input
                    type="text"
                    onChange={this.handleInputAge}
                />
                <p>name: {this.state.name}</p>
                <p>age: {this.state.age}</p>
            </div>
        )
    }
}