import React from 'react'
import { Link } from 'react-router-dom'

import Question from './Question'

function Quiz() {
    return (
        <div class='quiz-container'>
            <p> <Question /> </p>
        </div>
    )
}

export default Quiz
