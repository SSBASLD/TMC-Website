import { lusitana } from "../ui/fonts";

export default function Home() {
  return (
    <main>
      <div className={`absolute top-[8%] left-[10%] right-[10%] w-[80%] h-[10%] flex items-center justify-left text-[300%] ${lusitana.className} text-black`}>
        Welcome to the [PLACEHOLDER]!
      </div>
      <div className={`absolute top-[16%] left-[10%] right-[10%] w-[80%] h-[10%] flex items-center justify-left text-[150%] ${lusitana.className} text-black`}>
        A student-run high school team and individual competition
      </div>
      <div className={`absolute top-[25%] left-[10%] right-[10%] w-[80%] h-[65%] outline outline-cyan-700 p-[1%] ${lusitana.className} text-[1.8vw] text-black`}>
        This year's competition is set to take place Spring 2025 both virtually and at in-person sites. <br></br>
        Information on our in-person sites and awards can be found on our Contest Information page. <br></br>

        <div className={`w-full h-[20%]`}></div>

        Final contest results will be available later on our Results page. <br></br>

        <div className={`w-full h-[10%]`}></div>

        The Tennessee Math Coalition requires donations from people like you to survive.
      </div>

      <div className={`absolute bottom-[1%] left-[10%] right-[10%] w-[80%] h-[10%] flex items-center justify-left text-[1.2vw] ${lusitana.className} text-gray-400`}>
        Note: All competition times are in CST
      </div>
    </main>
  );
}
