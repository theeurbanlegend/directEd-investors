import React from 'react'
import PoolCard from './PersonalPoolCard'

const PersonalPoolData = () => {
    const sample=
    [
        {
          "inv_pool": "Tech Skills Bootcamp",
          "inv_amnt": "$2,000",
          "tok_earned": "20 tokens",
          "inv_status": "Active",
          "returns": "Redeem tokens for a percentage of students' future earnings"
        },
        {
          "inv_pool": "STEM Scholarships",
          "inv_amnt": "$3,500",
          "tok_earned": "23 tokens",
          "inv_status": "Active",
          "returns": "Redeem tokens for a percentage of students' future earnings"
        },
        {
          "inv_pool": "Entrepreneurship Incubator",
          "inv_amnt": "$1,000",
          "tok_earned": "5 tokens",
          "inv_status": "Pending (Investment Goal Not Met)",
          "returns": "Redeem tokens for a percentage of entrepreneurs' future earnings"
        }
      ]
      
  return (
    <div className="flex items-start w-full gap-4 lg:flex-row flex-col">
        {sample.map((item)=>(
            <PoolCard inv_amnt={item.inv_amnt} inv_status={item.inv_status} tok_earned={item.tok_earned} inv_pool={item.inv_pool} returns={item.returns}/>
        ))}
        
    </div>
  )
}

export default PersonalPoolData