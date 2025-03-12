import React from 'react';

export const TheorySection: React.FC = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto bg-white shadow-xl rounded-xl">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Statistical Measures: Theoretical Background</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Gini Coefficient</h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              The Gini coefficient is a statistical measure of dispersion developed by Italian statistician Corrado Gini. 
              It's commonly used in:
            </p>
            <ul className="pl-6 mt-2 text-gray-600 list-disc">
              <li>Economics: Measuring income inequality</li>
              <li>Machine Learning: Decision tree splitting criteria</li>
              <li>Data Analysis: Quantifying distribution inequality</li>
            </ul>
            <div className="p-4 mt-4 rounded-lg bg-blue-50">
              <h4 className="mb-2 font-medium text-cyan-900">Mathematical Definition:</h4>
              <div className="p-4 bg-white rounded-lg">
                <p className="mb-2 font-mono text-sm">G = (∑(2i - n - 1)xᵢ) / (n²μ)</p>
                <p className="text-sm text-gray-600">Where:</p>
                <ul className="pl-4 text-sm text-gray-600 list-none">
                  <li>• i = rank of value in ascending order (starting from 1)</li>
                  <li>• n = number of values</li>
                  <li>• xᵢ = value at rank i</li>
                  <li>• μ = mean of all values</li>
                </ul>
              </div>
              <h4 className="mt-4 mb-2 font-medium text-cyan-800">Key Properties:</h4>
              <ul className="pl-6 list-disc text-cyan-700">
                <li>Ranges from 0 (perfect equality) to 1 (perfect inequality)</li>
                <li>Scale-invariant: Unchanged by uniform scaling</li>
                <li>Transfer principle: Sensitive to wealth transfers</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Entropy</h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              Entropy, derived from information theory, measures the average information content or uncertainty in a dataset.
              Originally introduced by Claude Shannon, it has applications in:
            </p>
            <ul className="pl-6 mt-2 text-gray-600 list-disc">
              <li>Information Theory: Data compression and transmission</li>
              <li>Machine Learning: Feature selection and decision trees</li>
              <li>Statistical Mechanics: Measuring system disorder</li>
            </ul>
            <div className="p-4 mt-4 rounded-lg bg-blue-50">
              <h4 className="mb-2 font-medium text-cyan-900">Mathematical Definition:</h4>
              <div className="p-4 bg-white rounded-lg">
                <p className="mb-2 font-mono text-sm">H = -∑(pᵢ × log₂(pᵢ))</p>
                <p className="text-sm text-gray-600">Where:</p>
                <ul className="pl-4 text-sm text-gray-600 list-none">
                  <li>• pᵢ = probability of event i</li>
                  <li>• log₂ = logarithm with base 2</li>
                  <li>• ∑ = sum over all possible events</li>
                </ul>
              </div>
              <h4 className="mt-4 mb-2 font-medium text-cyan-900">Characteristics:</h4>
              <ul className="pl-6 list-disc text-cyan-700">
                <li>Non-negative: Always ≥ 0</li>
                <li>Maximum for uniform distribution</li>
                <li>Additive for independent events</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Standard Deviation & Variance</h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              Standard deviation measures the amount of variation in a dataset. It's the square root of variance,
              making it particularly useful for:
            </p>
            <div className="p-4 mt-4 rounded-lg bg-blue-50">
              <h4 className="mb-2 font-medium text-cyan-900">Mathematical Definitions:</h4>
              <div className="p-4 bg-white rounded-lg">
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Standard Deviation:</p>
                  <p className="mb-2 font-mono text-sm">σ = √(∑(x - μ)² / N)</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">Variance:</p>
                  <p className="mb-2 font-mono text-sm">σ² = ∑(x - μ)² / N</p>
                </div>
                <p className="text-sm text-gray-600">Where:</p>
                <ul className="pl-4 text-sm text-gray-600 list-none">
                  <li>• x = individual value</li>
                  <li>• μ = mean of the dataset</li>
                  <li>• N = number of values</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Coefficient of Variation (CV)</h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              The coefficient of variation is a standardized measure of dispersion that allows comparison between datasets with different units or means.
            </p>
            <div className="p-4 mt-4 rounded-lg bg-blue-50">
              <h4 className="mb-2 font-medium text-cyan-900">Mathematical Definition:</h4>
              <div className="p-4 bg-white rounded-lg">
                <p className="mb-2 font-mono text-sm">CV = (σ / μ) × 100%</p>
                <p className="text-sm text-gray-600">Where:</p>
                <ul className="pl-4 text-sm text-gray-600 list-none">
                  <li>• σ = standard deviation</li>
                  <li>• μ = mean</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Skewness</h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              Skewness measures the asymmetry of the probability distribution of a dataset around its mean.
            </p>
            <div className="p-4 mt-4 rounded-lg bg-blue-50">
              <h4 className="mb-2 font-medium text-cyan-900">Mathematical Definition:</h4>
              <div className="p-4 bg-white rounded-lg">
                <p className="mb-2 font-mono text-sm">γ₁ = (n/((n-1)(n-2))) × ∑((x - μ)/σ)³</p>
                <p className="text-sm text-gray-600">Where:</p>
                <ul className="pl-4 text-sm text-gray-600 list-none">
                  <li>• n = sample size</li>
                  <li>• x = individual value</li>
                  <li>• μ = mean</li>
                  <li>• σ = standard deviation</li>
                </ul>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700">Interpretation:</p>
                  <ul className="pl-6 text-sm text-gray-600 list-disc">
                    <li>γ₁ &gt; 0: Right-skewed (positive skew)</li>
                    <li>γ₁ &lt; 0: Left-skewed (negative skew)</li>
                    <li>γ₁ = 0: Symmetric distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};