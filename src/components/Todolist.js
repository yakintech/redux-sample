import React from 'react';
import { connect } from 'react-redux';
import { todoDeleted, todos } from '../state/actions/todo.action'

function Todolist(props) {
    return (
        <>
            <ul>
                {
                    props.todos.map((item) => (
                        <>
                            <li>{item.name}</li>
                            <button onClick={() => props.onDeleted(item.name)}>Delete</button>
                        </>
                    ))
                }
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleted: (data) => {
            dispatch(todoDeleted(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
