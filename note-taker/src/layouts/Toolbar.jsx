import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PiEmpty, PiNotePencil, PiRocket, PiTag } from "react-icons/pi";
import '../styles/ToolbarStyle.css';


function Toolbar() {

  // Constants for tracking annotation state
  const CLEAR_INT = 0;
  const DEFINITION_INT = 1;
  const FACT_INT = 2;
  const EXAMPLE_INT = 3;

  // Toolbar state variables
  const [isNoteMode, setIsNoteMode] = useState(() => {
     const savedIsNoteMode = localStorage.getItem('isNoteMode');
     return savedIsNoteMode !== null ? savedIsNoteMode === 'true' : true;
   });

  const [annotationState, setAnnotationState] = useState(() => {
    const savedAnnotationState = localStorage.getItem('annotationState');
    return savedAnnotationState ? savedAnnotationState : CLEAR_INT;
  });

  // Toggle the use-case mode
  function changeMode() {
    const newMode = !isNoteMode;
     setIsNoteMode(newMode);
     localStorage.setItem('isNoteMode', newMode);

     setAnnotationState(CLEAR_INT);
  }

  // Toggle the annotation state
  function changeAnnotation( selectedState ) {

    let newState = ( selectedState == annotationState ) ? CLEAR_INT : selectedState;
    setAnnotationState(newState);
    localStorage.setItem('annotationState', newState);

  }

  return (
    <>
      <div className="toolbar">
        <div className="mode-row">
          <Button
            variant="light"
            className={`mode-btn ${isNoteMode ? 'active' : ''}`}
            onClick={changeMode}
            aria-pressed={isNoteMode}
          >
            <PiNotePencil/>
            <span>Notes</span>
          </Button>
          <Button
            variant="light"
            className={`mode-btn ${!isNoteMode ? 'active' : ''}`}
            onClick={changeMode}
            aria-pressed={!isNoteMode}
            >
            <PiRocket/>
            <span>Quiz</span>
          </Button>
        </div>
        { !!isNoteMode && 
          <div className="annotation-row">
            <div className="annotation-group">
              <Button
                variant="outline-secondary"
                size="sm"
                className={`annotation-btn tag-definition ${annotationState == DEFINITION_INT ? 'active' : ''}`}
                onClick={() => changeAnnotation(DEFINITION_INT)}
                aria-pressed={annotationState == DEFINITION_INT}
              >
                <PiTag/>
                <span>Definition</span>
              </Button>
    
              <Button
                variant="outline-secondary"
                size="sm"
                className={`annotation-btn tag-fact ${annotationState == FACT_INT ? 'active' : ''}`}
                onClick={() => changeAnnotation(FACT_INT)}
                aria-pressed={annotationState == FACT_INT}
              >
                <PiTag/>
                <span>Fact</span>
              </Button>
    
              <Button
                variant="outline-secondary"
                size="sm"
                className={`annotation-btn tag-example ${annotationState == EXAMPLE_INT ? 'active' : ''}`}
                onClick={() => changeAnnotation(EXAMPLE_INT)}
                aria-pressed={annotationState == EXAMPLE_INT}
              >
                <PiTag/>
                <span>Example</span>
              </Button>
            </div>
    
            <Button
              variant="outline-danger"
              size="sm"
              className="clear-btn"
              onClick={() => changeAnnotation(CLEAR_INT)}
              disabled={annotationState == CLEAR_INT}
            >
              <PiEmpty/>
              <span>Clear</span>
            </Button>
          </div>
      }
      </div>
    </>
  )
}

export default Toolbar
