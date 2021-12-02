import React from 'react';
import { Container, Row, Form, Button, ThemeProvider } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import '../empleados.css';
import ConfirmationPrompts from '../../prompts/confirmation';

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idEmpleado: this.props.getIdEmpleado(),
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            confirmation: {
                title: 'Modificar empleado',
                text: '¿Desea modificar el empleado?',
                show: false,
            },
            loading: false,
            empleado: {
                nombre: "",
                apellido_p: "",
                apellido_m: "",
                profesion: "",
                telefono: "",
                mail: "",
                ciudad: "",
                direccion: "",
            },
        };

        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.getIdEmpleado();
    }

    getIdEmpleado() {
        this.setState({ loading: true });
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                //console.log(response);
                this.setState({ 
                    empleado: response.data,
                    loading: false 
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            })
    }

    setValue(index, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [index]: value,
            },
        });
    }

    guardarEmpleados() {
        this.setState({ loading: true });
        request
            .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                    window.location.reload();
                }
                this.setState({ loading: false });
                //console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    onCancel() {
        //alert('cancelar');
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        })
    }

    onConfirm() {
        //alert('confirmar');
        this.setState({
            confirmation: {
                ...this.state.confirmation, 
                show: false,
            },
        },
        this.guardarEmpleados()
        );
    }

    render() { 
        return ( 
            <Container id="empleados-crear-container">
                <ConfirmationPrompts 
                 show={this.state.confirmation.show}
                 title={this.state.confirmation.title}
                 text={this.state.confirmation.text}
                 onCancel={this.onCancel}
                 onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h2>Editar Perfil Laboral</h2>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.nombre}
                             onChange={(e) => this.setValue('nombre', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.apellido_p}
                             onChange={(e) => this.setValue('apellido_p', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.apellido_m}
                             onChange={(e) => this.setValue('apellido_m', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Profesión</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.profesion}
                             onChange={(e) => this.setValue('profesion', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.telefono}
                             onChange={(e) => this.setValue('telefono', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.mail}
                             onChange={(e) => this.setValue('mail', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.ciudad}
                             onChange={(e) => this.setValue('ciudad', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control 
                             value={this.state.empleado.direccion}
                             onChange={(e) => this.setValue('direccion', e.target.value)}
                            />
                        </Form.Group>

                        <Button 
                         variant="dark" 
                         onClick={() => 
                            this.setState({
                                confirmation: { ...this.state.confirmation, show: true },
                            })
                         }
                        >
                            Guardar Empleado
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
