import React, { useState, useRef, useEffect } from 'react';

const FONT_FAMILIES = [
  'Arial, sans-serif',
  '"Times New Roman", serif',
  '"Courier New", monospace',
  'Georgia, serif',
  'Verdana, sans-serif',
  'Tahoma, sans-serif',
];

const FONT_SIZES = [
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
];

const CssCodeGeneratorCMS = () => {
  // Style states (for container styles)
  const [height, setHeight] = useState('');
  const [padding, setPadding] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontWeight, setFontWeight] = useState('400');
  const [lineHeight, setLineHeight] = useState('');
  const [textAlign, setTextAlign] = useState('left');
  const [borderRadius, setBorderRadius] = useState('');
  const [boxShadow, setBoxShadow] = useState('');
  const [unit, setUnit] = useState('px');
  const [baseFontSize, setBaseFontSize] = useState(16);

  // Editable content state
  const [content, setContent] = useState('Edit this text live! Style me like Canva 🎨');
  const [copied, setCopied] = useState(false);

  // Styling toolbar states (for current selection style)
  const [currentFontFamily, setCurrentFontFamily] = useState('Arial, sans-serif');
  const [currentFontSize, setCurrentFontSize] = useState('16px');
  const [currentFontColor, setCurrentFontColor] = useState('#000000');
  const [currentBgColor, setCurrentBgColor] = useState('#ffffff');
  const [currentFontWeight, setCurrentFontWeight] = useState('normal');
  const [currentTextAlign, setCurrentTextAlign] = useState('left');

  const previewRef = useRef(null);

  // Setup execCommand to use CSS styles instead of deprecated font size tags
  useEffect(() => {
    document.execCommand('styleWithCSS', false, true);
  }, []);

  // Handle input changes inside contenteditable
  const onContentChange = e => {
    setContent(e.target.innerHTML); // keep HTML to preserve styling
  };

  // Command wrapper for execCommand
  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    updateSelectionStyles();
    setContent(previewRef.current.innerHTML);
  };

  // Update toolbar button states to reflect current selection styles
  const updateSelectionStyles = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const parent = selection.getRangeAt(0).commonAncestorContainer.parentNode;

    if (!parent) return;

    // Get computed style of parent element
    const style = window.getComputedStyle(parent);

    setCurrentFontFamily(style.fontFamily);
    setCurrentFontSize(style.fontSize);
    setCurrentFontColor(style.color);
    setCurrentBgColor(style.backgroundColor);
    setCurrentFontWeight(style.fontWeight);
    setCurrentTextAlign(style.textAlign);
  };

  // When selection changes, update toolbar state
  useEffect(() => {
    document.addEventListener('selectionchange', updateSelectionStyles);
    return () => document.removeEventListener('selectionchange', updateSelectionStyles);
  }, []);

  // CSS generator from style inputs (for container styling only)
  const getCssCode = () => {
    const convert = val => (val ? (unit === 'rem' ? (parseFloat(val) / baseFontSize).toFixed(3) : val) : '');

    const h = convert(height);
    const p = convert(padding);
    const br = convert(borderRadius);
    const lh = convert(lineHeight);

    return `height: ${h}${h ? unit : ''};
padding: ${p}${p ? unit : ''};
background: ${bgColor};
color: ${fontColor};
font-weight: ${fontWeight};
line-height: ${lh ? lh + unit : 'normal'};
text-align: ${textAlign};
border-radius: ${br ? br + unit : '0'};
${boxShadow ? `box-shadow: ${boxShadow};` : ''}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCssCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white px-6 py-16 max-w-6xl mx-auto flex flex-col">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-3">CSS Code Generator with CMS Live Styling</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Edit your text live with full CMS-style styling controls and customize your CSS container styles.
        </p>
      </header>

      {/* Style inputs for container */}
      <section className="mb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Input label="Height" value={height} onChange={setHeight} unit={unit} />
        <Input label="Padding" value={padding} onChange={setPadding} unit={unit} />
        <ColorInput label="Background Color" value={bgColor} onChange={setBgColor} />
        <Input label="Font Weight" value={fontWeight} onChange={setFontWeight} type="number" />
        <Input label="Line Height" value={lineHeight} onChange={setLineHeight} unit={unit} />
        <Input label="Border Radius" value={borderRadius} onChange={setBorderRadius} unit={unit} />
        <Input label="Box Shadow" value={boxShadow} onChange={setBoxShadow} type="text" />
        <Dropdown label="Text Align" value={textAlign} onChange={setTextAlign} options={['left', 'center', 'right', 'justify']} />
        <Dropdown label="Unit" value={unit} onChange={setUnit} options={['px', 'rem']} />
        <Input label="Base Font Size" value={baseFontSize} onChange={val => setBaseFontSize(Number(val))} type="number" min={1} />
      </section>

      {/* CMS Toolbar */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-3">Live Text Styling Toolbar</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <button
            type="button"
            onClick={() => execCommand('bold')}
            className={`px-3 py-1 rounded border ${
              document.queryCommandState('bold') ? 'bg-red-600 text-white' : 'bg-white text-black'
            }`}
            aria-label="Bold"
            title="Bold"
          >
            B
          </button>
          <button
            type="button"
            onClick={() => execCommand('italic')}
            className={`px-3 py-1 rounded border ${
              document.queryCommandState('italic') ? 'bg-red-600 text-white' : 'bg-white text-black'
            }`}
            aria-label="Italic"
            title="Italic"
          >
            I
          </button>
          <button
            type="button"
            onClick={() => execCommand('underline')}
            className={`px-3 py-1 rounded border ${
              document.queryCommandState('underline') ? 'bg-red-600 text-white' : 'bg-white text-black'
            }`}
            aria-label="Underline"
            title="Underline"
          >
            U
          </button>

          {/* Font Family */}
          <select
            value={currentFontFamily}
            onChange={e => execCommand('fontName', e.target.value)}
            className="border rounded p-1 text-sm"
            aria-label="Font Family"
          >
            {FONT_FAMILIES.map(f => (
              <option key={f} value={f}>
                {f.split(',')[0]}
              </option>
            ))}
          </select>

          {/* Font Size */}
          <select
            value={currentFontSize}
            onChange={e => execCommand('fontSize', 7)} // execCommand fontSize supports only 1-7 so hack
            className="border rounded p-1 text-sm"
            aria-label="Font Size"
            onClick={e => {
              // workaround for true font size: insert span with inline style for font-size
              const size = e.target.value;
              const span = document.createElement('span');
              span.style.fontSize = size;
              const selection = window.getSelection();
              if (selection.rangeCount) {
                const range = selection.getRangeAt(0);
                range.deleteContents();
                range.insertNode(span);
              }
              e.preventDefault();
            }}
          >
            {FONT_SIZES.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          {/* Font Color */}
          <input
            type="color"
            value={currentFontColor}
            onChange={e => execCommand('foreColor', e.target.value)}
            title="Text Color"
            className="w-8 h-8 border rounded cursor-pointer"
          />

          {/* Background Color */}
          <input
            type="color"
            value={currentBgColor}
            onChange={e => execCommand('hiliteColor', e.target.value)}
            title="Highlight Color"
            className="w-8 h-8 border rounded cursor-pointer"
          />
        </div>
      </section>

      {/* Editable live preview box */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-3">Live Preview — Editable Text</h2>
        <div
          ref={previewRef}
          contentEditable
          suppressContentEditableWarning={true}
          onInput={onContentChange}
          style={{
            height: height ? `${height}${unit}` : 'auto',
            padding: padding ? `${padding}${unit}` : '0',
            backgroundColor: bgColor,
            color: fontColor,
            fontWeight,
            lineHeight: lineHeight ? `${lineHeight}${unit}` : 'normal',
            textAlign,
            borderRadius: borderRadius ? `${borderRadius}${unit}` : '0',
            boxShadow,
            fontFamily: currentFontFamily,
            fontSize: currentFontSize,
            outline: 'none',
            border: '1px solid #ddd',
            minHeight: '100px',
            overflowY: 'auto',
            transition: 'all 0.3s ease',
          }}
          className="w-full rounded p-3"
          aria-label="Editable preview box"
          spellCheck={true}
        >
          {/* dangerouslySetInnerHTML to preserve styling */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>

      {/* CSS code generator textarea + copy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Generated CSS Code</h2>
        <div className="relative">
          <textarea
            readOnly
            value={getCssCode()}
            rows={10}
            className="w-full bg-gray-200 dark:bg-zinc-800 p-4 rounded font-mono text-base resize-none"
          />
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 bg-black text-white rounded px-3 py-1 hover:bg-gray-800 transition"
            type="button"
          >
            {copied ? '✅ Copied' : '📋 Copy'}
          </button>
        </div>
      </section>
    </main>
  );
};

// Reusable Inputs
const Input = ({ label, value, onChange, type = 'number', unit }) => (
  <div>
    <label
      className="block font-medium mb-1"
      htmlFor={`input-${label.replace(/\s+/g, '').toLowerCase()}`}
    >
      {label}
    </label>
    <input
      id={`input-${label.replace(/\s+/g, '').toLowerCase()}`}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-3 border rounded text-lg"
      placeholder={`Enter ${label.toLowerCase()}`}
      min={type === 'number' ? '0' : undefined}
      aria-describedby={unit ? `${label}-unit` : undefined}
    />
    {unit && (
      <span id={`${label}-unit`} className="text-sm text-gray-500 ml-1">
        {unit}
      </span>
    )}
  </div>
);

const ColorInput = ({ label, value, onChange }) => (
  <div>
    <label
      className="block font-medium mb-1"
      htmlFor={`input-${label.replace(/\s+/g, '').toLowerCase()}`}
    >
      {label}
    </label>
    <input
      id={`input-${label.replace(/\s+/g, '').toLowerCase()}`}
      type="color"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full h-12 p-0 border rounded cursor-pointer"
      aria-label={label}
    />
  </div>
);

const Dropdown = ({ label, value, onChange, options }) => (
  <div>
    <label
      className="block font-medium mb-1"
      htmlFor={`select-${label.replace(/\s+/g, '').toLowerCase()}`}
    >
      {label}
    </label>
    <select
      id={`select-${label.replace(/\s+/g, '').toLowerCase()}`}
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

export default CssCodeGeneratorCMS;
