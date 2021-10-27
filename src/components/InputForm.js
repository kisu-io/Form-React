import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import React, {useState} from 'react';
import {Card, Form, Button, Container} from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const InputForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const validateEmail = (email) => {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email) ? undefined : alert('This email is not valid!');
    };
    validateEmail(email);
    return alert('Successfully submit your information');
  };

  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    date: new Date(),
    gender: '',
    email: '',
    phone: '',
    about: '',
  });
  const {name, age, date, gender, email, phone, about} = formData;

  const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  console.log(formData);

  return (
    <Card>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter age"
              name="age"
              value={age}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of birth</Form.Label>

            <DatePicker
              className="mb-3"
              selected={startDate}
              name="date"
              value={date}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Gender</Form.Label>
            <Form.Check
              type="radio"
              label="Male"
              id="male"
              name="gender"
              value={'male'}
              onChange={onChange}
            />
            <Form.Check
              type="radio"
              label="Female"
              id="female"
              name="gender"
              value={'female'}
              onChange={onChange}
            />
            <Form.Check
              type="radio"
              label="Other"
              id="other"
              name="gender"
              value={'other'}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter phone number"
              name="phone"
              value={phone}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>About</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell me a little bit about yourself"
              name="about"
              value={about}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Card>
  );
};

export default InputForm;
