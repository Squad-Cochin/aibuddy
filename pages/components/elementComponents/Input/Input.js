// { This component is used to reuse the label and input when we receive values through props }
import Form from "react-bootstrap/Form";
import Styles from "./Input.module.scss";

const InputType = (props) => {
  return (
    <Form.Group className={`mb-3 ${props.class}`}>
      {props.label != "" && <Form.Label>{props.label}{props.mandatory}</Form.Label>}

      <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    </Form.Group>
  );
};
InputType.defaultProps = {
  type: "text",
  width: "auto",
  label: "",
  placeholder: "input",
  mandatory: "",
  value: "",
  onChange: "", 
  active: false,
  class: "formbox",
};
export default InputType;
