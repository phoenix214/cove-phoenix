import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import Layout from '../../components/minimalLayout';
import Header from '../../components/header';
import PriceComparisonTable from '../../components/priceComparisonTable';
import Footer from '../../components/footer/footer';
import WatchVideoLink from '../../components/watchVideoLink/watchVideoLink';
import CustomizedRange from '../../components/estimateSlider';
import RiskFreeSection from '../../components/riskFreeSection/riskFreeSection';
import GreenButton from '../../components/greenButton/greenButton';
import s from './index.scss';

const coverSectionTitle = 'Home security\njust found easy.';
const setupSectionTitle = '1 2 3. simple. Installed. it works.';

const Index = () => (
  <Layout>
    <Container>
      <Header color="secondary" />
    </Container>
    <div className="homeContainer">
      <div className="coverSection">
        <div className="titleRow">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <div className="coverLeftArea">
                <h1>
                  {coverSectionTitle}
                </h1>
                <p>And you just found Cove! Make your space safe.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <div className="testimonialSection">
          <h2>&ldquo;{setupSectionTitle}&rdquo;</h2>
          <p>- Dahlia Johnson</p>
          <div className="products">
            <Row>
              <Col xs={12} sm={12} md={4}>
                <div>
                  <h3>&ldquo;I wish Cove could travel with us.&rdquo;</h3>
                  <p>- Jules Endicott
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div>
                  <h3>&ldquo;Finally, an alarm company watching out for us.&rdquo;</h3>
                  <p>- Nick Ferse
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div>
                  <h3>&ldquo;The way customer service used to be!&rdquo;</h3>
                  <p>- Becker Family
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <Link href="#tell" class="link">Tell your friends about us &raquo;</Link>
        </div>
      </Row>
      <Row>
        <div className="builtProductsSection">
          <h2>You need not worry</h2>
          <ul>
            <Col md={6}>
              <li>Fire</li>
              <li>Flood</li>
              <li>Harmful fumes</li>
              <li>Medical mergency</li>
            </Col>
            <Col md={6}>
              <li>Unwanted Intrusion</li>
              <li>Broken window</li>
              <li>Infrared movement</li>
            </Col>
          </ul>
          <p><sup>*</sup> Custom configured for your fury secondary alarm systems, A.K.A. pet-friendly!</p>
        </div>
      </Row>
      <Row>
        <div className="checkSection">
          <div className="checkRow">
            <Col sm={12} md={6}>
              <div className="leftSide">
                <img src="/static/images/homepage2/checkmark.png" alt="checkmark" />
                <h2>
                  We trust Cove in our own homes.
                </h2>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nomummy nibh euismod tincidunt ut
              </p>
            </Col>
          </div>
          <div className="checkRow">
            <Col sm={12} md={6}>
              <div className="leftSide">
                <img src="/static/images/homepage2/checkmark.png" alt="checkmark" />
                <h2>
                  We trust Cove in our own homes.
                </h2>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nomummy nibh euismod tincidunt ut
              </p>
            </Col>
          </div>
          <div className="checkRow">
            <Col sm={12} md={6}>
              <div className="leftSide">
                <img src="/static/images/homepage2/checkmark.png" alt="checkmark" />
                <h2>
                  We trust Cove in our own homes.
                </h2>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nomummy nibh euismod tincidunt ut
              </p>
            </Col>
          </div>
        </div>
      </Row>
      <Row>
        <div className="paySecuritySection">
          <h2>Security that works. Set it. Leave it.</h2>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className="securityCol">
                <GreenButton title="Cove Basic" />
                <ul>
                  <li>
                    No credit check required
                  </li>
                  <li>
                    Brand new equipment
                  </li>
                  <li>
                    Equipment is yours forever
                  </li>
                </ul>
                <h3>$22 per month</h3>
                <p>($19/mo with membership)</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className="securityCol">
                <GreenButton title="Cove Premium" />
                <ul>
                  <li>
                    No credit check required
                  </li>
                  <li>
                    Brand new equipment
                  </li>
                  <li>
                    Equipment is yours forever
                  </li>
                </ul>
                <h3>$22 per month</h3>
                <p>($27/mo with membership)</p>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row>
        <div className="eleganceSection">
          <Row>
            <Col xs={12} sm={12} md={8} lg={6}>
              <div className="descriptionArea">
                <div className="contentTextArea">
                  <h2>New elegance and beauty. Same incredible protection.</h2>
                  <p>Security systems shouldn&apos;t be made to be an eye sore for your home.
                    We designed every element to be beautiful and seamless to fit perfectly
                    into your home.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row>
        <div className="priceComparisonTableRow">
          <PriceComparisonTable />
        </div>
      </Row>
      <Row>
        <div className="jordanSayingSection d-flex justify-content-center">
          <div className="sayingTextArea">
            <hr />
            <p className="sayingText">&quot;Cove was so much less than competitors and
            still maintains the quality I was used to.&quot;
            </p>
            <p className="authorName">- Jordan H.</p>
            <hr />
          </div>
        </div>
      </Row>
      <Row>
        <div className="savingsSection d-flex align-items-center">
          <h2>Savings so big, you can&apos;t help but love it!</h2>
          <p className="wideText">The average consumer saves every year by choosing Cove over other alarm companies.</p>
          <p className="shortText">Every year with Cove is more money in your pocket</p>
          <div className="rangeRow">
            <CustomizedRange />
          </div>
        </div>
      </Row>
      <Row>
        <div className="processSection">
          <Row>
            <Col xs={12} sm={12} md={8}>
              <div className="leftArea">
                <h2>The most simple setup process ever.</h2>
                <p>Our unprecedented setup process makes it easy for everyone.</p>
                <ol>
                  <li>Plug in your panel.</li>
                  <li>Follow on screen instructions.</li>
                  <li>There is not step 3.</li>
                </ol>
                <WatchVideoLink link="/" size="small" title="Watch install video" />
              </div>
            </Col>
            <Col xs={0} sm={0} md={4}>
              <div className="rightArea">
                <img src="/static/images/packageBox.png" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <RiskFreeSection />
    </div>
    <Footer />
    <style jsx>{s}</style>
  </Layout>
);

export default Index;
