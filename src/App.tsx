import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
   const Button1Foo = (subscriber: string, age: number, address: string) => {
      console.log(subscriber, age, address)
   }

   const Button2Foo = (subscriber: string) => {
      console.log(subscriber)
   }

   const Button3Foo = () => {
      console.log('Stupid BUTTON')
   }

   return (
      <div className="App">
         {/*<button>MyYouTubeChanel-1</button>
         <button>MyYouTubeChanel-2</button>*/}

         <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Cheboksary')}/>
         <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
         <Button name={'Stupid BUTTON'} callBack={Button3Foo} />

      </div>
   );
}

export default App;
