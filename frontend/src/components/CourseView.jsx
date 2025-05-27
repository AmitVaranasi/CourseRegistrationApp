import {useEffect,useState} from 'react'
import {Container, Row,Col,Button,Form,InputGroup} from 'react-bootstrap'
import axios from 'axios'
import { useSearchParams,useNavigate } from 'react-router-dom'

const CourseView = () => {
  const [courses,setCourses] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  
  
  useEffect(()=>{
    axios.get('/api/students/getAllCourses')
    .then((response)=>{
      console.log(response)
      setCourses(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const handleClick = async(event)=>{
    const data = {
        student_id:searchParams.get("id"),
        course_id: event.currentTarget.value
    }
    await axios.post('/api/students/addRegistration',data).then((response)=>{
      console.log(response)
      navigate(`/registered?${data.student_id}`)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <Container>
          <h1>register to Courses</h1>
        {
          courses.map((course)=>{return (
            <Row>
            <Col key={course.id}>{course.title}</Col>
            <Button value={course.id} onClick={handleClick}>Register</Button>
            </Row>)
          })
        }

    </Container>
  )
}

export default CourseView