import React from 'react';
import { connect } from 'react-redux';
import { todoBulkinsert } from '../state/actions/todo.action'


function TodoBulk(props) {

    let ornekdizi = [{ name: 'örnek todo', description: 'örnek todo açıklama' }, { name: 'örnek todo222', description: 'örnek todo açıklama22' }];

    const Bulk = () => {
        props.onMkkbulk(ornekdizi);
    }

    return (
        <>
            <button onClick={() => Bulk()}>Bulk Insert Yap</button>
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
        onMkkbulk: (data) => {
            dispatch(todoBulkinsert(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoBulk);