import { Modal, Row, Button } from 'react-bootstrap'

interface ConfirmationProps {
    show: boolean;
    save: any;
    closeModal: any;
    type?: string;
    text: string;
}

const Confirmation = ({
    show,
    save,
    closeModal,
    type,
    text
}: ConfirmationProps) => {
    const variant = type && type == 'DELETE' ? 'danger' : 'primary'
    return (
        <Modal
            show={show}
            onHide={closeModal}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirmation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row style={{ alignItems: 'center' }} >
                    <div style={{padding: '.5rem 1rem'}} >
                    <h5> {text} </h5>
                    </div>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant={variant} onClick={save}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Confirmation
