import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [Name, setName] = useState("");
    const [School, setSchool] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!Name || !School){
            alert("cannot blank field")
        }
        else{
            props.addTodo(Name,School);
            setName("");
            setSchool("");
        }
    }
    return (
        <div className='container'>
            <h3>Add a Todos</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group my-2">
                    <label htmlFor="school">School Name :</label>
                    <input type="text" value={School} onChange={(e)=>{setSchool(e.target.value)}} className="form-control" id="school" placeholder="School Name"/>
                </div>
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn my-2 btn-sm btn-primary">Add Todo</button>&nbsp;
                {/* <input class="btn btn-primary" type="reset" value="Reset"/> */}
            </form>
        </div>
    )
}
