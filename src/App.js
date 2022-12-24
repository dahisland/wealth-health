import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import EmployeesList from "./pages/employeesList/EmployeesList";
import CreateEmployee from "./pages/createEmployee/CreateEmployee";
import Error404 from "./pages/error404/Error404";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route
          exact
          path="/create-employee"
          element={<CreateEmployee />}
        ></Route>
        <Route exact path="/employees-list" element={<EmployeesList />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
