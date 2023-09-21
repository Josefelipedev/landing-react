import { Wrapper } from "./styles";
import { Heading } from "../../components/Heading";

function Home() {
  return (
    <div className="App">
      <Wrapper>
        <Heading light={false}>Hello</Heading>
      </Wrapper>
    </div>
  );
}

export default Home;
