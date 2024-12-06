import { useEffect, useState } from 'react'
import anguilleImg from '@assets/anguille.webp'
import barreImg from '@assets/barre.webp'
import blobfishImg from '@assets/blobfish.webp'
import starfish_1 from '@assets/blue_starfish.webp'
import bouteille from '@assets/bouteille_plastique.webp'
import captcha_1_sound from '@assets/captcha_1_sound.mp3'
import captcha_2_sound from '@assets/captcha_2_sound.mp3'
import captcha_3_sound from '@assets/captcha_3_sound.mp3'
import casqueImg from '@assets/casque.webp'
import starfish_2 from '@assets/green_starfish.webp'
import infoImg from '@assets/info.webp'
import poissonbanalImg from '@assets/poissonbanal.webp'
import reloadImg from '@assets/recharger.webp'
import starfish_3 from '@assets/red_starfish.webp'
import wave_bg from '@assets/wave_bg.webp'

// Définition de l'interface pour les éléments du jeu
interface Item {
  id: number
  type: 'fish' | 'starfish' | 'trash' // Type de l'élément
  img: string // Chemin de l'image associée
  clicked: boolean // État de sélection
  position: { top: number; left: number } // Position de l'élément
}

// Props attendues par le composant GameComponent
interface GameComponentProps {
  captchaType: number // Type de CAPTCHA (1 = poisson, 2 = étoile de mer, 3 = déchets)
}
interface CapchatComponentProps {
  onFinish: () => void
}
export default function CapchatComponent(props: CapchatComponentProps) {
  // État pour le type de CAPTCHA
  const [captcha_number, set_captcha_number] = useState<number>(
    Math.floor(Math.random() * 3) + 1
  )

  // États liés à l'affichage et aux instructions
  const [captcha_title, set_captcha_title] = useState<string>('')
  const [captcha_info, set_captcha_info] = useState<string>('')
  const [captcha_info_visible, set_captcha_info_visible] =
    useState<boolean>(false)

  // État pour forcer le rechargement du jeu
  const [reloadKey, setReloadKey] = useState<number>(0)

  // État pour rendre le CAPTCHA visible/invisible
  const [captchaVisible, setCaptchaVisible] = useState<boolean>(true)

  // État du bouton Vérifier (default ou success)
  const [verifyButtonState, setVerifyButtonState] = useState<
    'default' | 'success'
  >('default')

  // Met à jour le titre en fonction du type de CAPTCHA
  useEffect(() => {
    change_captcha_title()
  }, [captcha_number])

  // Définit les instructions en fonction du type de CAPTCHA
  function change_captcha_title() {
    if (captcha_number === 1)
      set_captcha_title(
        'Cliquez sur tous les poissons pour les protéger de la pollution'
      )
    if (captcha_number === 2)
      set_captcha_title(
        'Cliquez sur toutes les étoiles de mer pour les sauver de ces fonds marins détruits par l humain'
      )
    if (captcha_number === 3)
      set_captcha_title(
        'Cliquez sur tous les déchets pour nettoyer les eaux et laisser vivre les les êtres marins'
      )
  }

  // Recharge le CAPTCHA avec un nouveau type
  function reload() {
    let new_captcha = Math.floor(Math.random() * 3) + 1
    while (new_captcha === captcha_number) {
      new_captcha = Math.floor(Math.random() * 3) + 1
    }
    set_captcha_number(new_captcha)
    set_captcha_info_visible(false) // Cache l'information
    setReloadKey((prevKey) => prevKey + 1) // Force le rechargement
  }

  // Joue un son en fonction du type de CAPTCHA
  function PlaySound(src: string) {
    const theSound = new Audio()
    theSound.src = src
    theSound.play()
  }

  // Déclenche le son en fonction du type de CAPTCHA
  function listen() {
    if (captcha_number === 1) PlaySound(captcha_1_sound)
    if (captcha_number === 2) PlaySound(captcha_2_sound)
    if (captcha_number === 3) PlaySound(captcha_3_sound)
  }

  // Affiche une information liée au CAPTCHA
  function Information() {
    if (captcha_number === 1) set_captcha_info('Cliquez sur les poissons.')
    if (captcha_number === 2)
      set_captcha_info('Cliquez sur les étoiles de mer.')
    if (captcha_number === 3) set_captcha_info('Cliquez sur les déchets.')
    set_captcha_info_visible(true)

    setTimeout(() => {
      set_captcha_info_visible(false)
    }, 10000)
  }

  // Gère le succès du CAPTCHA
  function handleSuccess() {
    setVerifyButtonState('success') // Change l'état du bouton
    setTimeout(() => {
      setCaptchaVisible(false) // Cache le CAPTCHA après 1 seconde
      props.onFinish()
    }, 1500)
  }

  // Gère l'échec du CAPTCHA
  function handleFailure() {
    setReloadKey((prevKey) => prevKey + 1) // Recharge le jeu
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      {captchaVisible && (
        <div className='flex flex-col items-center bg-white shadow-lg p-6 rounded-md w-[500px] z-10'>
          <div className='bg-blue-500 rounded-md w-[100%] p-2 mb-6'>
            <h2 className='text-xl text-white'>
              {'CAPTCHA : ' + captcha_title}
            </h2>
          </div>
          <div className='w-[100%] h-[400px] object-cover mb-4 border border-gray-300 rounded-md'>
            {/* Composant du jeu */}
            <GameComponent
              captchaType={captcha_number}
              key={reloadKey}
              onSuccess={handleSuccess}
              onFailure={handleFailure}
            />
          </div>
          {captcha_info_visible && (
            <div className='my-4 p-4 bg-gray-200 rounded-md w-[100%]'>
              <p className='text-gray-700'>
                {"Afin de poursuivre votre visite sur notre site web, vous devez finaliser notre CAPTCHA en suivant l'instruction suivante : " +
                  captcha_info}
              </p>
            </div>
          )}
          <div className='flex flex-col space-y-4 w-full'>
            <div className='flex justify-between'>
              <div className='flex space-x-5'>
                {/* Bouton pour recharger le CAPTCHA */}
                <button onClick={reload}>
                  <img className='w-[25px]' src={reloadImg} alt='Recharger' />
                </button>
                {/* Bouton pour écouter le son */}
                <button onClick={listen}>
                  <img className='w-[25px]' src={casqueImg} alt='Écouter' />
                </button>
                {/* Bouton pour afficher les informations */}
                <button onClick={Information}>
                  <img className='w-[30px]' src={infoImg} alt='Information' />
                </button>
              </div>
              {/* Bouton pour vérifier la sélection */}
              <button
                className={`w-[120px] text-white p-2 rounded-md ${
                  verifyButtonState === 'success'
                    ? 'bg-green-500'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
                onClick={() =>
                  document
                    .querySelector<HTMLButtonElement>('.game-check')
                    ?.click()
                }
              >
                {verifyButtonState === 'success' ? 'Réussi !' : 'Vérifier'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Composant du jeu qui gère les éléments à cliquer
 */
const GameComponent: React.FC<
  GameComponentProps & { onSuccess: () => void; onFailure: () => void }
> = ({ captchaType, onSuccess, onFailure }) => {
  const decorWidth = 450
  const decorHeight = 400
  const itemSize = 75

  const itemsData: { [key: number]: 'fish' | 'starfish' | 'trash' } = {
    1: 'fish',
    2: 'starfish',
    3: 'trash'
  }

  // Génère une position aléatoire pour un élément
  const generateRandomPosition = (
    existingPositions: { top: number; left: number }[]
  ): { top: number; left: number } => {
    let position: any
    let overlap
    do {
      position = {
        top: Math.floor(Math.random() * (decorHeight - itemSize)),
        left: Math.floor(Math.random() * (decorWidth - itemSize))
      }
      overlap = existingPositions.some(
        (pos) =>
          Math.abs(pos.top - position.top) < itemSize &&
          Math.abs(pos.left - position.left) < itemSize
      )
    } while (overlap)
    return position
  }

  // Initialise les éléments du jeu
  const initializeItems = (): Item[] => {
    const existingPositions: { top: number; left: number }[] = []

    const fishImages = [anguilleImg, poissonbanalImg, blobfishImg]
    const starfishImages = [starfish_1, starfish_2, starfish_3]
    const trashImages = [bouteille]

    const types: ('fish' | 'starfish' | 'trash')[] = [
      'fish',
      'starfish',
      'trash'
    ]

    return Array(9)
      .fill(null)
      .map((_, index) => {
        const position = generateRandomPosition(existingPositions)
        existingPositions.push(position)

        const type = types[index % types.length]

        const img =
          type === 'fish'
            ? fishImages[Math.floor(Math.random() * fishImages.length)]
            : type === 'starfish'
              ? starfishImages[
                  Math.floor(Math.random() * starfishImages.length)
                ]
              : trashImages[Math.floor(Math.random() * trashImages.length)]

        return {
          id: index + 1,
          type,
          img,
          clicked: false,
          position
        }
      })
  }

  const [items, setItems] = useState<Item[]>(initializeItems)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  // Gère la sélection/désélection des éléments
  const toggleItemSelection = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    )
  }

  // Vérifie si la sélection est correcte
  const verifySelection = () => {
    const correctType = itemsData[captchaType]
    const allCorrect = selectedItems.every(
      (id) => items.find((item) => item.id === id)?.type === correctType
    )
    const noExtraSelections = items
      .filter((item) => item.type === correctType)
      .every((item) => selectedItems.includes(item.id))

    if (allCorrect && noExtraSelections) {
      onSuccess() // Appelle la fonction de succès
    } else {
      alert(
        'Erreur ! Il y a des éléments incorrects sélectionnés, réessayer le CAPTCHA'
      )
      onFailure() // Appelle la fonction d'échec
    }
  }

  return (
    <div
      style={{
        width: `${decorWidth}px`,
        height: `${decorHeight}px`,
        margin: '0 auto',
        backgroundImage: `url(${wave_bg})`,
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
      {items.map((item, index) => (
        <img
          key={item.id}
          src={item.img}
          alt={item.type}
          style={{
            width: `${itemSize}px`,
            height: `${itemSize}px`,
            position: 'absolute',
            top: item.position.top,
            left: item.position.left,
            border: selectedItems.includes(item.id)
              ? '2px solid green'
              : 'none',
            cursor: 'pointer',
            animation: `float 2s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`
          }}
          onClick={() => toggleItemSelection(item.id)}
        />
      ))}
      <button
        className='game-check'
        style={{ display: 'none' }}
        onClick={verifySelection}
      >
        Vérifier
      </button>
    </div>
  )
}
