import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<IndexPage />} path={"/"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
