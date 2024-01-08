import './App.css';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Principal from './components/Shared/Principal';
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      <Header />
      <Principal>
        <List />
      </Principal>
      <Footer />
    </div>
  );
}

export default App;
