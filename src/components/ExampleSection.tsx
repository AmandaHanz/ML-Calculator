import React from 'react';

export const ExampleSection: React.FC = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto bg-white shadow-xl rounded-xl">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Practical Examples</h2>

      <div className="space-y-8">
        <section>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Gini Index vs Entropy in Decision Trees
          </h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              Let's examine how Gini and Entropy measures work in a real decision tree scenario using a fruit classification example.
            </p>

            <div className="p-6 mt-4 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-medium text-gray-900">Dataset: Fruit Classification</h4>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium text-left text-gray-700">ID</th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-gray-700">Weight (g)</th>
                    <th className="px-4 py-2 text-sm font-medium text-left text-gray-700">Class</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-4 py-2">1</td><td className="px-4 py-2">150</td><td className="px-4 py-2">Apple</td></tr>
                  <tr><td className="px-4 py-2">2</td><td className="px-4 py-2">160</td><td className="px-4 py-2">Apple</td></tr>
                  <tr><td className="px-4 py-2">3</td><td className="px-4 py-2">170</td><td className="px-4 py-2">Apple</td></tr>
                  <tr><td className="px-4 py-2">4</td><td className="px-4 py-2">180</td><td className="px-4 py-2">Orange</td></tr>
                  <tr><td className="px-4 py-2">5</td><td className="px-4 py-2">190</td><td className="px-4 py-2">Orange</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-medium text-gray-900">Split Analysis at 175g:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-50">
                  <h5 className="mb-2 font-medium text-cyan-900">Left Node (≤175g)</h5>
                  <p className="text-cyan-600">Contents: {'{A, A, A}'}</p>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-cyan-900">Gini Calculation:</p>
                    <p className="font-mono text-sm">1 - (1² + 0²) = 0</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-900">Entropy Calculation:</p>
                    <p className="font-mono text-sm">-1 × log₂(1) = 0</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-blue-50">
                  <h5 className="mb-2 font-medium text-cyan-900">Right Node (&gt;175g)</h5>
                  <p className="text-cyan-600">Contents: {'{O, O}'}</p>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-cyan-900">Gini Calculation:</p>
                    <p className="font-mono text-sm">1 - (1² + 0²) = 0</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-cyan-900">Entropy Calculation:</p>
                    <p className="font-mono text-sm">-1 × log₂(1) = 0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 font-medium text-gray-900">Overall Split Quality:</h4>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Weighted Gini:</p>
                    <p className="font-mono text-sm">
                      (3/5 × 0) + (2/5 × 0) = 0
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Weighted Entropy:</p>
                    <p className="font-mono text-sm">
                      (3/5 × 0) + (2/5 × 0) = 0
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Both measures indicate a perfect split, as each node contains only one class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Standard Deviation in Quality Control
          </h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">
              Consider a manufacturing process producing metal rods. The specification requires a length of 100mm ±2mm.
            </p>

            <div className="p-6 mt-4 rounded-lg bg-gray-50">
              <h4 className="mb-3 font-medium text-gray-900">Sample Measurements (mm):</h4>
              <p className="font-mono">99.8, 100.2, 99.9, 100.1, 100.0, 99.7, 100.3, 100.1, 99.8, 100.2</p>
              
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h5 className="mb-2 font-medium text-gray-900">Step-by-Step Calculations:</h5>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">1. Mean (μ):</p>
                      <p className="font-mono text-sm">
                        μ = (99.8 + 100.2 + ... + 100.2) ÷ 10 = 100.01
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">2. Deviations from Mean:</p>
                      <p className="font-mono text-sm">
                        (-0.21)², (0.19)², ..., (0.19)²
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">3. Standard Deviation:</p>
                      <p className="font-mono text-sm">
                        σ = √(∑(x - μ)² ÷ n) = 0.196
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700">4. Process Capability (Cp):</p>
                      <p className="font-mono text-sm">
                        Cp = (USL - LSL) ÷ (6σ) = (102 - 98) ÷ (6 × 0.196) = 1.70
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-blue-50">
                  <h5 className="mb-2 font-medium text-cyan-900">Interpretation:</h5>
                  <ul className="pl-6 list-disc text-cyan-700">
                    <li>Standard Deviation (0.196mm) indicates tight process control</li>
                    <li>Cp &gt; 1.33 suggests the process is capable</li>
                    <li>Mean (100.01mm) is very close to target (100mm)</li>
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