import './App.css';
import { SRLWrapper } from "simple-react-lightbox";

const images = [
  { id: '1', imageName: '001.jpg'},
  { id: '2', imageName: '002.jpg'},
  { id: '3', imageName: '003.jpg'},
  { id: '4', imageName: '004.jpg'},
  { id: '5', imageName: '005.jpg'},
  { id: '6', imageName: '006.jpg'},
  { id: '7', imageName: '007.jpg'},
  { id: '8', imageName: '008.jpg'},
  { id: '9', imageName: '009.jpg'},
  { id: '10', imageName: '010.jpg'}
]

function App() {
  return (
    <div className="App">
      <SRLWrapper>
        <div className='container'>
          { images.map(image => 
          <div key={image.id} className="image-card">
            <a href={`./images/${image.imageName}`}>
              <img className='image' src={`./images/${image.imageName}`} alt="" />
            </a>
            </div>)}
        </div>
      </SRLWrapper>
    </div>
  );
}

export default App;
