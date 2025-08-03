import React from 'react'

const InfoCards = ({ icon, label, value, color }) => {
  return (
    <div className='flex gap-6 bg-white p-6 rounded-2xl shadow-md justify-between shadow-gray-100 border border-gray-200/50'>
        <div className={`w-10 h-10 flex items-center justify-center text-[20px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div>
        <div className='inline-flex gap-2 justify-between'>
          <h5 className='text-sm text-gray-500 mb-1'>{label}</h5>
          <span className='text-3xl'>{value}</span>
        </div>
    </div>
  )
}

export default InfoCards