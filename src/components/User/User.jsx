import './User.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const User = () => {
  return (
    //Phần khóa học của User code tại đây
    <div className='user-container'>

      <Card >
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <section className="card-decorate">
          <h3 className="card--title">Toeic 250</h3>
          <p className="card--des">Cho người mới bắt đầu</p>
        </section>
        <Card.Body>
          <div className="card-content">
            <Card.Title>HTLM CSS pro</Card.Title>
            <Card.Text>
              100$
            </Card.Text>
          </div>
          <Button variant="info">Mua</Button>{' '}
        </Card.Body>
      </Card>





    </div>
  )
}

export default User;
