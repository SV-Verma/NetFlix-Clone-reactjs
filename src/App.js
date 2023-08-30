import './App.css';
import Footer from './Footer';
import Footer1 from './Footer1';
import Header from './Header';
import KidsRow from './KidsRow';
import OfflineRow from './OfflineRow';
import OnlineRow from './OnlineRow';
import TVRow from './TVRow';

function App() {
  return (
    <>
    <div className="App">
     <Header />
    </div>
    <TVRow />
    <OfflineRow />
    <OnlineRow />
    <KidsRow />
    <Footer />
    <Footer1 />
    </>
  );
}

export default App;
