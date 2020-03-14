import {
  GET_TRANSACTION,
  TRANSACTION_ERROR,
  DELETE_TRANSACTION,
  ADD_TRANSACTION
  
  } from './type'
  export default (state,action) => {
switch(action.type){
  case 'GET_TRANSACTION':
    return {
      ...state,
      loading:false,
      transactions:action.payload
    }
  case 'DELETE_TRANSACTION' :
    return {
      ...state,
      transactions: state.transactions.filter(transaction=> transaction._id !== action.payload)
    }

    case 'ADD_TRANSACTION' :
    return {
      ...state,
      transactions: [...state.transactions,action.payload]
    }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error:action.payload
      }
    default: 
      return state;
}
}