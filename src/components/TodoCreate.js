import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoCreated, todoDeleted } from '../state/actions/todo.action'


function TodoCreate(props) {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    const add = () => {
        props.onCreate({name,description});
    }

    return (
        <>
            <div>
                <input onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <input onChange={(e) => setdescription(e.target.value)} />
            </div>
            <div>
                <button onClick={() => add()}>Add Todo</button>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        todos:state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate:(data)=>{
            dispatch(todoCreated(data))
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoCreate)
