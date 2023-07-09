import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import  React from 'react'
import {createBrowserRouter,RouterProvider,redirect} from "react-router-dom"
import LayOut from './Components/LayOut'
import Premium from './routes/Premium'
import Statistics from './routes/Statistics'
const router = createBrowserRouter([
  {
    path: "/kdbot",
    element: <LayOut/>,
    children: [{
        index:true,
        loader: async () => {
          return redirect("/kdbot/statistics")
        },
        element: <div>Stats!</div>,
      },
      {
        path: "statistics",
        element: <Statistics/>,
      },
      {
        path: "premium",
        element: <Premium/>,
      },
      {
        path: "*",
        element: <Statistics/>,
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  )
}

export default App