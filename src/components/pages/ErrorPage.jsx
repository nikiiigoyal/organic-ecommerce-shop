export function ErrorPage() {
  return (
    <>
      <div className="mx-auto font-poppins flex flex-col items-center w-[70%] my-8">
        <img src="/images/errorpage.png" alt="image"></img>
        <h2 className="font-bold text-4xl text-[#1A1A1A] mt-4 mb-3">
          Oops! page not found
        </h2>
        <p className="text-[18px] text-gray-500 w-[50%] mb-5">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>
        <button className="bg-[#00B207] text-white rounded-full py-3 px-8 mx-auto">
          Back to Home
        </button>
      </div>
    </>
  );
}
