import React, { useState, useEffect } from "react";
import './TodoList.css';
import Icon from './assets/icon.webp'


function TodoList(){
    const listStorage = localStorage.getItem('list')
    const [list,setList] = useState(listStorage ? JSON.parse(listStorage) : []);
    const [newItem,setNewItem]= useState("");

    useEffect(()=> {
        localStorage.setItem('list', JSON.stringify(list));
    },[list])

        function addItem(form){
            form.preventDefault();
            if(!newItem){
                return;
            }
            setList([...list, {text:newItem,isCompleted:false}]);
            setNewItem("");
            document.getElementById('input-entry').focus();
        }
        
        function clicked(index){
            const listAux=[...list];
            listAux[index].isCompleted= !listAux[index].isCompleted;
            setList(listAux);
        }

        function deleteed(index){
            const listAux=[...list];
            listAux.splice(index,1);
            setList(listAux);
        }
        
        function deletedAll(){
            setList([]);
        }

    return (
        <div>
            <h1>To Do List:</h1>
            <form onSubmit={addItem}>
                <input 
                id="input-entry"
                type="text"
                value={newItem}
                onChange={(e) =>{setNewItem(e.target.value)}}
                placeholder="Add a task" />
            <button className="add" type="submit">Add</button>
            </form>
            <div className="todolist">
                <div style={{textAlign:'center'}}>
                {
                    list.length <1 
                    ?
                    <img className="icon-center" src={Icon} /> 
                    :  
                    list.map((item,index)=>(

                    <div 
                    key={index}
                    className={item.isCompleted ? "item complete" : "item" 
                    }>
                    <span onClick={()=>{clicked(index)}}>{item.text}</span>
                    <button onClick={()=>{deleteed(index)}} className="del">Delete</button>
                </div>
                ))
                }
           {
                     list.length > 0 &&
                    <button  onClick={()=>{deletedAll()}} className="deleteAll">Delete all tasks</button>
           }
                </div>
            </div>
        </div>
    )
}

export default TodoList