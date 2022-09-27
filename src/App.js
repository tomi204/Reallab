import './App.css';
import SlideCard from './components/Slider';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src='./img/Logo.png'   className='logoI'/>
     <li className='navbar'>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">What We Offer</a>
      <a href="contact.html">Projects</a>
      <a href="contact.html">FAQ'S</a>
</li>
      </header>

      <main>

        <img src="./Img/Logo-Reallab.png" className='img-principal'/>
        <h2 className='h2-img'>Blockchain technology is used to give veracity and value to your proposal.</h2>
        <SlideCard />
        </main>
        <div className='collabs'>
          <h1>Collabs</h1>
         <div className='container-p'>
          <img src='./img/MLA.png' className='project-img'/>
          <h2 className='titulo-p'>My Lucky Ass</h2>
          <h4 className='desc-p'>Welcome, the world unknown of Mrs. Ass is waiting for you, 2.222 tokens shows the life and differents facets of this amazing character, he lives in the polygon blockchain, an Ethereum protocol, scroll down and enjoy the art and our purpose.</h4>
        <a className='button-p' >Opensea</a>
         </div>
        </div>
      

      <footer>

      </footer>
    </div>
  );
}

export default App;
