

import { useState } from 'react';
import './App.css'
import Navigation from './Components/Nav/Navigation';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import PriceOptions from './Components/PriceOptions/PriceOptions';

function App() {

const [menu , setMenu] = useState(false);

const pressMenue =()=>
{
  setMenu(!menu)
}



  const routes = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/contact', name: 'Contact' },
    { id: 3, path: '/about', name: 'About' },
    { id: 4, path: '/email', name: 'Email' }
  ];
  

  return (
    <>
       <div className='bg-yellow-400'>
       {
        menu ? <ImCross onClick={pressMenue} className='text-2xl md:hidden' /> : <TiThMenu onClick={pressMenue} className='text-2xl md:hidden font-bold' /> 
       }
       </div>
      <ul className={`md:flex duration-1000 md:gap-10 ${menu? 'left-0' : '-left-80'} absolute md:static bg-yellow-400 p-5`}>
        {
          routes.map(route => <Navigation key={route.id} route={route}></Navigation>)
        }
      </ul>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
