import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Input from '../components/input';
import Radio from '../components/radio';
import Header from '../components/header';
import Layout from '../components/minimalLayout';
import gs from '../components/styles.scss';
import s from './phonenumber.scss';

class PhoneNumberPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
    }
  }
  render() {
    return (
      <Layout>
        <Container>
          <Header color="secondary" />
          <div className={gs.raisedContainer}>
            <Row className={gs.pageHeaderRow}>
              <Col>
                <h1 className={gs.pageHeader}>Change Phone Number</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div style={{ position: 'relative' }}>
                  <Row className={gs.leftHighlight}>
                    <Col xs="auto" className={gs.text}>
                      Current Phone:
                    </Col>
                    <Col>
                      (801) 123-1234
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} className={s.rightCol}>
                <Row className={gs.spacerTop}>
                  <Col>
                    <Input label="New Phone Number" />
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col>
                    <Input label="Password" type="password" />
                  </Col>
                </Row>
                <Row className={gs.spacerTop}>
                  <Col className={gs.text}>
                    <p className={gs.primaryLink}>Forgot Password?</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ offset: 4, size: 2 }} className={s.cancelLink}>
                    <div className={gs.mutedLink}> Cancel</div>
                  </Col>
                  <Col xs={6}>
                    <div className={gs.actionBtn} style={{ maxWidth: '350px' }}>
                      Update Phone Number
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}


const mapStateToProps = ({ cart, products }) => ({ cart, products});

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(PhoneNumberPage);
