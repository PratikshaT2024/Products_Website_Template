import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Products from "./assets/Pages/Products"
function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<Products />} />
    
    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App