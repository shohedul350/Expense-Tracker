import React,{useState,useContext}from 'react'
import AppContext from '../context/AppContext';
export const AddTransaction = () => {
  const [text,setText]=useState('');
  const [amount,setAmount]=useState(0)
  const { addTransacion }=useContext(AppContext);

  const onSubmit= e=>{
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:+amount
    }
    console.log(newTransaction)
    addTransacion(newTransaction)
  }
    return (
<div>
<button type="button" className="btn btn-primary m-3" data-toggle="modal" data-target="#exampleModal">
 Add transaction
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Transaction</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form onSubmit={onSubmit}>
      <div className="form-group">
          <label for="text">Text:</label>
          <input type="text" 
           className="form-control"
           placeholder="Enter text..." 
           value={text}
           onChange={(e)=>setText(e.target.value)}
           required/>
        </div>

        <div className="form-group">
          <label for="amount">Amount: <br/>
            (negative - expense, positive - income)</label>
          <input type="number" 
           className="form-control"
           placeholder="Enter amount..." 
           value={amount}
           onChange={(e)=>setAmount(e.target.value)}
           required/>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary">Save</button>
        </div>
       
      </form>
      </div>
     
    </div>
  </div>
</div>


</div>



    )
}


