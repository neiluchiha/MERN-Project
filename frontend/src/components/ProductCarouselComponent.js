import {Carousel} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () =>{
    const cursorP = {
        cursor : "pointer"
    }
return (
    <Carousel>
    <Carousel.Item>
      <img
        crossOrigin='anonymous'
        className="d-block w-100"
        style={{height:"300px",objectFit:"cover"}}
        src="../images/carousel/carousel-1.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
        <h3>First slide label</h3>
        </LinkContainer>
        <p>Dell Inspiron I5 3000 Laptop, 15.6 inch HD</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:"300px",objectFit:"cover"}}
        src="../images/carousel/carousel-2.png"
        alt="Second slide"
      />

      <Carousel.Caption>
      <LinkContainer style={cursorP} to="/product-details">
        <h3>Bestseller In BOOK Category</h3>
        </LinkContainer>
        <p>World of Eric Carle, Hear Bear Roar</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:"300px",objectFit:"cover"}} 
        src="../images/carousel/carousel-3.png"
        alt="Third slide"
      />

      <Carousel.Caption>
      <LinkContainer style={cursorP} to="/product-details">
        <h3>Best Seller in Cameras Category</h3>
        </LinkContainer>
        <p>
          4K Camcorder Video Camera 60FPS 48MP
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
}

export default ProductCarouselComponent;