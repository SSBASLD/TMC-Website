import { lusitana } from "@/app/ui/fonts";
import { signOutAsync } from "../../lib/actions";

//Just a bunch of Tailwind and HTML to make the UI for the home page
export default async function Home() {
  return (
    <main className={`p-[2%] w-[100%] h-[100%]`}>
      <p className={`top-[8%] left-[10%] right-[10%] flex items-center justify-left ${lusitana.className} text-black
        Laptop:text-[50px] 
        Tablet:text-[40px] 
        Mobile-S:text-[30px]`}
      >
        Welcome to the [PLACEHOLDER]!
      </p>

      <p className={`top-[16%] left-[10%] right-[10%] flex items-center justify-left ${lusitana.className} text-black
        Mobile-S:text-[20px]
        Laptop:text-[30px]`}
      >
        A student-run high school team and individual competition
      </p>

      <div className={`w-[100%] h-[75%] max-h-[485px] outline outline-cyan-700 outline-width-[1vw] p-[1%] ${lusitana.className} text-black overflow-auto
        Mobile-S:text-[25px]
        Tablet:text-[30px]`}
      >
        This year's competition is set to take place Spring 2025 both virtually and at in-person sites. <br></br>
        Information on our in-person sites and awards can be found on our Contest Information page. <br></br>

        <div className={`w-full h-[20%]`}></div>

        Final contest results will be available later on our Results page. <br></br>

        <div className={`w-full h-[10%]`}></div>

        The Tennessee Math Coalition requires donations from people like you to survive.
      </div>

      <div className={`w-[80%] h-[6%] flex items-center justify-left ${lusitana.className} text-gray-400
        Tablet:text-[20px]
        Mobile-S:text-[10x]`}
      >
        Note: All competition times are in CST
      </div>
    </main>
  );
}
