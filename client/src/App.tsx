import React, { useState } from 'react';


export interface Items {
  label?: string,
  class:string,
}



const items:Array<Items> = [
  {
    label: "Home",
    class:"fa-solid fa-house",
  },
  {
    label: "Anylitics",
    class:'fa-solid fa-chart-simple',
  },
  {
    label: "Top 5",
    class:"fa-brands fa-first-order",
  },
  {
    label: "Feedback",
    class:'fa-solid fa-comment',
  },
  {
    label: "Add",
    class:'fa-solid fa-plus',
  },
  {
    label: "Users",
    class:'fa-solid fa-user',
  },
  {
    label: "Logout",
    class:'fa-solid fa-right-from-bracket'
  }
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className='grid grid-cols-12 bg-red-200 h-screen'>
      <div className='col-span-2  h-screen py-6 left bg-[#1c2434] '>
        <div className='flex w-full justify-center gap-4 items-center '>
          <img className='h-10 w-10  ' src='https://demo.tailadmin.com/src/images/logo/logo-icon.svg' />
          <p className='text-2xl text-white font-bold '>Dashboard</p>
        </div>
        <div className='flex flex-col px-10 my-10'>
          {
            items && items.map((item:Items, idx) => {
              return <div onClick={()=>setActiveIndex(idx)} className={`flex text-white ${activeIndex===idx?'bg-[#333a48]':null} justify-start rounded hover:bg-slate-300  hover:text-black items-center h-10  my-2 p-2 `}>
                <i className={item.class}></i>
                <p className='mx-10'>{item.label}</p>
              </div>
            })
          }

        </div>

      </div>
      <div className='col-span-10'>

      </div>

    </div>
  )
}

export default App
