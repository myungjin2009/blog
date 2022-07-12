import './App.css';
import HorizonLine from './components/horizonLine';
import HeaderMenu from './components/headerMenu/headerMenu';


function App() {
  return (
    <div>
      <div className="header">
        <HorizonLine text="내생각 블로그" backColor = "cyan" />
        <HeaderMenu></HeaderMenu>
      </div>
      <div className="main">
        main!!
      </div>
    </div>
  );
}

export default App;
