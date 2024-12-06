import { createLazyFileRoute } from '@tanstack/react-router'
import reloadImg from "@assets/recharger.webp"
import casqueImg from "@assets/casque.webp"
import infoImg from "@assets/info.webp"

export const Route = createLazyFileRoute('/captcha')({
  component: RouteComponent,
})

interface CaptchaProps {
  consigne: string
}

function RouteComponent(props: CaptchaProps) {
  return <div className='flex flex-col justify-center '>
    <img></img>
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <p>La consigne</p>
      </div>
      <div>

      </div>
      <div className='flex justify-center'>
        <div className='flex'>
        <button>
          <img className='w-[25px]' src={reloadImg} alt='reload' />
        </button>
        <button>
          <img className='w-[25px]' src={casqueImg} alt='listen'></img>
        </button>
        <button>
          <img className='w-[30px]' src={infoImg} alt='Information'></img>
        </button>
      </div>
        <button>Verifier</button>
      </div>
    </div>
  </div>
}
