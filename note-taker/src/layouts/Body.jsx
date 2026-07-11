import NoteArea from '../features/notes/NoteArea'
import QuizArea from '../features/quiz/QuizArea'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { PiNotePencil, PiRocket } from "react-icons/pi";
import '../styles/ToolbarStyle.css';

function Body() {

  const [isNoteMode, setIsNoteMode] = useState(() => {
     const savedIsNoteMode = localStorage.getItem('isNoteMode');
     return savedIsNoteMode !== null ? savedIsNoteMode === 'true' : true;
   });

   function changeMode() {
    const newMode = !isNoteMode;
     setIsNoteMode(newMode);
     localStorage.setItem('isNoteMode', newMode);

     setAnnotationState(CLEAR_INT);
  }

  return (
    <>
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
      {isNoteMode ? <NoteArea isNoteMode={isNoteMode} /> : <QuizArea />}
    </>
  )
}

export default Body
