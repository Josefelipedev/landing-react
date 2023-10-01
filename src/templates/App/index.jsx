import { Wrapper } from "./styles";
import { Heading } from "../../components/Heading";
import { Base } from "../Base";
import { MockBase } from "../Base/base.stories";

function Home() {
  return <Base {...MockBase} />;
}

export default Home;
