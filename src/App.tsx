import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import  React from 'react'
import {createBrowserRouter,RouterProvider,redirect} from "react-router-dom"
import LayOut from './Components/LayOut'
import {Suspense} from 'react'
import {AuthProvider} from './Contexts/AuthContext'
const Premium = React.lazy(() => import('./routes/Premium'))
const Statistics = React.lazy(() => import('./routes/Statistics'))
const Dashboard = React.lazy(() => import('./routes/Dashboard'))
const StatisticsLazy = <Suspense fallback={<div>Loading...</div>}><Statistics/></Suspense>
const router = createBrowserRouter([
  {
    path: "/kdbot",
    element: <LayOut/>,
    children: [{
        index:true,
        loader: async () => {
          return redirect("/kdbot/statistics")
        },
        element: StatisticsLazy,
      },
      {
        path: "statistics",
        element: StatisticsLazy,
      },
      {
        path: "premium",
        element:
        <Suspense fallback={<div>Loading...</div>}>
          <Premium/>
        </Suspense>,
      },
      {
        path: "dashboard",
        element:
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard/>
        </Suspense>,
      },
      {
        path: "*",
        element: StatisticsLazy,
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  )
}

export default App