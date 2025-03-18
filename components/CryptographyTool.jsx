// components/CryptographyTool.jsx
'use client';

import { useState, useEffect } from 'react';
import { algorithms } from '../lib/algorithms';

export default function CryptographyTool() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('caesar');
  const [mode, setMode] = useState('encrypt');
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');
  const [keyError, setKeyError] = useState('');

  // Process the cryptography operation
  const processOperation = () => {
    if (!inputText) {
      setResult('');
      return;
    }

    if (!validateKey()) {
      return;
    }

    const algorithm = algorithms[selectedAlgorithm];
    const operation = mode === 'encrypt' ? algorithm.encrypt : algorithm.decrypt;
    
    try {
      const processedResult = operation(inputText, key);
      setResult(processedResult);
    } catch (error) {
      console.error('Error in cryptography operation:', error);
      setResult('An error occurred during processing.');
    }
  };

  // Validate key based on selected algorithm
  const validateKey = () => {
    setKeyError('');
    const algorithm = algorithms[selectedAlgorithm];
    
    if (!key) {
      setKeyError('Key is required');
      return false;
    }

    switch (selectedAlgorithm) {
      case 'caesar':
        const shiftValue = parseInt(key, 10);
        if (isNaN(shiftValue) || shiftValue < 1 || shiftValue > 25) {
          setKeyError('Shift must be a number between 1 and 25');
          return false;
        }
        break;
      
      case 'hill':
        if (key.length !== 4) {
          setKeyError('Hill cipher key must be exactly 4 characters');
          return false;
        }
        break;
      
      case 'des':
        if (key.length < 8) {
          setKeyError('DES key should be at least 8 characters');
          return false;
        }
        break;
        
      case 'aes':
        if (key.length < 16) {
          setKeyError('AES key should be at least 16 characters');
          return false;
        }
        break;
    }
    
    return true;
  };

  // Process operation whenever inputs change
  useEffect(() => {
    processOperation();
  }, [selectedAlgorithm, mode, inputText, key]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Cryptography Tool</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Algorithm Selection */}
        <div className="flex-1">
          <label className="block mb-2 font-medium">Algorithm</label>
          <select
            value={selectedAlgorithm}
            onChange={(e) => {
              setSelectedAlgorithm(e.target.value);
              setKey(''); // Reset key when algorithm changes
              setKeyError('');
            }}
            className="w-full p-2 border rounded"
          >
            {Object.entries(algorithms).map(([id, algo]) => (
              <option key={id} value={id}>
                {algo.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Operation Mode */}
        <div className="flex-1">
          <label className="block mb-2 font-medium">Mode</label>
          <div className="flex">
            <button
              onClick={() => setMode('encrypt')}
              className={`flex-1 p-2 border rounded-l ${
                mode === 'encrypt' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              Encrypt
            </button>
            <button
              onClick={() => setMode('decrypt')}
              className={`flex-1 p-2 border rounded-r ${
                mode === 'decrypt' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              Decrypt
            </button>
          </div>
        </div>
      </div>
      
      {/* Key Input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Key</label>
        <input
          type={algorithms[selectedAlgorithm].keyType === 'number' ? 'number' : 'text'}
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder={algorithms[selectedAlgorithm].keyPlaceholder}
          className="w-full p-2 border rounded"
        />
        {keyError && <p className="text-red-500 text-sm mt-1">{keyError}</p>}
      </div>
      
      {/* Text Input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">
          {mode === 'encrypt' ? 'Text to Encrypt' : 'Text to Decrypt'}
        </label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={mode === 'encrypt' ? 'Enter text to encrypt' : 'Enter text to decrypt'}
          className="w-full p-2 border rounded min-h-32"
        />
      </div>
      
      {/* Result */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Result</label>
        <div className="w-full p-3 bg-gray-100 border rounded min-h-32 whitespace-pre-wrap break-all text-gray-800">
          {result || 'Result will appear here'}
        </div>
      </div>
      
      {/* Copy Result Button */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            navigator.clipboard.writeText(result);
            alert('Result copied to clipboard!');
          }}
          disabled={!result}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Copy Result
        </button>
      </div>
    </div>
  );
}