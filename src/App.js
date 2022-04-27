import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import AddActivity from "./components/AddActivity/AddActivity";
import VolunteerRegister from "./components/VolunteerRegister/VolunteerRegister";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Donation from "./components/Donation/Donation";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/addActivities"
                    element={<AddActivity></AddActivity>}
                ></Route>
                <Route
                    path="/volunteerRegister"
                    element={
                        <RequireAuth>
                            <VolunteerRegister></VolunteerRegister>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/donation"
                    element={
                        <RequireAuth>
                            <Donation></Donation>
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
