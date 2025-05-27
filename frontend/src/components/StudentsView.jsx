import {useState,useEffect} from 'react'
import axios from 'axios'
import {Container, Row,Col,Button,Form,InputGroup} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const StudentsView = () => {

    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailValidator,setEmailValidator] = useState("");
    let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailVerified = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)?true:false
    console.log(emailVerified)
    if (form.checkValidity() === false && name==="" && emailVerified) {
      
      event.stopPropagation();
    }else{
        const data = {
            name:name,
            email:email
        }

        await axios.post('/api/students/addStudent',data)
        .then(async (response)=>{
            console.log(response.data.id)
            await navigate(`/courses?${response.data.id}`)
        })
        .catch((error)=>{
            console.log(error)
        })

    }

   // setValidated(true);
  };

  return (
    <Container className='justify-content center m-3 p-5'>
        <h1>Get Started Please Register </h1>
        <hr />
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue=""
            onChange={(e)=>{setName(e.target.value)}}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="email"
            defaultValue=""
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <Form.Control.Feedback type="invalid">
        Please choose a correct email.
      </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>
      <Button type="submit" onClick={handleSubmit}>Register</Button>
    </Form>
    </Container>
  )
}

export default StudentsView