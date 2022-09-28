import './App.css';
import SlideCard from './components/Slider';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaMailBulk, FaMailchimp, FaTelegram, FaTwitter } from 'react-icons/fa';
import NavL from './components/NavL/NavL';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src='./img/Logo.png'   className='logoI'/>
     <li className='navbar'>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">What We Offer</a>
      <a href="collabs">Projects</a>
      <a href="contact.html">FAQ'S</a>
</li>
     <NavL />
      </header>

      <main>

        <img src="./Img/Logo-Reallab.png" className='img-principal'/>
        <h2 className='h2-img'>Blockchain technology is used to give veracity and value to your proposal.</h2>
        <SlideCard />
        </main>
        <h1 className='collabs-titulo'>Collabs</h1>

        <div className='collabs'>
          
         <div className='container-p'>
          <img src='./img/MCC.png' className='project-img'/>
          <h1 className='titulo-p'>Mini Car Club</h1>
          <h3 className='desc-p'>MCC’s approach is to integrate blockchain technology within the world of customized cars</h3>
        <a className='button-p' href='https://opensea.io/collection/myluckyass' >OpenSea</a>
         </div>
         
        
        

        <div className='container-p1'>
          <img src='./img/MLA.png' className='project-img'/>
          <h1 className='titulo-p'>My Lucky Ass</h1>
          <h3 className='desc-p1'>Welcome, the world unknown of Mrs. Ass is waiting for you, 2.222 tokens shows the life and differents facets of this amazing character, he lives in the polygon blockchain, an Ethereum protocol, scroll down and enjoy the art and our purpose.</h3>
        <a className='button-p' href='https://opensea.io/collection/myluckyass' >OpenSea</a>
         </div>
         <div className='container-p2'>
          <img src='./img/ITLC.png' className='project-img'/>
          <h1 className='titulo-p'>Isla Tortuga - LazySpanishCrew</h1>
          <h3 className='desc-p2'>Collection made by members of the Lazy Crew and Lazy Spanish. Each Tortuga grants you access to their private island and the chance of winning Lazy Lion #2779</h3>
        <a className='button-p' href='https://opensea.io/collection/tortuga-v2-1l' >OpenSea</a>
         </div>
        </div>
           <h1 className='collabs-titulo'>Contact</h1>
         <div className='form'>
          <form onSubmit className='form-main'>
          <input type="checkbox" id="brand web3" name="brand web3" value="brand web3"className='radio-contact'/>
  <label >Your brand web3</label><br/>
  <input type="checkbox" id="nft" name="nft" value="nft"className='radio-contact'/>
  <label >Blockchain Development</label><br/>
  <input type="checkbox" id="blockchain dev" name="blockchain dev" value="blockchain dev" className='radio-contact'/>
  <label > NFT</label>
  <input type="checkbox" className='radio-contact' name='other' value="other"/>
  <label for="vehicle1">Other</label>
            <div className='business'>
                <input type='text' name="name" placeholder='Your Name*' about='name' className='input-form' required />
                <input type='email' name="email" placeholder='Your Email*' about='email' className='input-form' required/>
                </div>
                <input type='text' name="subject" placeholder='Business Name*' about='subject' className='input-form' required/>
                
                <input type='text' name="subject" placeholder='Message' about='subject' className='input-msg' />
                <button type='submit' className='button-form'>SEND</button>
          </form>
         </div>

      <footer>
        <img />
        <h3>RealLab © 2022</h3>
          <div className='footer-container'>
            <a href='https://twitter.com/Reallab__' >
         <FaTwitter />
         </a>
         <a href='https://www.instagram.com/reallab__/'>
          <FaInstagram />
         </a>
         <a href='https://www.linkedin.com/company/reallab-project/'>
          <FaLinkedin />
         </a>
        
         <a href='https://t.me/+oo2ra2NcP6ZhYTMx'>
          <FaTelegram />
         </a>
          </div>
      </footer>
    </div>
  );
}

export default App;
