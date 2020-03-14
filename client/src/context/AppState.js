import React, {useReducer} from 'react';
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import axios from 'axios'
import {
GET_TRANSACTION,
TRANSACTION_ERROR,
DELETE_TRANSACTION,
ADD_TRANSACTION

} from './type'
const AppState=(props)=>{

//  initial state
const initialState ={
transactions: [],
error: null,
loading: true
}


const [state,dispatch]=useReducer(AppReducer,initialState)





 
//get transaction
const getTransaction = async ()=>{
    try {
        const res = await axios.get('/api/v1/transactions');
        dispatch({
            type: 'GET_TRANSACTION',
            payload:res.data.data 
        })
    } catch (err) {
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    }
}

const deleteTransacion = async (id)=>{
    try {
     await axios.delete(`/api/v1/transactions/${id}`);
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    } catch (err) {
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    }
}


const addTransacion = async (transaction)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {

        const res = await axios.post('/api/v1/transactions/',transaction,config);
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: res.data.data
        });
    } catch (err) {
       dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    }
}

return (
    <AppContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransaction,
        deleteTransacion,
        addTransacion


}}>
   {props.children}
</AppContext.Provider>
)
}
export default AppState;


