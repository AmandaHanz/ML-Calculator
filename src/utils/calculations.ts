// Gini Coefficient calculation
export const calculateGini = (values: number[]): number => {
  if (values.length === 0) return 0;
  
  const sortedValues = [...values].sort((a, b) => a - b);
  const n = sortedValues.length;
  let numerator = 0;
  
  for (let i = 0; i < n; i++) {
    numerator += (2 * i - n + 1) * sortedValues[i];
  }
  
  const mean = sortedValues.reduce((a, b) => a + b, 0) / n;
  return numerator / (Math.pow(n, 2) * mean);
};

// Shannon's Entropy calculation
export const calculateEntropy = (values: number[]): number => {
  if (values.length === 0) return 0;
  
  const total = values.reduce((a, b) => a + b, 0);
  const probabilities = values.map(v => v / total);
  
  return -probabilities.reduce((sum, p) => {
    if (p === 0) return sum;
    return sum + p * Math.log2(p);
  }, 0);
};

// Standard Deviation calculation
export const calculateStdDev = (values: number[]): number => {
  if (values.length === 0) return 0;
  
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const squareDiffs = values.map(value => Math.pow(value - mean, 2));
  const variance = squareDiffs.reduce((a, b) => a + b, 0) / values.length;
  
  return Math.sqrt(variance);
};

// Mean calculation
export const calculateMean = (values: number[]): number => {
  if (values.length === 0) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
};

// Median calculation
export const calculateMedian = (values: number[]): number => {
  if (values.length === 0) return 0;
  
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
};

// Coefficient of Variation
export const calculateCV = (values: number[]): number => {
  if (values.length === 0) return 0;
  
  const mean = calculateMean(values);
  const stdDev = calculateStdDev(values);
  
  return (stdDev / mean) * 100;
};

// Skewness calculation
export const calculateSkewness = (values: number[]): number => {
  if (values.length === 0) return 0;
  
  const mean = calculateMean(values);
  const stdDev = calculateStdDev(values);
  const n = values.length;
  
  const cubedDeviations = values.map(x => Math.pow((x - mean) / stdDev, 3));
  return (n / ((n - 1) * (n - 2))) * cubedDeviations.reduce((a, b) => a + b, 0);
};