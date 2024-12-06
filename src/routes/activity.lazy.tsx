import { useState } from 'react'
import acidImg from '@assets/acide-chlorydrique.webp'
import ancreImg from '@assets/ancre.webp'
import bodyImg from '@assets/body.webp'
import dechetsImg from '@assets/dechets.webp'
import gazImg from '@assets/gaz.webp'
import thermometerImg from '@assets/thermometer.webp'
import { createLazyFileRoute, Link } from '@tanstack/react-router'

import CapchatComponent from '@components/CapchatComponent'

export const Route = createLazyFileRoute('/activity')({
  component: RouteComponent
})

function RouteComponent() {
  const [dechet, setDechet] = useState(true)
  const [gaz, setGaz] = useState(true)
  const [temperature, setTemperature] = useState(true)
  const [acid, setAcid] = useState(true)
  const [displayCaptcha, setDisplayCaptcha] = useState(true)

  const relations = [
    'Régulateur climatique : L’océan est décrit comme un « thermostat » de la planète, jouant un rôle clé dans la régulation du climat global en absorbant la chaleur et le dioxyde de carbone (CO₂). Cela peut être comparé au système cardiovasculaire humain, qui maintient la température corporelle stable en transportant le sang et en redistribuant la chaleur à travers le corps',
    'Réseau de transport : La circulation océanique, qui déplace les nutriments, l’oxygène et le carbone, rappelle le rôle du système circulatoire humain. Ce système permet à l’océan, comme au corps, de maintenir un équilibre et d’assurer le bon fonctionnement des écosystèmes, tout comme la circulation sanguine alimente les organes du corps humain',
    'Cycle du carbone : L’océan, grâce à ses écosystèmes comme les mangroves et les herbiers marins, agit comme un « poumon » en absorbant et stockant le carbone. Cette fonction peut être comparée au système respiratoire humain, qui capte et expulse les gaz pour maintenir l’équilibre chimique du corps',
    'Équilibre chimique et énergétique:  Lorsque l’océan subit des pressions, telles que le réchauffement climatique ou l’acidification, cela affecte sa capacité à remplir ses fonctions vitales. Cela reflète comment le stress ou la maladie dans le corps humain peut entraîner des perturbations systémiques, comme des troubles métaboliques ou respiratoires '
  ]

  const impacts = [
    "Changement climatique : Les émissions massives de gaz à effet de serre, principalement issues de la combustion des énergies fossiles, augmentent la température de l'océan. Cela entraîne des vagues de chaleur marines qui perturbent les écosystèmes et modifient les courants océaniques, limitant leur capacité à réguler le climat",
    'Perturbation des courants océaniques : La fonte des glaces polaires, causée par le réchauffement climatique, affecte les courants tels que la circulation méridienne de retournement (CMR). Cela peut ralentir ou modifier le transport de chaleur à travers le globe, accentuant les déséquilibres climatiques',
    "Pollution marine : Le rejet de substances toxiques, de métaux lourds, et de déchets plastiques perturbe les cycles biologiques et chimiques qui soutiennent la circulation des nutriments essentiels. Les zones mortes, pauvres en oxygène (hypoxie), sont en expansion, causées par les apports excessifs de nutriments provenant de l'agriculture (eutrophisation)",
    "Surpêche : L'exploitation excessive des stocks halieutiques modifie les chaînes trophiques, ce qui déséquilibre les écosystèmes et réduit leur résilience face aux pressions environnementales",
    'Acidification de l’océan : L’absorption d’une grande partie du CO₂ émis par les activités humaines modifie la chimie des eaux marines, réduisant le pH (augmentation de l’acidité). Cela impacte les organismes calcaires (coraux, coquillages), qui jouent un rôle clé dans la pompe biologique et le stockage de carbone',
    "Dégradation des écosystèmes côtiers : La destruction des mangroves, herbiers marins, et récifs coralliens, causée par l’urbanisation et le développement côtier, réduit considérablement les capacités de stockage de carbone de ces écosystèmes, bien qu’ils soient jusqu'à dix fois plus efficaces que les forêts terrestres pour capturer le carbone",
    'Réchauffement des eaux : Les températures plus élevées favorisent des maladies marines, les invasions d’espèces exotiques, et les phénomènes de blanchissement des coraux. Cela affaiblit la biodiversité et limite la productivité biologique essentielle pour la pêche et les services écosystémiques',
    'Pollution plastique : Les microplastiques perturbent la faune marine à tous les niveaux, affectant les poissons, oiseaux, et mammifères marins, ainsi que les processus biologiques comme la filtration et le transport de carbone'
  ]

  const [index, setIndex] = useState(-1)

  return (
    <>
      {' '}
      {displayCaptcha && (
        <CapchatComponent onFinish={() => setDisplayCaptcha(false)} />
      )}
      <div className='flex w-full h-screen overflow-hidden'>
        <Link
          className='absolute right-0 top-0 m-10 border-[3px] p-1 border-green-500'
          to='/'
        >
          Accueil
        </Link>
        <div className='flex flex-col w-2/3 relative'>
          <p className='text-center text-2xl mt-5 font-bold mx-20'>
            Résolvez les problèmes qui se trouvent dans l'océan en cliquant sur
            les objets qui les représentent pour retablir la santer de l'humain
            et celle de l'océan :)
          </p>
          {index >= 0 && (
            <div className='flex justify-center gap-4 mt-10 p-10 absolute top-10'>
              <div>
                <h2 className='font-bold'>
                  Relation entre l'océan et l'humain :{' '}
                </h2>
                <p>{relations[index]}</p>
              </div>
              <div>
                <h2 className='font-bold'>Impact de l'humain :</h2>
                <p>{impacts[index * 2]}</p>
                <p>{impacts[index * 2 + 1]}</p>
              </div>
            </div>
          )}
          {index === relations.length - 1 && (
            <p className='text-center text-green-500 text-xl py-3'>
              {' '}
              Bien joué ! Vous en savez maintenant plus sur les océans et ses
              relations avec l'humain{' '}
            </p>
          )}
          <div className='relative h-screen overflow-hidden'>
            {dechet && (
              <img
                onClick={() => {
                  setDechet(false)
                  setIndex(index + 1)
                }}
                className='absolute w-40 bottom-[350px] right-[400px] z-10 '
                src={dechetsImg}
                alt='dechets plastiques'
              />
            )}
            {dechet && (
              <img
                onClick={() => {
                  setDechet(false)
                  setIndex(index + 1)
                }}
                className='absolute w-40 bottom-[0px] left-[400px] z-10 '
                src={ancreImg}
                alt='ancre'
              />
            )}
            {temperature && (
              <img
                onClick={() => {
                  setTemperature(false)
                  setIndex(index + 1)
                }}
                className='absolute w-40 bottom-[100px] left-[50px] z-10 '
                src={thermometerImg}
                alt='thermometre'
              />
            )}
            {acid && (
              <img
                onClick={() => {
                  setAcid(false)
                  setIndex(index + 1)
                }}
                className='absolute w-28 bottom-[400px] right-[40px] z-10 '
                src={acidImg}
                alt='acid'
              />
            )}
            {gaz && (
              <img
                onClick={() => {
                  setGaz(false)
                  setIndex(index + 1)
                }}
                className='absolute w-[300px] top-[200px] left-[100px] z-10 '
                src={gazImg}
                alt='gaz à effet de serre'
              />
            )}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 320'
              className='absolute top-[50%] left-0 w-full -translate-y-1/2'
            >
              <path
                d='M0,64L40,90.7C80,117,160,171,240,170.7C320,171,400,117,480,96C560,75,640,85,720,101.3C800,117,880,139,960,138.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
                fill='#347dad'
              />
            </svg>

            <div className='absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t to-[#347dad] from-[#294a5f]'></div>
          </div>
        </div>
        <div className='relative flex'>
          {gaz && (
            <div
              id='cardiovasculaire'
              className='w-[20px] h-[20px] bg-red-600 absolute top-[280px] right-[240px] shadow-[0_0_20px_10px_rgba(255,255,255,0.8)]'
            ></div>
          )}
          {dechet && (
            <div
              id='systeme circulatoire'
              className='w-[20px] h-[20px] bg-red-600 absolute bottom-[370px] right-[210px] shadow-[0_0_20px_10px_rgba(255,255,255,0.8)]'
            ></div>
          )}
          {acid && (
            <div
              id='poumon'
              className='w-[20px] h-[20px] bg-red-600 absolute top-[230px] left-[200px] shadow-[0_0_20px_10px_rgba(255,255,255,0.8)]'
            ></div>
          )}
          {temperature && (
            <div
              id='regulation chimique'
              className='w-[20px] h-[20px] bg-red-600 absolute top-[100px] left-[240px] shadow-[0_0_20px_10px_rgba(255,255,255,0.8)]'
            ></div>
          )}
          <img className='w-[500px]' src={bodyImg} alt='Corp humain'></img>
        </div>
      </div>
    </>
  )
}
