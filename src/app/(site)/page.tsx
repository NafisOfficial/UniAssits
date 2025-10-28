
import { Navbar } from "./landing/Navbar";
import { Banner } from "./landing/Banner";
import { Feature } from "./landing/Feature";

export default function Home() {
  return (
    <main>
      <div className="bg-[#FFF4E4] text-center py-2 mt-5 w-full">
        <p>Welcome to UniAssists</p>
      </div>
      <Navbar />
      <Banner />
      <Feature />
    </main>
  );
}
