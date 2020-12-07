import './App.css';
import React,{useState} from 'react';
import Header from './components/headercompo';
import Navbarcompo from './components/navbarcompo';
import Homecompo from './components/homecompo';
import Bottomlinks from './components/Pagination';

function App() {
  const [showopen,setshowopen] = useState(false);
  const [showclosed,setshowclosed] = useState(false);
  const [showall,setshowall] = useState(true);



  return (
    <div className="App">
      <Header open={showopen} closed={showclosed} all={showall} changeopen={() => setshowopen(!showopen)} changeclosed={() => setshowclosed(!showclosed)} changeall={() => setshowall(!showall)}/>
      <Navbarcompo />
      <Homecompo open={showopen} closed={showclosed} all={showall} />
      <Bottomlinks />
    </div>
  );
}

export default App;
