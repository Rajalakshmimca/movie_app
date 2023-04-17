import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import SimpleBottomNavigation from './Components/BottomNav';
import Header from './Components/Header/Header';
import { Container } from "@mui/system";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TvSeries from "./Pages/TvSeries/TvSeries";
import Search from "./Pages/Search/Search";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" exact element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvSeries" element={<TvSeries />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
