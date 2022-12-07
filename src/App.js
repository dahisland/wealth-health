import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import CurrentEmployees from "./pages/currentEmployees/CurrentEmployees";
import CreateEmployee from "./pages/createEmployee/CreateEmployee";
import Error404 from "./pages/error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route
          exact
          path="/create-employee"
          element={<CreateEmployee />}
        ></Route>
        <Route
          exact
          path="/current-employees"
          element={<CurrentEmployees />}
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
