import './App.css';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Principal from './components/Shared/Principal';
import Goal from './components/list/Goal';

function App() {
  return (
    <div className="App">
      <Header />
      <Principal>
        <Goal />
      </Principal>
      <Footer />
    </div>
  );
}

export default App;
