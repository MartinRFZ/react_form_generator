import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DynamicForm } from './components/FormDynamic.jsx'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DynamicForm />} />
      </Routes>
    </BrowserRouter>
  )
}
