import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClubAdmin from "./pages/ClubAdmin";
import ClubMember from "./pages/ClubMember";
import './Styles.scss'
import ImageUploadForm from "./components/Image";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/member/:srn", // Dynamic route for member
    element: <ClubMember />,
  },
  {
    path: "/admin/:clubname", // Dynamic route for admin (club)
    element: <ClubAdmin />,
  },
  {
    path: "/upload", // Dynamic route for admin (club)
    element: <ImageUploadForm />,
  },

]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
