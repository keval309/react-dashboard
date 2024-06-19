import data from '../../../public/assets/data.json';
import TransactionTable from "../GlobalComponent/TranscationTable";


const Transaction = () => {
    
    
  return <>
        <div className="transactionContainer">
            <h2>Transaction</h2>
            <TransactionTable pagination tableData={data.transaction}/>
        </div>
  </>;
};

export default Transaction;
