import React from 'react'
import Marquee from './Marquee'

const Animatino = () => {
    const images = [
        [
          'https://moonpayx.com/static/media/exchange1.b53593af8303d4c8f045.png',
          'https://moonpayx.com/static/media/exchange2.9fe6184b928d8d728cff.png',
          'https://moonpayx.com/static/media/exchange3.3031a09700d52b24da6f.png',
          'https://moonpayx.com/static/media/exchange4.91718e89be05b7a2b32a.png',
          'https://moonpayx.com/static/media/exchange5.d1c87f4285d6e968ee3d.png',
          'https://moonpayx.com/static/media/exchange6.f0476e2632c2e62c8936.png',
          'https://moonpayx.com/static/media/exchange7.5911d45ae4cb0ca35500.png',
          'https://moonpayx.com/static/media/exchange8.55490867b4c0120251fa.png',
          'https://moonpayx.com/static/media/exchange9.edb54873df297db452a0.png',
          'https://moonpayx.com/static/media/exchange10.6b021006549c722127c3.png',
          'https://moonpayx.com/static/media/exchange11.417f7d0fc7b7427eee16.png',
          'https://moonpayx.com/static/media/exchange12.7ae707c48b6d3821407d.png',
          'https://moonpayx.com/static/media/exchange1.b53593af8303d4c8f045.png',
          'https://moonpayx.com/static/media/exchange2.9fe6184b928d8d728cff.png',
          'https://moonpayx.com/static/media/exchange3.3031a09700d52b24da6f.png',
          'https://moonpayx.com/static/media/exchange4.91718e89be05b7a2b32a.png',
          'https://moonpayx.com/static/media/exchange5.d1c87f4285d6e968ee3d.png',
          'https://moonpayx.com/static/media/exchange6.f0476e2632c2e62c8936.png',
          'https://moonpayx.com/static/media/exchange7.5911d45ae4cb0ca35500.png',
          'https://moonpayx.com/static/media/exchange8.55490867b4c0120251fa.png',
          'https://moonpayx.com/static/media/exchange9.edb54873df297db452a0.png',
          'https://moonpayx.com/static/media/exchange10.6b021006549c722127c3.png',
          'https://moonpayx.com/static/media/exchange11.417f7d0fc7b7427eee16.png',
          'https://moonpayx.com/static/media/exchange12.7ae707c48b6d3821407d.png',
        ],
       
       
    ]
  return (
    <div className=' w-full  overflow-hidden '>
     {images.map((item, index) => <Marquee key={index} images={item}  />)}
    </div>
  )
}

export default Animatino