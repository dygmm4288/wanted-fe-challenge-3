import useTodoForm from "../../hooks/useTodoForm";
import Button from "../common/Button";

export default function TodoForm() {
  const { handleChange, handleSubmit, content } = useTodoForm();

  return (
    <form onSubmit={handleSubmit}>
      <input value={content} onChange={handleChange} />
      <Button type='submit'>Add</Button>
    </form>
  );
}
