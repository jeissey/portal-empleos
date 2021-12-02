import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container id="contenedor-principal">
                <Row className="banner">
                    <Image src="/images/job-banner.jpg" fluid className="banner" />
                </Row>
                <Row className="seccion-1" >
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Perfil Profesional</Card.Title>
                                <Card.Text>
                                Muestra un breve resumen de tu trayectoria en el curriculum vitae, reflejando 
                                la experiencia, formación, competencias y puntos fuertes más relevantes de tu perfil.
                                </Card.Text>
                                <Card.Link href="#">Registrar Perfil</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Mercado Laboral</Card.Title>
                                <Card.Text>
                                Encuentra un conjunto de individuos que están dispuestos a trabajar y un conjunto 
                                de empresas o empleadores que contrataran trabajadores.
                                </Card.Text>
                                <Card.Link href="#">Ver Ofertas</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="seccion-2" >
                    <Col className="texto" >
                        <h2>Portal de Empleos EMPLE-ARTE</h2>
                        <h5>¿Cómo surgió?</h5>
                        <br/>
                        <br/>
                        <p>Identificamos una problemática social constante, es la búsqueda de empleo en todo el 
                            territorio nacional sin efectividad. Actualmente, los portales de trabajo actúan como 
                            intermediarios de empleo, pero sus resultados no son los que buscan los desempleados. 
                            Adicional a eso, sus datos personales son expuestos a terceros y pueden ser usados con 
                            fines comerciales, económicos o con otra índole, sin contar que algunos portales ya 
                            empiezan a cobrar por usar sus servicios Premium, limitando sus posibilidades de 
                            obtención de empleo.
                        </p>
                        <p>Nuestro equipo pretende ayudar a esa población creando una página web más dinámica que 
                            contenga desde vídeos o audios con su presentación personal y laboral, hasta pruebas 
                            psicológicas y de habilidades; fácil de compartir por otras redes sociales evitando 
                            costos adicionales y mejorando su experiencia de usuario, esto para que las empresas 
                            puedan encontrarlos rápidamente sin intermediarios, por medio de un motor de búsquedas 
                            interno con palabras claves por sector o perfil laboral y donde se optimice el proceso 
                            de selección de personal que es uno de los más difíciles para ambas partes.
                        </p>
                    </Col>
                    <Col className="imagen" >
                        <Image src="/images/img-col.jpg" />
                    </Col>
                </Row>
                <Row className="footer" >
                    <p>Copyright © - Todos los derechos reservados.</p>
                </Row>
            </Container>
        );
    }
}
