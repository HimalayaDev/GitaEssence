import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import BhaktiShastriPage from './BhaktiShastriPage.jsx';
import SpiritualPilgrimage from './SpiritualPilgrimage.jsx';
import Retreat from './Retreat.jsx';

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
            },
            {
                path: 'BhaktiShastriPage',
                element: <BhaktiShastriPage />
            },
            {
                path: 'SpiritualPilgrimage',
                element: <SpiritualPilgrimage />
            },
            {
                path: 'Retreat',
                element: <Retreat />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={br} />
)
