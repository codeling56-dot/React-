import React from "react";

const Gmail = () => {
  return (
    <section className="w-full py-32 flex justify-center bg-primary">
      {/* Content Wrapper */}
      <div className="w-full max-w-2xl flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold">Gain Exclusive Access</h2>

        {/* Description */}
        <p className=" text-neutral">
          Be the first to explore our limited-release drops and atelier events.
          Subscribed members receive private invitations to our seasonal
          runways.
        </p>

        {/* Form Row */}
        <div className="w-full flex items-center gap-4">
          {/* Input Wrapper */}
          <div className="flex-1 border-b-1 border-neutral">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="h-full w-full p-4 text-center  outline-none
    focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            className="text-primary bg-neutral h-14 w-52 uppercase tracking-wide text-s font-semibold cursor-pointer     transition-colors
    duration-300
    hover:bg-secondary
    hover:text-primary

  active:scale-95"
          >
            Join Atelier
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gmail;
