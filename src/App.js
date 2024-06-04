import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/Homepage";
import Services from "./components/services/Services";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Services />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
