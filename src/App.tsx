import React from 'react';
import './App.css';

function App() {
  /* const myFirstSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
      console.log("Hellow Im VASYA!")
   }
   const mySecondSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
      console.log("Hellow Im IVAN!")
   }*/

   // const onClickHandler = (name:string) => {
   //    console.log(name)
   // }


   return (
      <div className="App">
         {/*<button onClick={(event) => {console.log("Hello!")}}>MyYouTubeChannel-1</button>*/}
         {/*<button onClick={(event) => onClickHandler('VASYA')}>MyYouTubeChannel - 1</button>*/}
         {/*<button onClick={(event) => onClickHandler('IVAN')}>MyYouTubeChannel - 2</button>*/}
         {/*<button onClick={() => onClickHandler('some info')}>MyYouTubeChannel - 3</button>*/}
      </div>
   );
}

export default App;
