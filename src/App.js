import Profil from './profile/Profil';
import abel from './profile/Abel.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profil fullName="Konan Koaukou Abel" bio="Yvapo" profession="Développeur fullstack react js" handleName={handleName}>
        <img style={{border:"6px solid purple", borderRadius:"50%",objectFit:"cover", marginTop:"2rem"}} src={abel} alt=""/>
      </Profil>
    </div>
  );
  
}
function handleName(){
  return (alert("KONAN KOUAKOU ABEL"))
}
export default App;
