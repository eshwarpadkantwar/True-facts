import React, { useState } from "react";

function TodoApp() {
    const [todo, setTodo] = useState([]);
    const [newtodo, setNewtodo] = useState("Apple");
    const [removeall, setRemoveall] = useState(false);
    const [check, setCheck] = useState(false)

    const addtodo = () => {
        if (newtodo.trim() !== '') {
            setTodo([...todo, newtodo]);
            setNewtodo(" ");
            setRemoveall(true)

        }
    }

    const removetodo = (index) => {
        const updatedtodo = [...todo];
        updatedtodo.splice(index, 1)
        setTodo(updatedtodo)
    }

    let checked = (e)=>{
        setCheck(e.target.checked)
        console.log(e.target.checked)
    }

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input type="text" value={newtodo} onChange={(e) => setNewtodo(e.target.value)} />

                <button onClick={addtodo}>Add</button>
                
                {removeall &&  (
                    <button onClick={()=>setTodo([])}>Remove all</button>
                )}

            </div>
            <ul>
                {todo.map((todo, index) => {

                    return (
                        <div key={index}>
                            <li>
                                <input type="checkbox" onChange={checked}/>
                                <h1>{todo}</h1>
                                <button onClick={() => removetodo(index)}>Remove</button>
                            </li>

                        </div>
                    )



                })}
            </ul>
        </div>
    )
}

export default TodoApp