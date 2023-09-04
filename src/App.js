import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Container from "./components/Container";

function App() {
  return (
      <div className="wrapper">
          <Header />
          <main className="main">
              <Nav />
              <Container />
          </main>
          <Footer />
      </div>
  );
}

export default App;
