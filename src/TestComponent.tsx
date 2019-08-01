import React from 'react'
import TestStateComponent from './TestStateComponent'

const TestComponent: React.FC = () => {
    return (
        <div>
            <p>test component!</p>
            with state?
            <TestStateComponent />
        </div>
    )
}

export default TestComponent