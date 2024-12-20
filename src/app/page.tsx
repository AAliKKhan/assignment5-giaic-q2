
export default function Home() {
  return (
   <div>
     <div className="bg-primary text-white h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-5">

        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get More Done with <span className="text-white">whitespace</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks.
          </p>
          <button className="bg-inter hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg shadow-md transition">
            Try Whitespace free →
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">

          <div className="bg-blue-200 w-[824px] h-[549px] rounded-lg relative flex justify-center items-center">

          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
