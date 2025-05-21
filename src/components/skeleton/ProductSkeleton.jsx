const EcobazarSkeleton = () => {
  return (
    <div
      className="w-full
     max-w-5xl mx-auto"
    >
      {/* Main Content */}
      <div className="p-4">
        <div className="flex gap-4">
          {/* Main Hero Banner */}
          <div className="flex-1 h-[400px] bg-gray-200 animate-pulse rounded-lg relative">
            {/* Text Overlay */}
            <div className="absolute top-12 left-8 space-y-4">
              <div className="h-8 w-64 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-8 w-48 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-6 w-40 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-10 w-32 bg-gray-300 animate-pulse rounded-full mt-4"></div>
            </div>
          </div>

          {/* Side Banners */}
          <div className="w-80 space-y-4">
            {/* Summer Sale Banner */}
            <div className="h-48 bg-gray-200 animate-pulse rounded-lg relative">
              <div className="absolute top-6 left-6 space-y-2">
                <div className="h-4 w-24 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-8 w-32 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-4 w-40 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-8 w-24 bg-gray-300 animate-pulse rounded-full mt-2"></div>
              </div>
            </div>

            <div className="h-48 bg-gray-200 animate-pulse rounded-lg relative">
              <div className="absolute top-6 left-6 space-y-2">
                <div className="h-4 w-20 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-12 w-48 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-8 w-24 bg-gray-300 animate-pulse rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-4">
              <div className="h-12 w-12 bg-gray-200 animate-pulse rounded"></div>
              <div className="space-y-2">
                <div className="h-5 w-32 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-4 w-40 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcobazarSkeleton;
