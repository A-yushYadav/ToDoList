import React,{ useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [isExpended , setExpended] = useStare(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();

    function expand(){
      setExpended(true);
    }
  }
  return (
    <div>
      <form className="create-note">
        {isExpended && (
          <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={note.title}
        />
        )}
        
        <textarea
          name="content"
          rows={isExpended ? 3:1}
          onClick={expand}
          placeholder="Take a note ... "
          onChange={handleChange}
          value={note.content}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
