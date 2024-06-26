import { useEffect, useState } from 'react'
import { useUserContext } from '../../context/userContext';
import { getInvestorDetails } from '../../api/requests/getInvestorDetails';

const LatestTransactionsTable = () => {
    const { id, getCurrentUser } = useUserContext();
    const [transactions, setTransactions] = useState<any[] | null>(null);
    useEffect(() => {
      getCurrentUser();
      if(id){
        const getTxns=async()=>{
            const {inv}=await getInvestorDetails({id})
            setTransactions(inv.transactions)
        }
        getTxns()
      }
    }, []);
  return (
    <div className='bg-white rounded-lg p-4 shadow-md w-full'>
        <p>Latest Transactions</p>
        <table className='w-full'>
            <thead className='text-left'>
                <tr className='text-left'>
                    <th>Transaction ID</th>
                    <th>Transaction Type</th>
                    <th>Transaction Amount</th>
                    <th>Transaction Status</th>
                    <th>Transaction Date</th>
                    <th>Transaction Balance</th>
                </tr>
            </thead>
            <tbody>
                {transactions?.map((txn, index) => (
                    <tr key={index}>
                        <td>{txn._id}</td>
                        <td>{txn.transaction_type}</td>
                        <td>{txn.transaction_amount}</td>
                        <td>{txn.transaction_status}</td>
                        <td>{txn.createdAt}</td>
                        <td>{txn.transaction_balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default LatestTransactionsTable