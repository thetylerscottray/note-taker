import { useState } from 'react'
import { Button } from 'react-bootstrap'

function Toolbar() {

  // Constants for tracking annotation state
  const CLEAR_INT = 0;
  const DEFINITION_INT = 1;
  const FACT_INT = 2;
  const EXAMPLE_INT = 3;

  // Toolbar state variables
  const [isNoteMode, setIsNoteMode] = useState(true);
  const [annotationState, setAnnotationState] = useState(CLEAR_INT);

  // Toggle the use-case mode
  function changeMode() {
    setIsNoteMode(!isNoteMode);
  }

  // Toggle the annotation state
  function changeAnnotation( selectedState ) {

    let newState = ( selectedState == annotationState ) ? CLEAR_INT : selectedState;
    setAnnotationState(newState);

  }

  return (
    <>
      <div id="mode-buttons">
        <Button disabled={isNoteMode} onClick={changeMode}>Notes</Button>
        <Button disabled={!isNoteMode} onClick={changeMode}>Quiz</Button>
      </div>
      <div id="state-buttons">
        <Button 
          onClick={() => changeAnnotation(DEFINITION_INT)}
          active={annotationState === DEFINITION_INT}
        >
          Definition
        </Button>

        <Button 
          onClick={() => changeAnnotation(FACT_INT)}
          active={annotationState === FACT_INT}
        >
          Fact
        </Button>

        <Button 
          onClick={() => changeAnnotation(EXAMPLE_INT)}
          active={annotationState === EXAMPLE_INT}
        >
          Example
        </Button>

        <Button 
          onClick={() => changeAnnotation(CLEAR_INT)} 
          disabled={annotationState == CLEAR_INT}
        >
          Clear
        </Button>
      </div>
    </>
  )
}

export default Toolbar
