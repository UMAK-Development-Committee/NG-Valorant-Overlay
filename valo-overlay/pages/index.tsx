import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const startMatch = () => {
    fetch("https://127.0.0.1:")
  }

  return (
    <>
      <div className='absolute w-full h-full grid place-items-center'>
        <div className='flex flex-col'>
          <span>Attackers Team Name</span>
          <input type={"text"} className="border-2 border-solid border-black" />
        </div>

        <button className='border-2 rounded p-3 border-black'> START BATTLE </button>

        <div className='flex flex-col'>
          <span>Defenders Team Name</span>
          <input type={"text"} className="border-2 border-solid border-black" />
        </div>
      </div>
    </>
  )
}
