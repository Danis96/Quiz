import React from 'react';
import Header from './components/layouts/Header';
import Quiz from './components/Quiz';



function App() {
  return (
    <div className="App">
       <Header title='Quiz your mind' text='Challenge yourself, answer all the questions right, and win imaginary prize. ' />
       <div className='container'>
            <Quiz  />
       </div>
    </div>
  );
}

export default App;
