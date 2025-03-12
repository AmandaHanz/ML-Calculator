import React, { useState } from 'react';
import { Calculator, AlertCircle, Info, ChevronDown, ChevronUp, BookOpen, Calculator as CalcIcon, FileText } from 'lucide-react';
import {
  calculateGini,
  calculateEntropy,
  calculateStdDev,
  calculateMean,
  calculateMedian,
  calculateCV,
  calculateSkewness
} from '../utils/calculations';
import { ExampleSection } from '../components/ExampleSection';
import { TheorySection } from '../components/TheorySection';

interface CalculationInfo {
  name: string;
  value: number;
  description: string;
  equation: string;
}

const StatisticalCalculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [results, setResults] = useState<CalculationInfo[]>([]);
  const [error, setError] = useState<string>('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'theory' | 'examples'>('calculator');
  const [sampleDataset, setSampleDataset] = useState<string>('150, 160, 170, 180, 190');

  const parseInput = (input: string): number[] => {
    return input.split(',')
      .map(num => num.trim())
      .filter(num => num !== '')
      .map(num => parseFloat(num));
  };

  const validateInput = (values: number[]): boolean => {
    if (values.length === 0) {
      setError('Please enter some numbers');
      return false;
    }
    if (values.some(isNaN)) {
      setError('Please enter valid numbers');
      return false;
    }
    if (values.some(v => v < 0)) {
      setError('Please enter non-negative numbers');
      return false;
    }
    return true;
  };

  const calculate = () => {
    const values = parseInput(input || sampleDataset);
    if (!validateInput(values)) return;
    
    setError('');
    const calculations: CalculationInfo[] = [
      {
        name: 'Gini Coefficient',
        value: calculateGini(values),
        description: 'Measures statistical dispersion, commonly used in decision trees and economics to quantify inequality',
        equation: 'G = (∑(2i - n - 1)xᵢ) / (n²μ)'
      },
      {
        name: 'Entropy',
        value: calculateEntropy(values),
        description: 'Information theory metric measuring uncertainty or randomness in a dataset',
        equation: 'H = -∑(pᵢ × log₂(pᵢ))'
      },
      {
        name: 'Standard Deviation',
        value: calculateStdDev(values),
        description: 'Quantifies the amount of variation or dispersion in a dataset',
        equation: 'σ = √(∑(x - μ)² / N)'
      },
      {
        name: 'Mean',
        value: calculateMean(values),
        description: 'The average value, sum of all values divided by count',
        equation: 'μ = (∑xᵢ) / n'
      },
      {
        name: 'Median',
        value: calculateMedian(values),
        description: 'The middle value when data is sorted, robust to outliers',
        equation: 'Median = x[n/2] if n is odd, (x[n/2] + x[n/2 + 1])/2 if n is even'
      },
      {
        name: 'Coefficient of Variation',
        value: calculateCV(values),
        description: 'Standardized measure of dispersion relative to the mean',
        equation: 'CV = (σ / μ) × 100%'
      },
      {
        name: 'Skewness',
        value: calculateSkewness(values),
        description: 'Measures asymmetry of the probability distribution',
        equation: 'γ₁ = (n/((n-1)(n-2))) × ∑((x - μ)/σ)³'
      }
    ];
    
    setResults(calculations);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Calculator className="w-10 h-10 text-cyan-700" />
          <h1 className="text-3xl font-bold text-gray-900">Statistical Analysis Suite</h1>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'calculator'
                ? 'bg-cyan-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <CalcIcon className="w-5 h-5" />
            Calculator
          </button>
          <button
            onClick={() => setActiveTab('theory')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'theory'
                ? 'bg-cyan-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Theory
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'examples'
                ? 'bg-cyan-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            Examples
          </button>
        </div>

        {activeTab === 'calculator' && (
          <div className="max-w-4xl p-8 mx-auto bg-white shadow-xl rounded-xl">
            <div className="mb-8">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Enter Dataset (comma-separated numbers)
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={sampleDataset}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={calculate}
                  className="px-6 py-2 text-white transition-colors rounded-lg bg-cyan-600 hover:bg-cyan-800"
                >
                  Calculate
                </button>
              </div>
              {error && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}
            </div>

            {results.length > 0 && (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-4 transition-colors border border-gray-200 bg-gray-50 rounded-xl hover:border-blue-200"
                  >
                    <div 
                      className="flex items-start justify-between cursor-pointer"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{result.name}</h3>
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-bg-cyan-600">
                          {result.value.toFixed(4)}
                        </span>
                        {expandedIndex === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    {expandedIndex === index && (
                      <div className="pt-4 mt-4 border-t border-gray-200">
                        <p className="mb-3 text-sm text-gray-600">{result.description}</p>
                        <div className="p-4 bg-white border border-gray-200 rounded-lg">
                          <h4 className="mb-2 text-sm font-medium text-gray-700">Formula:</h4>
                          <p className="font-mono text-sm text-gray-800">
                            {result.equation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'theory' && <TheorySection />}
        {activeTab === 'examples' && <ExampleSection />}
      </div>
    </div>
  );
};

export default StatisticalCalculator;