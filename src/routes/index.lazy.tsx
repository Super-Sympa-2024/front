import bateau from '@assets/bateau_halo.webp'
import { createLazyFileRoute, Link } from '@tanstack/react-router'

import '@assets/home.css'

import { useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  const [displayText, setDisplayText] = useState(false)

  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#DC7A91] to-[#FFD99E]'>
        <div className='flex w-full justify-between p-10'>
          <h1 className='text-[80px]'>
            SUPER
            <br />
            SYMBATEAU
          </h1>
          <p className='w-[500px] text-justify text-lg'>
            Attention l'océan est en panique aidez nous à le sauver par pitié
            nous vous en supplions AAAAh non pas les déchets !! Attention
            l'océan est en panique aidez nous à le sauver par pitié nous vous en
            supplions AAAAh non pas les déchets !! Attention l'océan est en
            panique aidez nous à le sauver par pitié nous vous en supplions
            AAAAh non pas les déchets !! Attention l'océan est en panique aidez
            nous à le sauver par pitié nous vous en supplions AAAAh non pas les
            déchets !!
          </p>
        </div>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='absolute top-[50%] left-0 w-full -translate-y-1/2 wave'
      >
        <path
          d='M0,64L40,90.7C80,117,160,171,240,170.7C320,171,400,117,480,96C560,75,640,85,720,101.3C800,117,880,139,960,138.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
          fill='#1970A9'
        />
      </svg>

      <div className='absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t to-[#1970A9] from-[#0A2C43]'>
        <div className='hover:scale-110 duration-300'>
          <Link to='/activity'>
            <div className='absolute w-[250px] mx-auto left-[43%] top-[-340px] boat cursor-pointer'>
              <img
                src={bateau}
                onMouseEnter={() => setDisplayText(true)}
                onMouseLeave={() => setDisplayText(false)}
              />
              {displayText && (
                <p className='text-center font-bold text-xl'>
                  Cliquez pour aider !
                </p>
              )}
            </div>
          </Link>
        </div>
        <div className='flex justify-center gap-[200px] mt-[100px]'>
          <Link to='/stats'>
            <button className='rounded-xl p-5 font-bold text-2xl border-[3px] text-[#1E90FF] border-[#1E90FF] hover:bg-white hover:opacity-50 duration-200'>
              Statistiques
            </button>
          </Link>
          <button className='rounded-xl p-5 font-bold text-2xl border-[3px] text-[#1E90FF] border-[#1E90FF] hover:bg-white hover:opacity-50 duration-200'>
            Crédits
          </button>
        </div>
      </div>
    </div>
  )
}
