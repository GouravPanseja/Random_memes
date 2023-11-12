import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App w-full min-h-screen h-max flex flex-col background  items-center">
       <h1 className='bg-white rounded-lg  w-11/12 text-center mt-[40px] py-3 text-3xl font-bold  '>RANDOM GIFs</h1>

       <div className='w-full flex flex-col  items-center'>
          <Random/>
          <Tag/>
       </div>

    </div>
  );
}

export default App;
