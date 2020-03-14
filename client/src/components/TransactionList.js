// import React,{useContext,useEffect} from 'react';
// import AppContext from '../context/AppContext';
// import {Transaction   } from './Transaction'
// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';


//  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

// export const TransactionList = () => {

// const { transactions,getTransaction} = useContext(AppContext)

//  useEffect(()=>{
//   getTransaction();
//   // eslint-disable-next-line
//  },[])
//     return (
//         <div>
//               <h3>History</h3>
//       <ul className="list-group">

//       {  !transactions.length ? (
//                <Spin indicator={antIcon} />
//                      ): (

//                        transactions.map(transaction=>(
//              <Transaction key={transaction.id} transaction={transaction}/>
//            ))
//       )}
//       </ul>
//         </div>
//     )
// }

import React,{useContext,useEffect} from 'react';
import AppContext from '../context/AppContext';
import {numberWithCommas} from '../utils/format'
import { DeleteOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


 const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


export const TransactionList = () => {

const { transactions,getTransaction,deleteTransacion} = useContext(AppContext)

 useEffect(()=>{
  getTransaction();
  // eslint-disable-next-line
 },[])
    return (
        <div>
              <h3>History</h3>
      <ul className="list-group">

      {  !transactions.length ? (
               <Spin indicator={antIcon} />
                     ): (

                       transactions.map(transaction=>(
                        <li className={transaction.amount < 0 ? 'list-group-item text-danger' : 'list-group-item '}>
                        <div class="row">
                             <div class="col">
                             {transaction.text} 
                             </div>
                             <div class="col">
                               
                             <span>{transaction.amount < 0 ? '-' : '+'}BDT {numberWithCommas(Math.abs(transaction.amount))}</span><span onClick={()=>deleteTransacion(transaction._id)}> <DeleteOutlined /></span>
                             </div>
             </div>
             
                        
                         
                         
                       </li>
           ))
      )}
      </ul>
        </div>
    )
}

  