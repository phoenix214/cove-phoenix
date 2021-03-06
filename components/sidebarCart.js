import React, { Component } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import CartAddon from '../components/cartAddon';
import { changeQuantity } from '../redux/checkout/actions';
import styles from './sidebarCart.scss';

class SidebarCart extends Component {
  changeQuantity = (id, oldQuantity, newQuantity) => {
    if (newQuantity < 0) {
      return;
    }
    this.props.changeQuantity(id, oldQuantity, newQuantity);
  }

  render() {
    console.log('checkout ,', this.props.checkout)
    const { detailAction, products } = this.props;
    const { productById } = this.props.checkout;

    return (
      <div className="cartColumn">
        <div className="cartHeader">
          <h4>Cove Protect alarm system started pack</h4>
          <ul>
            <li>1 Cove Protect panel</li>
            <li>2 Cove doors</li>
            <li>1 Cove remote</li>
          </ul>
        </div>
        <div className="cartSubHeader">
          <h4>How many sensors should I add?</h4>
          <p>Don’t worry too much, you can add more sensors later,
            or send the ones you don’t need free of charge.
          </p>
        </div>
        {
          Object.keys(products).map(key =>
            (<CartAddon
              key={key}
              index={key}
              product={productById[products[key].id]}
              detailAction={detailAction}
              changeQuantity={this.changeQuantity}
              showDetails={this.props.showDetails}
            />))
        }
        <div className="packRow">
          <Row>
            <Col xs={{ size: 5, offset: 1 }}>
              <div className="packName">
                1 Cove Protect alarm system started pack
              </div>
            </Col>
            <Col xs={6}>
              <span className="bold">$249 or $4.15/mo</span>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={12}>
            <div className="footerLink">
              Select Payment Plans in next section
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link href="/monitoring-plan">
              <div className="addToCartBtn">
                Add to cart
              </div>
            </Link>
          </Col>
        </Row>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

SidebarCart.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.object,
  detailAction: PropTypes.func,
  changeQuantity: PropTypes.func,
  checkout: PropTypes.object,
  showDetails: PropTypes.bool,
};

SidebarCart.defaultProps = {
  checkout: { productById: {} },
  products: [],
  cart: {},
  detailAction: () => {},
  changeQuantity: () => {},
  showDetails: true
};

const mapStateToProps = ({ checkout }) => ({ checkout });

const mapDispatchToProps = dispatch => ({
  changeQuantity: bindActionCreators(changeQuantity, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCart);
