import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Desk from './Desk'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import '../index.css'
import Isolation from './Isolation'
import NewDesk from './NewDesk'
import Lowpoly from './Lowpoly'
export default function ModelThree () {

  return (
    <div>
      <Canvas className='canvas'>
        <PerspectiveCamera zoom={1500}/>
        <OrbitControls autoRotateSpeed={3.0} autoRotate={true} enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Suspense fallback={null}>
       <Lowpoly/>
        </Suspense>
      </Canvas>
    </div>
  )
  

  
}

