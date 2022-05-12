import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from '../App'
import VideoCard from '../components/VideoCard'
import VideoForm from '../components/VideoForm'
import Videos from '../components/Videos'

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/videos/:id' element={<VideoCard />} />
          <Route path='/new' element={<VideoForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes