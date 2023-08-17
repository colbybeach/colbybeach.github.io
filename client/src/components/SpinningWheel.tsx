import React, { useState } from 'react';

interface SpinningWheelProps {
  options: string[];
}

const SpinningWheel: React.FC<SpinningWheelProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [spinning, setSpinning] = useState<boolean>(false);

  const spinWheel = () => {
    if (!spinning) {
      const randomIndex = Math.floor(Math.random() * options.length);
      setSpinning(true);
      setTimeout(() => {
        setSelectedOption(options[randomIndex]);
        setSpinning(false);
      }, 3000); // Simulate spinning animation for 3 seconds
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`wheel bg-primary rounded-full w-40 h-40 flex items-center justify-center ${
          spinning && 'animate-spin'
        }`}
      >
        <div className="arrow bg-white rounded-full w-6 h-6" />
      </div>
      <button
        className={`btn mt-4 ${spinning ? 'btn-disabled' : 'btn-primary'}`}
        onClick={spinWheel}
        disabled={spinning}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
      <p className="mt-2 text-center">{selectedOption}</p>
    </div>
  );
};

export default SpinningWheel;
