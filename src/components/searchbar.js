import './post.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingTextareaExample() {
  return (
    <>
      <FloatingLabel 
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Comments" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        
        </FloatingLabel>
    </>
  );
}

export default FormFloatingTextareaExample;