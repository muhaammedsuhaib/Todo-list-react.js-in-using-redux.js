import React,{useRef,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo,editTodo,updateTodo,deleteTodo } from "./Reducer";
import { MDBBtn, MDBIcon, MDBInput  } from 'mdb-react-ui-kit';
import './style.css';
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoSaveSharp } from "react-icons/io5";


const Todo = () =>{
   
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();  
    const [Todo,setTodo] = useState("");
    const updateitem = useRef(null);

    const addHandle = ()=>{
        if(Todo.length>0){
            dispatch(addTodo(Todo))
            setTodo("")
        }
    }
    const updateHandle = (Id) =>{
        if(updateitem.current.value.length > 0) {
            dispatch(updateTodo({ id: Id, task: updateitem.current.value}))
        }
    }

    return(
        <>
        <div className='container' style={{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",textAlign:'center',color:'black',padding:"50px"}}>
          <div style={{width:"700px",height:"auto",padding:'30px',backgroundColor: 'rgba(255, 255, 255, 0.5)',backdropFilter: 'blur(5px)',borderRadius:"50px" }}>           
           <div className="container">
             <h1 className="heading" data-shadow='TODO LIST'> </h1>               
                <MDBInput type="text" value={Todo} onChange={(e)=> setTodo(e.target.value)}  />
                 <MDBBtn onClick={addHandle} color="black" className="m-3"><MDBIcon fab icon='add'/></MDBBtn>    </div>
                
               
                    {todo.map((Data)=>(
                        <div >
                            {
                                Data.edit ?
                                <>
                                <MDBInput type="text" ref={updateitem} defaultValue={Data.task} /> 
                                <div className="m-3" ><IoSaveSharp onClick={()=> updateHandle(Data.id)} size={25}/> </div> 
                                  </> :<>
                                                 <div className="container" style={{border:"2px solid rgb(51, 51, 51)",margin:'3px',boxShadow:"1px 1px 2px 2px 	rgb(128, 128, 128)"}}>     
                                <div style={{textAlign:"right"}}> < MdOutlineDeleteForever onClick={() => dispatch(deleteTodo(Data.id))} size={25} color="rgb(153, 0, 0)" /></div>  
                               <p className="text-break">{Data.task}  </p>
                                        
                          <div className="m-3" style={{textAlign:'center'}}><FaRegEdit onClick={() => dispatch(editTodo(Data.id))} size={20} color="rgb(153, 0, 0)" /></div>         
                                </div>   
                                </>
                            }
                            </div>
                    ))}
                    </div>
                    </div>
                </>
           

        
    )
    
}

export default Todo

