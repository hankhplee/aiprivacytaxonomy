
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
 
const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
 
export default App;

