import React from "react";

type LoaderProps = {
  height?: number;
  color?: string;
};

const LoaderHorizontal: React.FC<LoaderProps> = ({
  height = 6,
  color = "#22c55e",
}) => {
  return (
    <div
      className="relative w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
      style={{ height }}
    >
      {/* Barra 1 - Principal */}
      <div
        className="absolute left-0 top-0 h-full animate-[slide1_2s_ease-in-out_infinite]"
        style={{
          width: "50%",
          backgroundColor: color,
          opacity: 0.9,
        }}
      />

      {/* Barra 2 - Secundaria */}
      <div
        className="absolute left-0 top-0 h-full animate-[slide2_2s_ease-in-out_infinite]"
        style={{
          width: "30%",
          backgroundColor: color,
          opacity: 0.6,
        }}
      />

      <style>
        {`
          @keyframes slide1 {
            0% { 
              transform: translateX(-100%); 
              opacity: 0.7;
            }
            50% { 
              transform: translateX(150%); 
              opacity: 1;
            }
            100% { 
              transform: translateX(400%); 
              opacity: 0.7;
            }
          }
          
          @keyframes slide2 {
            0% { 
              transform: translateX(-200%); 
              opacity: 0.5;
            }
            60% { 
              transform: translateX(200%); 
              opacity: 0.8;
            }
            100% { 
              transform: translateX(500%); 
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoaderHorizontal;
