import LeftSide from "./components/LeftSide";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#12372A] lg:min-h-screen md:min-h-[120vh] min-h-[170vh] flex flex-col lg:flex-row relative">
      {/* Header Section */}
      <header className="w-full flex justify-center text-white py-6">
        <h1 className="capitalize text-3xl font-myFont lg:text-4xl text-center w-80">
          Card Payment Checkout Form
        </h1>
      </header>

      <div className="bg-[#12372A]">
        <main className="grid grid-cols-1 lg:grid-cols-[40%_60%] bg-white items-center justify-center absolute top-40 lg:top-32 left-0 right-0 rounded-xl lg:rounded-t-3xl w-[90%] lg:w-[80%] mx-auto p-6 lg:p-10 lg:pb-0">
          <div className="flex justify-center lg:mb-0 mb-4">
            <LeftSide />
          </div>

          <div className="flex justify-center">
            <Form />
          </div>
        </main>
      </div>
    </div>
  );
}
