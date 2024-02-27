import useAnimateInput from "../../hooks/useAnimateInput";
import useTodoForm from "../../hooks/useTodoForm";
import Button from "../common/Button";
import { StForm, StInput, StInputWrapper, StLabel } from "./TodoForm.styles";

const TODO_INPUT = "todo-input";

export default function TodoForm() {
  const { handleChange, handleSubmit, content } = useTodoForm();
  const { isFocus, handleBlur, handleFocus } = useAnimateInput();

  return (
    <StForm onSubmit={handleSubmit}>
      <StInputWrapper onFocus={handleFocus} onBlur={handleBlur}>
        <StLabel $isFocus={isFocus} htmlFor={TODO_INPUT}>
          할 일을 입력해주세요
        </StLabel>
        <StInput
          id={TODO_INPUT}
          value={content}
          $isFocus={isFocus}
          onChange={handleChange}
          placeholder='할 일을 입력해주세요'
        />
      </StInputWrapper>
      <Button type='submit'>Add</Button>
    </StForm>
  );
}
