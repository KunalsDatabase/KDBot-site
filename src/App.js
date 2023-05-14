import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import  React from 'react'
import {createBrowserRouter,RouterProvider,redirect} from "react-router-dom"
import LayOut from './Components/LayOut'
import Premium from './routes/Premium'
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children: [{
        index:true,
        loader: async () => {
          return redirect("/statistics")
        },
        element: <div>Stats!</div>,
      },
      {
        path: "statistics",
        element: <div>Hello world!</div>,
      },
      {
        path: "premium",
        element: <Premium/>,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>
    </div>
  )
}

export default App