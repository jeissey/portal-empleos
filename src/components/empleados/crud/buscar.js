import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../empleados.css';
import Datagrid from '../../grid/grid';
import ConfirmationPrompts from '../../prompts/confirmation';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';

const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true,
}, {
    dataField: 'nombre',
    text: 'Nombre'
}, {
    dataField: 'apellido_p',
    text: 'Primer Apellido'
}, {
    dataField: 'apellido_m',
    text: 'Segundo Apellido',
    hidden: true,
}, {
    dataField: 'profesion',
    text: 'Profesión'
}, {
    dataField: 'telefono',
    text: 'Teléfono'
}, {
    dataField: 'mail',
    text: 'Correo Electrónico'
}, {
    dataField: 'ciudad',
    text: 'Ciudad'
}, {
    dataField: 'direccion',
    text: 'Dirección',
    hidden: true,
}];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false,
            idEmpleado: null,
            confirmation: {
                title: 'Eliminar el empleado',
                text: '¿Desea eliminar el empleado?',
                show: false,
            },
            message: {
                text: '',
                show: false,
            },
         };
        this.onClickEditButton = this.onClickEditButton.bind(this);
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {    }

    onClickEditButton(row) {
        //console.log(row);
        this.props.setIdEmpleado(row._id);
        this.props.changeTab('editar');
    }

    onClickDeleteButton(row) {
        this.setState({
            idEmpleado: row._id,
            confirmation: {
                ...this.state.confirmation,
                show: true,
            },
        });
    }

    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }

    onConfirm() {
        this.setState({
            confirmation: {
                ...this.state.confirmation, 
                show: false,
            },
        },
        this.eliminarEmpleado()
        );
    }

    eliminarEmpleado() {
        this.setState({ loading: true });
        request
            .delete(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                this.setState({
                    loading: false,
                    message: {
                        text: response.data.msg,
                        show: true,
                    },
                });
                this.setState({ loading: false });
                if (response.data.exito) this.reloadPage();
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    reloadPage() {
        setTimeout(() => {
            window.location.reload();
        }, 2500);
    }

    render() { 

        return ( 
            <Container id="empleados-buscar-container" >
                
                <ConfirmationPrompts 
                 show={this.state.confirmation.show}
                 title={this.state.confirmation.title}
                 text={this.state.confirmation.text}
                 onCancel={this.onCancel}
                 onConfirm={this.onConfirm}
                />

                <Loading show={this.state.loading} />

                <Row>
                    <h2>BUSCAR PERFIL LABORAL</h2>
                </Row>
                <Row>
                    <Datagrid 
                     url="/empleados" 
                     columns={columns} 
                     showEditButton={true} 
                     showDeleteButton={true}
                     onClickEditButton={this.onClickEditButton}
                     onClickDeleteButton={this.onClickDeleteButton}
                    />
                </Row>
            </Container>
        );
    }
}
