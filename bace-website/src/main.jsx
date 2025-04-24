import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';

const br = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'About',
                element: <About />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={br} />
)
