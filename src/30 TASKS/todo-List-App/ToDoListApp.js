import ToDoForm from "./Components/ToDoForm";

const ToDoListApp = ({setListOfTask}) => {
  return (
    <>
        <ToDoForm setListOfTask={setListOfTask}/>
    </>
  )
}

export default ToDoListApp