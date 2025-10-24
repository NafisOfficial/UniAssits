import { Title } from "./landing/Title";
import { Navbar } from "./landing/Navbar";
import { Banner } from "./landing/Banner";


export default function Home() {
  return (
    <main>
      <Title />
      <Navbar/>
      <Banner/>
    </main>
  );
}
