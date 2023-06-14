import './Course.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';


const Course = (props) => {
  const { course, isBought } = props
  // console.log("Course props: ", course)

  return (

    <div className='course-container col-lg-4 col-sm-6'>

      <Card >
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <section className="card-decorate">
          <h3 className="card-title">{course.title}</h3>
        </section>
        <Card.Body>
          <div className="card-content">
            {/* <Card.Title>HTLM CSS pro</Card.Title> */}
            <Card.Text>
              {course.price}
            </Card.Text>
          </div>
          {isBought === false ? <>
            <Button variant="info">Xem chi tiết</Button>
            <Button variant="warning">Mua</Button>
          </> :
            <Button variant="success">Học</Button>
          }

        </Card.Body>
      </Card>





    </div>
  )
}

export default Course;
