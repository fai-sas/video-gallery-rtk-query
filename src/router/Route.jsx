/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../components/pages/Home'
import Add from '../components/pages/Add'
import Edit from '../components/pages/Edit'
import Video from '../components/pages/Video'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'videos/:videoId',
        element: <Video />,
      },
      {
        path: 'videos/add',
        element: <Add />,
      },
      {
        path: '/videos/edit/:videoId',
        element: <Edit />,
      },
    ],
  },
])

export default Route
