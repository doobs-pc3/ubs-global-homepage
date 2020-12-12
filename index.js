import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Homepage extends React.Component {
	render() {
		return (
			<body>
				<Container>
					<Navbar expand="lg" variant="light">
						<Navbar.Brand>
							<img
								src={'assets/img/UBS0.png'}
								width="115px"
								height="115px"
								className="d-inline-block align-top"
								alt="UBS Global"
							/>
						</Navbar.Brand>
						<Nav className="mr-auto">
							<Nav.Link href="#aboutUs">About Us</Nav.Link>
							<Nav.Link href="#joinUs">Join Us</Nav.Link>
							<Nav.Link href="#contactUs">Contact Us</Nav.Link>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-secondary">Search</Button>
						</Form>
						<option></option>
						<option></option>
						<Dropdown as={ButtonGroup}>
							<Button variant="danger">Logins</Button>
							<Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />
								<Dropdown.Menu>
									<Dropdown.Item href="#individuals">Individuals</Dropdown.Item>
									<Dropdown.Item href="#corpsNinsts">Corporate & Institutions</Dropdown.Item>
									<Dropdown.Item href="others">More Logins</Dropdown.Item>
								</Dropdown.Menu>
						</Dropdown>
					</Navbar>
				</Container>

				<Container>
					<Carousel>
						<Carousel.Item>
							<img src={'assets/img/UBS1.png'} className="d-100 w-100" alt="1st Slider" />
							<Carousel.Caption>
								<h3>UBS Unveils 2021</h3>
								<option></option>
								<option></option>
								<p><Button size="lg">Learn More</Button></p>
								<option></option>
								<option></option>
							</Carousel.Caption>
						</Carousel.Item>
					
						<Carousel.Item>
							<img src={'assets/img/UBS2.png'} className="d-100 w-100" alt="2nd Slider" />
							<Carousel.Caption>
								<h3>COVID-19 Measures</h3>
								<option></option>
								<option></option>
								<p><Button size="lg">Learn More</Button></p>
								<option></option>
								<option></option>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img src={'assets/img/UBS3.png'} className="d-100 w-100" alt="3rd Slider" />
							<Carousel.Caption>
								<h3>Our Capabilities</h3>
								<option></option>
								<option></option>
								<p><Button size="lg">Learn More</Button></p>
								<option></option>
								<option></option>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>

				<br></br>

				<Container>
					<Jumbotron>
						<CardGroup>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="assets/img/UBSWM.png" />
								<Card.Header><b>Wealth Management</b></Card.Header>
								<Card.Body>
									<Card.Text>
										Anything is possible. At UBS Wealth Management,
										our mission is simple: to guide you towards a brighter
										future for your investments, your business, and eventually
										your family.
                            </Card.Text>
									<Button variant="danger">get in touch</Button>
								</Card.Body>
							</Card>
							<option></option><option></option><option></option>
							<option></option><option></option><option></option>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="assets/img/UBSAM.png" />
								<Card.Header><b>Asset Management</b></Card.Header>
								<Card.Body>
									<Card.Text>
										A global asset manager with a unique heritage of delivering 
										innovative solutions. Our goal is to provide you with access 
										to the best investment ideas and superior investment 
										performance.
                            </Card.Text>
									<Button variant="danger">get in touch</Button>
								</Card.Body>
							</Card>
							<option></option><option></option><option></option>
							<option></option><option></option><option></option>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="assets/img/UBSIB.png" />
								<Card.Header><b>Investment Banking</b></Card.Header>
								<Card.Body>
									<Card.Text>
										Each situation is unique, each client is different,
										and the marketplace is always changing. One constant
										is, however, constant, to enable our clients to succeed.
                            </Card.Text>
									<Button variant="danger">get in touch</Button>
								</Card.Body>
							</Card>
						</CardGroup>
					</Jumbotron>
				</Container>

				<Container>
					<ul class="navigation">
						<li><a href="#terms">Terms of Use</a></li>
						<li><a href="#pStatement">Privacy Statement</a></li>
						<li><a href="rfm">Report Fradulant Mail</a></li>
						<li><a href="#pSetting">Privacy Statement</a></li>
					</ul>
					<hr></hr>
					<ul class="navigation">
						<p>The products, services, information and/or materials contained 
							within these web pages may not be available for residents of 
							certain jurisdictions. Please consult the sales restrictions 
							relating to the products or services in question for further 
							nformation.
							<option></option>
							copyright UBS 1998 - 2020. All rights reserved.
						</p>
					</ul>
				</Container>
			</body>
		);
	}
}

ReactDOM.render(
	<Homepage />,
	document.getElementById('root')
);