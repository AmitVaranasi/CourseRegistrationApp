import {useEffect,useState} from 'react'
import {Container, Row,Col,Button,Form,InputGroup} from 'react-bootstrap'
import axios from 'axios'
import { useSearchParams,useNavigate } from 'react-router-dom'

const CourseRegistration = () => {
  const [courses,setCourses] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  
  
  useEffect(()=>{
    console.log(searchParams.get("id"))
    axios.get(`/api/students/getRegisteredCourse/${searchParams.get("id")}`)
    .then((response)=>{
      console.log(response)
      setCourses(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  
  return (
    <Container>
          <h1>Registered Courses</h1>
        
        

    </Container>
  )
}

export default CourseRegistration