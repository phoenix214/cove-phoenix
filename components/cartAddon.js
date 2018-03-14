import { Row, Col } from 'reactstrap';
import styles from './cartAddon.scss';

const CartAddon = (props) => {
  const thumbSrc = props.thumbSrc ? props.thumbSrc : "/static/images/placeholderThumbSquare.png";
  const { product } = props;
  const quantity = props.quantity || 0;
  return (
    <div className="cartAddons">
      <Row>
        <Col xs={3} className="no-gutters noPadding">
          <div className="noPadding">
            <img src={thumbSrc} />
          </div>
        </Col>
        <Col xs={7}>
          <div  className="controlCol">
            <Row>
              <Col className="productLabel" xs={12}>
                {product.name} <span className="price">${product.price}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <ul className="list-inline">
                  <li className="list-inline-item quantity">{quantity}</li>
                  <li
                    className="list-inline-item"
                    onClick={() => props.changeQuantity(product.id, quantity, quantity + 1)}
                    >
                    <img src="/static/images/plusIcon.svg" height="24px" alt="add icon" />
                  </li>
                  <li
                    className={`list-inline-item ${quantity === 0 ? "disabled": '' }`}
                    onClick={() => props.changeQuantity(product.id, quantity, quantity - 1)}

                  >
                    <img src="/static/images/minusIcon.svg"  height="24px" alt="minus icon" />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={2} className="noPaddingLeft">
          <div  className="detailsCol" onClick={() => props.detailAction(product.id)}>
            Details
          </div>
        </Col>
      </Row>
      <style jsx>{styles}</style>
    </div>
  )
}

export default CartAddon