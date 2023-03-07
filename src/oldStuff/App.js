import {useState} from 'react';
import Navbar from './Navbar';
import List from './List';
//import Counter from './Counter';
import Counter from './CounterClass';
import AddItem from './AddItem';

function App() {
   const [guitars, setGuitars] = useState([
      {title:'Strat'},
      {title:'Les Paul'},
      {title:'Explorer'},
   ]);

   function updateGuitars(newGuitar) {
      setGuitars([...guitars, newGuitar]);
   }

   return (
      <>
         <Navbar title="Uncontrolled Inputs" />
         <div className={"container boldYellowText"}>
            {/* <Counter startAt={0} countBy={1}/> */}
            <AddItem
               buttonText="Add Guitar"
               onSubmit={updateGuitars}
            ></AddItem>
            <List
               title="Guitars"
               items={guitars}
               background='secondary'
            />
         </div>
      </>
   );
}

export default App;