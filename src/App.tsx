import TodoHeader from "./components/Layout/TodoHeader";
import TodoMain from "./components/Layout/TodoMain";
import { Wrapper } from "./components/Layout/layout.styles";

export default function App() {
  return (
    <Wrapper>
      <TodoHeader />
      <TodoMain />
    </Wrapper>
  );
}
