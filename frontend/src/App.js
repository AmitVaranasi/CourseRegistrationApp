import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import StudentsView from './components/StudentsView'
import CourseView from './components/CourseView'
import CourseRegistration from './components/CourseRegistration'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/students' element={<StudentsView />}/>
        <Route exact path='/courses' element={<CourseView />}/>
        <Route exact path='/registered' element={<CourseRegistration />}/>
      </Routes>
    </Router>
  )
}

export default App