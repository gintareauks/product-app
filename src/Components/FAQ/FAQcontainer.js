import React, {useState} from 'react'
import QuestionList from './QuestionsList'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus} from 'react-icons/fi'


const FAQ = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = id => {
        if(clicked === id) {
            return setClicked(null)
        }
        setClicked(id);
    }

    return (
        <div id="FAQ-container">
            <h4 id="FAQ-header">FREQUENTLY ASKED QUESTIONS (FAQs)</h4>
            <IconContext.Provider value={{color: 'black', size: '25px' }}>
                <div className="question-card">
                    { QuestionList.questions.map((question, id) => {
                        return (
                            <>
                                <div className="question" key={question.id} onClick={() => toggle(id)}>
                                    <h1>{question.question}</h1>
                                    <span>{clicked === id ? <FiMinus/> : <FiPlus/>}</span>
                                </div>

                                {
                                    clicked === id ? 
                                    (
                                    <div className="answer" key={question.id}>
                                        <p>{ question.answer }</p>
                                    </div>
                                    ) 
                                    : null
                                }   
                            </>
                        )
                    })}
                </div>
            </IconContext.Provider>
        </div>
    )
}


export default FAQ