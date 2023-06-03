import { useContext, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../../context/user.contex";
import { Input } from "../FormControls/Input/Input";

const defaultFormValue = {
  firstName: "",
  lastName: "",
  age: "",
};

export const UserForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [formValue, setFormValue] = useState(user);
  const firstInput = useRef();

  useEffect(() => {
      firstInput.current.focus();
  }, [firstInput]);


  const inputChangeHandler = (value, formControlName) => {
    setFormValue((state) => ({ ...state, [formControlName]: value }));
  };

  const submitHandler = () => {
    setUser(formValue);
    setFormValue(defaultFormValue);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        label="First name"
        type="text"
        placeholder="Enter First Name"
        onChange={({ target: { value } }) =>
          inputChangeHandler(value, "firstName")
        }
        value={formValue.firstName}
      />
      <Input
        label="Last Name"
        ref={firstInput}
        type="text"
        placeholder="Enter Last Name"
        onChange={({ target: { value } }) =>
          inputChangeHandler(value, "lastName")
        }
        value={formValue.lastName}
      />
      <Input
        label="Age"
        type="number"
        placeholder="Enter Age"
        onChange={({ target: { value } }) => inputChangeHandler(value, "age")}
        value={formValue.age}
      />
      <Input
        label="Age"
        placeholder="Enter Age"
        onChange={({ target: { value } }) => inputChangeHandler(value, "age")}
        value={formValue.age}
      />

      <Button type="submit">Save</Button>
    </Form>
  );
};
