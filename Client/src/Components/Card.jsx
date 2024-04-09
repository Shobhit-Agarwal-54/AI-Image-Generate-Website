import React from 'react'
import { download } from '../assets'
import {downloadImage} from "../utils"
const Card = ({_id,name,prompt,photo}) => {
  return (
    <div cLassName='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img 
          cLassName='w-full h-auto object-cover rounded-xl'
          src={photo}
          aLt={prompt}
          />
          <div cLassName='group-hover:flex flex-col max-h-[94.5%]
          hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 
          p-4 rounded-md'>
            <p cLassName='text-white text-sm overflow-y-auto prompt'>{prompt}</p>

            <div cLassName='mt-5 flex justify-between items-center gap-2'>
              <div cLassName='flex items-center gap-2'>
                <div cLassName='w-7 h-7 rounded-full object-cover bg-green-700
                 flex justify-center items-center text-white text-xs font-bold'>
                  {name[0]}
                </div>
                <p cLassName='text-white text-sm'>{name}</p>
              </div>
              <button type="button" onCLick={() => downloadImage(_id,photo)}
                  cLassName='outline-none bg-transparent border-none'>
                    <img src={download} alt="download" cLassName='w-6 h-6 object-contain invert'/>
                  </button>
            </div>
          </div>
    </div>
  )
}

export default Card