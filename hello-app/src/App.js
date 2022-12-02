import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import Cat from './components/Cat';
import CatPost from './components/CatPost';
import cats from './data/Cats';


function App() {
    const catElements = cats.map((Cats, index) => {
        return <Cat key={index} Cats={Cats} />
    })
    return ( //!SECTION ผลลัพที่จะได้ในหน้านี่ เป็น code HTML
        <div className="App">
            <AppHeader />
            <div className='app-grid'>
                {catElements}
            </div>
        </div>
    );
}

export default App;
