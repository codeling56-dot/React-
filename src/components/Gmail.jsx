import React from "react";

const Gmail = () => {
  return (
    <section className="w-full py-20 md:py-32 px-6 flex justify-center bg-primary">
      {/* Content Wrapper */}
      <div className="w-full max-w-2xl flex flex-col items-center text-center gap-6 md:gap-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold">
          Gain Exclusive Access
        </h2>

        {/* Description */}
        <p className="text-neutral text-sm md:text-base">
          Be the first to explore our limited-release drops and atelier events.
          Subscribed members receive private invitations to our seasonal
          runways.
        </p>

        {/* Form Row */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
          {/* Input Wrapper */}
          <div className="w-full flex-1 border-b border-neutral">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="h-full w-full p-4 text-center sm:text-left outline-none focus:outline-none"
            />
          </div>

          {/* Button */}
          <button className="w-full sm:w-52 h-14 text-primary bg-neutral uppercase tracking-wide text-sm font-semibold cursor-pointer transition-colors duration-300 hover:bg-secondary hover:text-primary active:scale-95">
            Join Atelier
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gmail;
