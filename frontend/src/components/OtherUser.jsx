import React from 'react'

const OtherUser = () => {
  return (
    <div>
            <div className='flex gap-2 items-center hover:bg-zinc-200 rounded p-2 cursor-pointer'>
                <div className='avatar online'>
                     <div className='w-12 rounded-full'>
                        <img src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile" />
                     </div>
                </div>
            <div className='flex flex-col flex-1'>
                 <div className='flex justify-between gap-2 '>
                        <p>Esha Raj</p>
                 </div>
            </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
</div>
  )
}

export default OtherUser