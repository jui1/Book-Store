import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App"
 import Home from "../Home/Home";
  import Shop from "../../Shop/Shop";
  import About from "../components/About"
  import Blog from "../components/Blog"
  import SingleBook from "../shop/SingleBook"
import Dashboard from "../Dashbord/Dashboard";
import Dash from "../Dashbord/Dash";
import UploadBooks from "../Dashbord/UploadBooks";
import  AnageBooks from "../Dashbord/anageBooks";
import EditBook from "../Dashbord/EditBook";
import Signup from "../components/Signup"
import Login from "../components/Login"
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout"



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children :
      [{
        path:'/',
        element: <Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },{

        path:'/about',
        element:<About/>
      },{
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/books/:id',
        element:<SingleBook/>,
        loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path: "/admin/dashboard",
        element: <PrivateRoute/>,
        children :[
          {
            path :"/admin/dashboard",
            element:<Dash/>,
          },
          {
            path :"/admin/dashboard/upload",
            element:<UploadBooks/>,
          },
          {
            path :"/admin/dashboard/manage",
            element:< AnageBooks/>,
          },{
            path :"/admin/dashboard/manage",
            element:< AnageBooks/>,
          },
          {
            path :"/admin/dashboard/edit-book/:id",
            element:< EditBook/>,
            loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
          }
        ]
      },
      {
        path: "/sign-up", // Corrected path
        element: <Signup />,
      },
      {
        path: "/login", // Corrected path
        element: <Login />,
      }, {
        path: "/logout", // Corrected path
        element: <Logout />,
      },
       
      ]
      },
  
  ]);

  export default router;