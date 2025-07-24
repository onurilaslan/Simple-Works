import React, { useEffect, useState } from 'react';
import './App.css';

const bank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

function App() {
  const [display, setDisplay] = useState('');

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      const pad = bank.find(p => p.keyTrigger === selector);
      setDisplay(pad.id);
    }
  };

  const handleKeyPress = (e) => {
    const pad = bank.find(p => p.keyCode === e.keyCode);
    if (pad) {
      playSound(pad.keyTrigger);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine" className="container">
      <div id="display">{display || 'Play a sound'}</div>
      <div className="pad-grid">
        {bank.map(pad => (
          <div
            key={pad.keyTrigger}
            className="drum-pad"
            id={pad.id}
            onClick={() => playSound(pad.keyTrigger)}
          >
            {pad.keyTrigger}
            <audio
              className="clip"
              id={pad.keyTrigger}
              src={pad.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
