import {useState} from 'react';
const TodoApp =()=>{
    const [allTodos,setAllTodos]= useState([]);
    const[currentTodo,setCurrentTodo]=useState("")
    const[editIndex,setEditIndex]=useState(undefined);

    const handelSubmit=()=>{
      if(editIndex != undefined){
        const newTodos=allTodos.map((todo,index)=>{
          if(index==editIndex) return currentTodo;
          return todo;

        })
        setAllTodos(newTodos)
        setCurrentTodo("")
      }
      else{
      if(currentTodo.length>0){
      setAllTodos([...allTodos,currentTodo]);
      setCurrentTodo("")
      currentTodo("")
      }
      else{
        alert("please enter the valid message")
      }
    }
        
    }

    const handleOnChange =(event)=>{
    setCurrentTodo(event.target.value)

    }
    const handleOnEdit=(eIndex)=>{
      setCurrentTodo(allTodos[eIndex]);
      setEditIndex(eIndex);

    }
    const handleondelete =(eindex)=>{
    delete allTodos[eindex];
    const filtered =allTodos.filter(x=>x !== undefined)
    setAllTodos([...filtered])
    
    }

    return(
        <div style={{marginTop:50}}>
            <h1>Todo application</h1>
            <input type="text" onChange={handleOnChange} value={currentTodo}style={{marginRight:50}}></input>

            <button type="button" className="btn btn-secondary" onClick={handelSubmit}>submit</button>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">SI</th>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
      {allTodos.map((todo,index)=>{
        return(
          <tr>
            <td>{index+1}</td>
            <td>{todo}</td>
            <td>
              <button type="button" className="btn btn-secondary"style={{marginRight:25}} onClick={()=>{handleOnEdit(index)}}>edit</button>
              <button type="button" className="btn btn-secondary" on onClick={()=>{handleondelete(index)}}>delete</button>
               </td>
          </tr>
        )

      })}
      
  
     </tbody>
</table>
        </div>
        
    )
   
}
export default TodoApp;