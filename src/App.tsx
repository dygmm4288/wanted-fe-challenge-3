import TodoHeader from "./components/Layout/TodoHeader";
import TodoMain from "./components/Layout/TodoMain";
import { StWrapper } from "./components/Layout/layout.styles";

export default function App() {
  return (
    <StWrapper>
      <TodoHeader />
      <TodoMain />
    </StWrapper>
  );
}
