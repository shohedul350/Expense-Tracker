import React,{useContext,useEffect} from 'react';
import AppContext from '../context/AppContext';
import {Transaction   } from './Transaction'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


 const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const TransactionList = () => {
  const { transactions,getTransaction} = useContext(AppContext)
 useEffect(()=>{
  getTransaction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
    return (
        <>
              <h3>History</h3>
      <ul className="list-group">

      {  !transactions.length ? (
               <Spin indicator={antIcon} />
                     ): (

                       transactions.map(transaction=>(
             <Transaction key={transaction.id} transaction={transaction}/>
           ))
      )}
      
    
      
       
      </ul>
        </>
    )
}

  