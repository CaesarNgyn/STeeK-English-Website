import './Course.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';


const Course = () => {


  return (

    <div className='course-container'>

      <Card >
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <section className="card-decorate">
          <h3 className="card-title">Toeic 250</h3>
          <p className="card-des">Cho người mới bắt đầu</p>
        </section>
        <Card.Body>
          <div className="card-content">
            {/* <Card.Title>HTLM CSS pro</Card.Title> */}
            <Card.Text>
              999.000đ
            </Card.Text>
          </div>
          <Button variant="info">Xem chi tiết</Button>
          <Button variant="warning">Mua</Button>
        </Card.Body>
      </Card>





    </div>
  )
}

export default Course;
