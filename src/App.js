import './App.css';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Principal from './components/Shared/Principal';
import List from './components/list/List';
import Details from "./components/new/Details";

function App() {
  return (
    <div className="App">
      <Header />
      <Principal>
          {/* <List /> */}
          <Details />
      </Principal>
      <Footer />
    </div>
  );
}

export default App;
