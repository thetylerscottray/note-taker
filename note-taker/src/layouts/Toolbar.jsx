import { useState } from 'react'
import { Button } from 'react-bootstrap'

function Toolbar() {

  const [isNoteMode, setIsNoteMode] = useState(true);
  const [annotationState, setAnnotationState] = useState("");

  function changeMode() {
    setIsNoteMode(!isNoteMode);
  }

  return (
    <>
      <div id="mode-buttons">
        <Button disabled={isNoteMode} onClick={changeMode}>Notes</Button>
        <Button disabled={!isNoteMode} onClick={changeMode}>Quiz</Button>
      </div>
      <div id="state-buttons">
        <Button>Definition</Button>
        <Button>Fact</Button>
        <Button>Example</Button>
        <Button>Clear</Button>
      </div>
    </>
  )
}

export default Toolbar
