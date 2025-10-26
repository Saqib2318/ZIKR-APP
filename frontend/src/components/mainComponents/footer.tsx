import { BrainCog, House, PersonStandingIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {

}
const Footer = () => {
  return (
    <footer className='fixed grid grid-cols-4 w-full h-24 bottom-0 left-0 bg-blue-950'>
        {
            [{icon:'house',name:'Home'},{icon:'duas',name:'Duaos'},{icon:'brain',name:'Remember'},{icon:'profile',name:'Profile'}].map((elm,idx)=>{
                return <>
                    <div className='flex-1 flex flex-col gap-1'>
                        {
                            elm.icon == 'house'?
                            (
                                <House/>
                            ):
                            elm.icon == 'duas'?(
                                <Image
                                src={'/Dua.png'}
                                width={'200'}
                                height={"200"}
                                alt='happy'
                                />
                            ):elm.icon == 'brain'?(
                                <BrainCog/>
                            ):
                            <PersonStandingIcon/>
                        }
                    </div>
                </>
            })
        }
    </footer>
  )
}

export default Footer