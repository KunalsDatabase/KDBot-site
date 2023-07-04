import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ShardModal(props) {
    const shardID = props.shardid
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        restoreFocus={false}
      >
        <Modal.Header closeButton closeVariant="white" className="text-white bg-dark">
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title+" Shard "+shardID} Analytics
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className = "text-white">
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className="text-white bg-dark">
          <Button onClick={props.onHide} variant = "dark">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default ShardModal