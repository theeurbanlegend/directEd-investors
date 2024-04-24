import React from 'react'

const PoolCard = ({inv_pool, inv_amnt, tok_earned, inv_status, returns}:{inv_pool?:string, inv_amnt:string, tok_earned:string, inv_status:string, returns:string}) => {
  return (
    <div className='p-4 bg-white shadow-md gap-2 rounded-lg'>
      <p className='font-medium text-xl'>{inv_pool}</p>
      <p>Amount: {inv_amnt}</p>
      <p>Tokens Earned: {tok_earned}</p>
      <p>Status: {inv_status}</p>
      <p>{returns}</p>
    </div>
  )
}

export default PoolCard