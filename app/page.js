import Image from "next/image";
import Navbar from "./components/Navbar";
import ArchivePage from "./components/ArchivePage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ArchivePage />
    </div>
  );
}
