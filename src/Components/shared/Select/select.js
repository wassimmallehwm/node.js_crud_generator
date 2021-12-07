import React from "react";
import { Form } from "react-bootstrap";

function Select(props) {
  return (
    <Form.Control as="select" {...props}>
      <option key={0} disabled hidden></option>
      {props.options?.map((option) => {
        const displayOption = props.displayAttr? option[props.displayAttr] : option;
        return (
          <option key={displayOption} value={props.complex ? JSON.stringify(option) : displayOption}>
            {displayOption}
          </option>
        );
      })}
    </Form.Control>
  );
}

export default Select;
