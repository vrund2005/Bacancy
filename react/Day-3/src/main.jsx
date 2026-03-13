import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router.jsx';
import { AuthProvider } from './Authentication/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
)