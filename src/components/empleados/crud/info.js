import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';


export default class InfoEmpleado extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idEmpleado: this.props.getIdEmpleado(),
            showInfo: false,
            title: 'Perfil del Empleado',
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
        }
    }

    componentDidMount() {
        this.getIdEmpleado();
    }

    getIdEmpleado() {
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                //console.log(response);
                this.setState({ 
                    showInfo: this.props.showInfo,
                    empleado: response.data,
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() { 
        return ( 
            <Modal 
             showInfo={this.state.showInfo} 
             centered 
             onHide={() => this.props.onCancel()} 
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.state.text}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.onCancel()} >
                        Cancelar
                    </Button>

                    <Button variant="primary" onClick={() => this.props.onConfirm()} >
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
