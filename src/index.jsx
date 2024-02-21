import { createRoot } from 'react-dom/client';
import './global.css';
import { City } from './city/City';
import {cities} from './cz-cities';


const App = () => (
  <>
    <h1>Seznam měst</h1>
    <div className='item'>
      {cities.map((city) => 
        <City
          key={city.name} 
          cityName={city.name}
          population={city.population}
          area={city.area}
          district={city.district}
          photo={city.photo}

        />
      )}

    </div>
  </>
)

createRoot(document.querySelector('#app')).render(<App />);