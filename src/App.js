import { ThemeProvider } from "@mui/material";
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from "./components/AboutPage";
import FopPage from "./components/FopPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CompaniesPage from "./components/CompaniesPage";
import theme from "./styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='companies' element={<CompaniesPage />} />
            <Route path='fop' element={<FopPage />} />
            <Route path='about' element={<AboutPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
