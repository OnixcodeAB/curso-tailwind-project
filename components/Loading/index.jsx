import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col items-center mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div
          className="inline-block h-40 w-40 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
