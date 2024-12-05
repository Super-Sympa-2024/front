interface CapchatComponentProps {
  consigne: string
}

export default function CapchatComponent(props: CapchatComponentProps) {
  return (
    <div>
      <img></img>
      <div>
        <p>{props.consigne}</p>
      </div>
      <div></div>
      <div className='flex'>
        <div className='flex'>
          <button>
            <img src='../assets/recharge.webp' alt='reaload' />
          </button>
          <button>
            <img src='../assets/casque.webp' alt='listen'></img>
          </button>
          <button>
            <img src='../assets/info.webp' alt='Information'></img>
          </button>
        </div>
        <button>Verifier</button>
      </div>
    </div>
  )
}

function EsquiveComponent() {
  return (
    <div>
      <img></img>
      <div></div>
      <div></div>
    </div>
  )
}
