import React from 'react'
import './DestinationStyles.css'
import DestinationData from './DestinationData'

import Mountain from '../assets/1.jpg'
import Mountain1 from '../assets/2.jpg'
import Mountain2 from '../assets/6.jpg'
import Mountain3 from '../assets/5.jpg'

function Destination() {
  return (
    <div className='destination'>
        <h1>
            Popular Destination
        </h1>
        <p>
            Tours give you the opprtunity to see a lot, within a time frame.
        </p>
        <DestinationData
            className='first-des' 
            head='Taal Volcano, Batangas'
            text="One of the most iconic views in Luzon, Mt. Taal boasts a
            volcano inside a lake inside an island. If you fancy a closer
            look, the hike up to the crater is a mere 45 minutes, and is
            easy enough for beginners. Guides will assist you most of
            the way, and you'll see the peculiar environment found on
            an active volcano, including volcanic rocks and steam
            vents. The hike can be dusty and hot, so plan for an early
            morning trip, and then unwind with some bulalo before
            heading back home!"
            img1={Mountain}
            img2={Mountain1}
        />  

        <DestinationData 
            className='first-des-reverse'
            head='Mt. Daguldul, Batangas'
            text="If you're looking for a hike that's a little more challenging
            but still good for a beginner mountaineer, check out Mt.
            Daguldul in San Juan, Batangas. You'll start your hike from
            the beach and pass through tropical forest, different rock
            formations, and small streams. There's a small store
            halfway up the trail where you can take a break and drink
            buko juice, and though the summit itself may not have the
            best view, the breeze is fantastic. Once you've made it
            back down, head straight to the beach for a refreshing.
            well-deserved swim."
            img1={Mountain2}
            img2={Mountain3}
        />  
    </div>
  )
}

export default Destination