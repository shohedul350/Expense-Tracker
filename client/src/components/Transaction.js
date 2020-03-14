import React,{useContext}from 'react'
import AppContext from '../context/AppContext';
import {numberWithCommas} from '../utils/format'
import { DeleteOutlined } from '@ant-design/icons';
export const Transaction = ({transaction}) => {
    const { deleteTransacion }=useContext(AppContext);
    
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'list-group-item text-danger' : 'list-group-item '}>
           <div class="row">
                <div class="col">
                {transaction.text} 
                </div>
                <div class="col">
                <span>{sign}BDT {numberWithCommas(Math.abs(transaction.amount))}</span><span onClick={()=>deleteTransacion(transaction._id)}> <DeleteOutlined /></span>
                </div>
</div>

           
            
            
          </li>
    )
}
