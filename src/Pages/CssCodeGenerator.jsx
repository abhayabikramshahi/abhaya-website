import React, { useState } from 'react';

function CssCodeGenerator() {
  const [height, setHeight] = useState('');
  const [padding, setPadding] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState('16');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontWeight, setFontWeight] = useState('400');
  const [lineHeight, setLineHeight] = useState('');
  const [textAlign, setTextAlign] = useState('left');
  const [borderRadius, setBorderRadius] = useState('');
  const [boxShadow, setBoxShadow] = useState('');
  const [unit, setUnit] = useState('px');
  const [baseFontSize, setBaseFontSize] = useState(16);
  const [copied, setCopied] = useState(false);

  const pxToRem = px => (px / baseFontSize).toFixed(3);
  const remToPx = rem => (rem * baseFontSize).toFixed(1);

  const getCssCode = () => {
    let h = height;
    let p = padding;
    let fz = fontSize;
    let br = borderRadius;
    let lh = lineHeight;

    if (unit === 'rem') {
      h = height ? pxToRem(Number(height)) : '';
      p = padding ? pxToRem(Number(padding)) : '';
      fz = fontSize ? pxToRem(Number(fontSize)) : '';
      br = borderRadius ? pxToRem(Number(borderRadius)) : '';
      lh = lineHeight ? pxToRem(Number(lineHeight)) : '';
    }

    return `height: ${h}${unit};\npadding: ${p}${unit};\nbackground: ${bgColor};\ncolor: ${fontColor};\nfont-family: ${fontFamily};\nfont-size: ${fz}${unit};\nfont-weight: ${fontWeight};\nline-height: ${lh ? lh + unit : 'normal'};\ntext-align: ${textAlign};\nborder-radius: ${br ? br + unit : '0'};\n${boxShadow ? `box-shadow: ${boxShadow};` : ''}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCssCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [convertValue, setConvertValue] = useState('');
  const [convertUnit, setConvertUnit] = useState('px');
  const getConverted = () => {
    if (!convertValue) return '';
    return convertUnit === 'px' ? `${pxToRem(Number(convertValue))} rem` : `${remToPx(Number(convertValue))} px`;
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white">
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">CSS Code Generator</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Instantly generate pixel-perfect CSS code and preview your styles in real-time. Convert px to rem and fine-tune your design faster than ever.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">🎨 Style Inputs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Input label="Height" value={height} onChange={setHeight} />
          <Input label="Padding" value={padding} onChange={setPadding} />
          <Input label="Font Size" value={fontSize} onChange={setFontSize} />
          <Input label="Line Height" value={lineHeight} onChange={setLineHeight} />
          <Input label="Font Weight" value={fontWeight} onChange={setFontWeight} />
          <Input label="Font Family" value={fontFamily} onChange={setFontFamily} type="text" />
          <ColorInput label="Font Color" value={fontColor} onChange={setFontColor} />
          <ColorInput label="Background Color" value={bgColor} onChange={setBgColor} />
          <Input label="Border Radius" value={borderRadius} onChange={setBorderRadius} />
          <Input label="Box Shadow" value={boxShadow} onChange={setBoxShadow} type="text" />
          <Dropdown
            label="Text Align"
            value={textAlign}
            onChange={setTextAlign}
            options={['left', 'center', 'right', 'justify']}
          />
          <Dropdown label="Unit" value={unit} onChange={setUnit} options={['px', 'rem']} />
          <Input
            label="Base Font Size"
            value={baseFontSize}
            onChange={val => setBaseFontSize(Number(val))}
            type="number"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">🧾 Generated CSS Code</h2>
        <div className="relative">
          <textarea
            readOnly
            value={getCssCode()}
            className="w-full bg-gray-200 dark:bg-zinc-800 p-4 rounded font-mono text-base mb-3"
            rows={10}
          />
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800"
          >
            {copied ? '✅ Copied' : '📋 Copy'}
          </button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">👀 Live Preview</h2>
        <div
          style={{
            height: height + unit,
            padding: padding + unit,
            backgroundColor: bgColor,
            color: fontColor,
            fontFamily,
            fontSize: fontSize + unit,
            fontWeight,
            lineHeight: lineHeight ? lineHeight + unit : 'normal',
            textAlign,
            borderRadius: borderRadius + unit,
            boxShadow,
          }}
          className="border w-full rounded transition-all"
        >
          <p>This is your preview box. Customize me 👋</p>
        </div>
      </section>

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

// Reusable components
function Input({ label, value, onChange, type = 'number' }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
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
      <label className="block font-medium mb-1">{label}</label>
      <input
        type="color"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full p-2 rounded h-12"
      />
    </div>
  );
}

function Dropdown({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full p-3 border rounded text-lg"
      >
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CssCodeGenerator;
