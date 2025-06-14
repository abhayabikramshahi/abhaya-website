import React, { useState } from 'react';

function CssCodeGenerator() {
  const [height, setHeight] = useState('');
  const [padding, setPadding] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState('16');
  const [fontColor, setFontColor] = useState('#000000');
  const [unit, setUnit] = useState('px');
  const [baseFontSize, setBaseFontSize] = useState(16);
  const [borderRadius, setBorderRadius] = useState('');
  const [boxShadow, setBoxShadow] = useState('');

  const pxToRem = (px) => (px / baseFontSize).toFixed(3);
  const remToPx = (rem) => (rem * baseFontSize).toFixed(1);

  const getCssCode = () => {
    let h = height;
    let p = padding;
    let fz = fontSize;
    let br = borderRadius;
    if (unit === 'rem') {
      h = height ? pxToRem(Number(height)) : '';
      p = padding ? pxToRem(Number(padding)) : '';
      fz = fontSize ? pxToRem(Number(fontSize)) : '';
      br = borderRadius ? pxToRem(Number(borderRadius)) : '';
    }
    return `height: ${h}${unit};\npadding: ${p}${unit};\nbackground: ${bgColor};\ncolor: ${fontColor};\nfont-family: ${fontFamily};\nfont-size: ${fz}${unit};\nborder-radius: ${br ? br + unit : '0'};\n${boxShadow ? `box-shadow: ${boxShadow};` : ''}`;
  };

  const [convertValue, setConvertValue] = useState('');
  const [convertUnit, setConvertUnit] = useState('px');
  const getConverted = () => {
    if (!convertValue) return '';
    if (convertUnit === 'px') return pxToRem(Number(convertValue)) + ' rem';
    return remToPx(Number(convertValue)) + ' px';
  };

  return (
    <div className="min-h-screen px-10 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* 🧠 Overview */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-red-600">CSS Code Generator</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          This tool helps you generate CSS snippets instantly based on your custom input styles. Easily convert between <code>px</code> and <code>rem</code>, and preview your component’s styling code in real-time.
        </p>
      </section>

      {/* 🎛️ Inputs */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">🛠️ Customize Your Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input label="Height" value={height} onChange={setHeight} />
          <Input label="Padding" value={padding} onChange={setPadding} />
          <Input label="Font Size" value={fontSize} onChange={setFontSize} />
          <Input label="Font Family" value={fontFamily} onChange={setFontFamily} type="text" />
          <ColorInput label="Font Color" value={fontColor} onChange={setFontColor} />
          <ColorInput label="Background Color" value={bgColor} onChange={setBgColor} />
          <Input label="Border Radius" value={borderRadius} onChange={setBorderRadius} />
          <Input label="Box Shadow" value={boxShadow} onChange={setBoxShadow} type="text" />
          <div>
            <label className="block font-semibold mb-1">Unit</label>
            <select value={unit} onChange={e => setUnit(e.target.value)} className="w-full p-3 rounded border text-lg">
              <option value="px">px</option>
              <option value="rem">rem</option>
            </select>
          </div>
          <Input
            label="Base font-size (for rem)"
            value={baseFontSize}
            onChange={val => setBaseFontSize(Number(val))}
            type="number"
          />
        </div>
      </section>

      {/* 🧾 Output */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">📄 Generated CSS Code</h2>
        <textarea
          readOnly
          value={getCssCode()}
          className="w-full bg-gray-200 dark:bg-gray-800 p-4 rounded font-mono text-lg"
          rows={8}
        />
      </section>

      {/* 🔁 Converter */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔁 px ↔ rem Converter</h2>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="number"
            value={convertValue}
            onChange={e => setConvertValue(e.target.value)}
            className="p-3 border rounded text-lg w-40"
            placeholder="Value"
          />
          <select
            value={convertUnit}
            onChange={e => setConvertUnit(e.target.value)}
            className="p-3 border rounded text-lg w-40"
          >
            <option value="px">px → rem</option>
            <option value="rem">rem → px</option>
          </select>
          <span className="text-lg font-mono">{getConverted()}</span>
        </div>
      </section>
    </div>
  );
}

// 🔧 Reusable Input Components
function Input({ label, value, onChange, type = 'number' }) {
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full p-3 border rounded text-lg"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}

function ColorInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <input
        type="color"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full p-2 rounded h-12"
      />
    </div>
  );
}

export default CssCodeGenerator;
