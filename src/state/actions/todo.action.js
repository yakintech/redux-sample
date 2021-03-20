export const todoCreated = (data = {}) => {
    return {
        type: 'TODO_CREATED',
        payload: data
    }
}

export const todoBulkinsert = (data = []) =>{
    console.log('bulkaction',data)
    return {
        type:'TODO_BULKINSERT',
        payload:data
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