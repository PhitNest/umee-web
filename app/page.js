import Image from "next/image";

export default function Home() {
  return (
    <main class="bg-gradient-orange flex h-screen flex-col items-center justify-center align-center">
      <h1 class="text-7xl font-extrabold font-system-ui cursor-pointer">UMEE</h1>
      <div class="flex absolute bottom-0 mb-0 flex-col flex-nowrap align-center justify-center items-center cursor-pointer">
        <p>Scroll Down</p>
        <img className="w-9 h-9" src="./assets/down-arrow.png" alt="Down arrow" />
      </div>
    </main>
  );
}
