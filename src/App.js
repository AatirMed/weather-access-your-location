import React from "react";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import './App.css';
const App = () => {

  function step1Validator() {
    // return a boolean (true or false)
    return true;
  }

  const END = () => {
    console.log(10)
  }

  return (
    <div className="main">
      <StepProgressBar
        startingStep={0} // the index of the step at which to start startingStep
        onSubmit={END}
        steps={[
          {
            label: 'Title',
            subtitle: 'SubTitle(10%)',
            name: 'step 1',
            validator: step1Validator,
            // content: <h3>this is content</h3>,

          },
          {
            label: 'Step 2',
            name: 'step 2',
            subtitle: '35%',

          },
          {
            label: 'Step 3',
            name: 'step 3',
            

          }
        ]}
        subtitleClass='SubT' //className css 
        previousBtnName='Prev' //Change the text inside the previous btn
        nextBtnName='Next' //Change the text inside the next btn
        submitBtnName='Valid' //Change the text inside the submit btn
        //another Optional https://github.com/saini-g/react-step-progress
        />
    </div>
  )
};

export default App;
