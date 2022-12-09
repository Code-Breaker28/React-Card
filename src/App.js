import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
 


function App() {
  return (
    <div className='main'>
      <h4>First React / Bootstrap Cards</h4>
    <div className='cards'>
    <Card id='card1'>
      <Card.Img id='pic1' Variant='top' src="./f1.jpg" />
      <Card.Body className='cardpro'>
        <Card.Title id='head1'>Product Name</Card.Title>
        <Card.Text id='para1'>
          Describe your Product in a Profcient way.
        </Card.Text>
        <Card.Text id='para1'>
          <strong>Price</strong>
        </Card.Text>
        <Button Variant='primary' id='normal' type='submit'>Add To Cart</Button>
      </Card.Body>
    </Card>
    <Card id='card1'>
      <Card.Img id='pic1' Variant='top' src="./f1.jpg" />
      <Card.Body className='cardpro'>
        <Card.Title id='head1'>Product Name</Card.Title>
        <Card.Text id='para1'>
          Describe your Product in a Profcient way.
        </Card.Text>
        <Card.Text id='para1'>
          <strong>Price</strong>
        </Card.Text>
        <Button Variant='primary' id='normal'>Add To Cart</Button>
      </Card.Body>
    </Card>
    <Card id='card1'>
      <Card.Img id='pic1' Variant='top' src="./f1.jpg" />
      <Card.Body className='cardpro'>
        <Card.Title id='head1'>Product Name</Card.Title>
        <Card.Text id='para1'>
          Describe your Product in a Profcient way.
        </Card.Text>
        <Card.Text id='para1'>
          <strong>Price</strong>
        </Card.Text>
        <Button Variant='primary' id='normal'>Add To Cart</Button>
      </Card.Body>
    </Card>
    <Card id='card1'>
      <Card.Img id='pic1' Variant='top' src="./f1.jpg" />
      <Card.Body className='cardpro'>
        <Card.Title id='head1'>Product Name</Card.Title>
        <Card.Text id='para1'>
          Describe your Product in a Profcient way.
        </Card.Text>
        <Card.Text id='para1'>
          <strong>Price</strong>
        </Card.Text>
        <Button Variant='primary' id='normal'>Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
    </div>

    

  );
}

export default App;
