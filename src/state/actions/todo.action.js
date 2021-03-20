export const todoCreated = (data = {}) => {
    return {
        type: 'TODO_CREATED',
        payload: data
    }
}

export const todoDeleted = (data = '') => {
    return {
        type:'TODO_DELETED',
        payload:data
    }
}

export const todos = (data = [])=>{
    return{
        type:'TODOS',
        payload:data
    }
}