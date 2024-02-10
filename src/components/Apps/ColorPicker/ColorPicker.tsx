import React, { useState } from 'react';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const [color, setColor] = useState<string>('#000000');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        style={{ marginRight: '10px' }}
      />
      <div
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: color,
          border: '2px solid #333',
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
