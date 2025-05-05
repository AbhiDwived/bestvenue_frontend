export default function CompletionCard() {
    return (
      <div className="bg-white p-4 rounded shadow flex flex-col items-center text-center">
        <p className="font-bold">Complete your storefront</p>
        <p className="text-sm text-gray-600 mb-2">
          You are just 9 steps away from completing your Storefront.
        </p>
        <div className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#22c55e"
                strokeWidth="8"
                fill="none"
                strokeDasharray="226"
                strokeDashoffset="169.5"
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              25%
            </span>
          </div>
        </div>
        <button className="text-red-500 mt-2 hover:underline">Add 5 photos</button>
          </div>
          
    );
  }
  