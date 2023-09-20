import React from 'react'
import './TripStyles.css'
import TripData from '../componentes/TripData';
import Trip1 from '../assets/5.jpg'
import Trip2 from '../assets/20.jpg'
import Trip3 from '../assets/3.jpg'
import Trip4 from '../assets/21.jpg'


function Trip() {
  return (
    <div className='trip'>
        <h1>React Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className='tripcard'>
            <TripData 
                head="Trip in Indonesia"
                tripImage={Trip1}
                text="Indonesia,officially the Republic of Indonesia,is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. "
            />

            <TripData 
                head="Trip in india"
                tripImage={Trip2}
                text="India, officially the Republic of India is a country in South Asia. It is the seventh-largest country by area and the second-most populous country.Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast."
            />

            <TripData 
                head="Trip in France"
                tripImage={Trip3}
                text="France officially the French Republic (French: République française is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Ocean."
            />

            <TripData 
                head="Trip in North America"
                tripImage={Trip4}
                text="North America, the third-largest continent, extends from the tiny Aleutian Islands in the northwest to the Isthmus of Panama in the south. The continent includes the enormous island of Greenland in the northeast and the small island countries and territories."
            />
        </div>
    </div>
  )
}

export default Trip;