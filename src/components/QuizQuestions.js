import React, {useState} from 'react';

const QuizQuestions = (props) => {

    const {question, selected} = props;
    const [answers, setAnswer] = useState(props.options); 

    return ( 
        <div className='container'>
           <h4>{question}</h4>
           <div className='alert alert-dark'>
               {
                   answers.map((text,index) => (
                       <button style={styles.answersBtn} 
                               className='btn btn-warning' 
                               key={index} 
                               onClick={() => {setAnswer([text]); selected(text)}}>
                           {text}
                       </button>
                   ))
               }
           </div>
        </div>
     );
}

const styles = {
    answersBtn: {
        marginLeft: '10px',
        marginTop: '10px'
    }
}
 
export default QuizQuestions;