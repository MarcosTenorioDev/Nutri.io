import './assets/css/App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/routes.jsx'
import { DataContextProvider } from './context/dataContext'

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <AppRoutes />
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
