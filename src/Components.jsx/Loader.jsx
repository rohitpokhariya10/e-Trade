import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#faf7f2] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-sm text-gray-500">
          Loading products...
        </p>

      </div>
    </div>
  );
};

export default Loader;
