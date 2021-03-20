const TodoReducer = (state = [], action) => {

    const { type, payload } = action;

    if (type === 'TODO_CREATED') {

        state = [...state, payload];
        return state;
    }
    else if (type === 'TODO_DELETED') {
        const data = state.filter(q => q.name != payload);
        return data;
    }
    else {
        return state;
    }



}


export default TodoReducer


