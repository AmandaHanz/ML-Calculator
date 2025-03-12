
# Statistical Calculator 📊✨

Welcome to the **Statistical Calculator**! This is a sleek, React-based tool designed to perform essential statistical calculations with a professional and user-friendly interface. Built with precision and style, it’s perfect for data enthusiasts, analysts, and anyone who loves numbers! 🚀

---

## Overview 🌟

This project is a web-based statistical analysis suite that computes key metrics like Mean, Median, Standard Deviation, Gini Coefficient, Entropy, Coefficient of Variation, and Skewness. With a modern UI and a polished design, it’s both functional and visually appealing. 🎨

**Current Version:** `2.1`  
**Date:** March 12, 2025 📅

---

## Features 🎯

- **Supported Calculations** 🧮:
  - Mean (`μ = (∑xᵢ) / n`)
  - Median (middle value of sorted dataset)
  - Standard Deviation (`σ = √(∑(x - μ)² / N)`)
  - Gini Coefficient (`G = (∑(2i - n - 1)xᵢ) / (n²μ)`)
  - Entropy (`H = -∑(pᵢ × log₂(pᵢ))`)
  - Coefficient of Variation (`CV = (σ / μ) × 100%`)
  - Skewness (`γ₁ = (n/((n-1)(n-2))) × ∑((x - μ)/σ)³`)

- **User Interface** 💻:
  - Clean, professional design with  🌈
  - Responsive layout for desktops and tablets 📱
  - Interactive dropdowns, inputs, and buttons with smooth transitions ✨

- **Input Handling** 📝:
  - Accepts comma-separated numbers (e.g., `10, 20, 30`)
  - Robust validation with clear error messages 🚨

- **Extras** 🌐:
  - Theory and Examples sections (placeholder buttons for future content) 📚

---

## Installation ⚙️

Get started in just a few steps! Follow along to set up the project locally.

### Prerequisites
- Node.js (v16 or higher) 🟢
- npm or Yarn 📦

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AmandaHanz/ML-Calculator.git
   ```

2. **Navigate to the Project**:
   ```bash
   cd calculator
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```
   OR
   ```bash
   yarn install
   ```

4. **Run the App**:
   ```bash
   npm start
   ```
   OR
   ```bash
   yarn start
   ```
   🚀 The app will launch at `http://localhost:3000` in your browser!

---

## Usage 🖱️

1. **Select a Calculation**:
   - Use the dropdown to choose a statistical method (e.g., "Mean", "Entropy"). ⬇️

2. **Enter Your Data**:
   - Input comma-separated numbers in the text field (e.g., `150, 160, 170`). ✍️

3. **Calculate**:
   - Hit the "Calculate" button to see the result! 🟢
   - Results are displayed with 4 decimal precision. 🎉

4. **Explore More**:
   - Click "Theory" or "Examples" buttons for additional resources (coming soon!). 📖

### Example
- **Input**: `10, 20, 30, 40, 50`
- **Calculation**: Mean
- **Output**: `30.0000` ✅

---

## Project Structure 📂

```
statistical-calculator/
├── src/
│   ├── components/
│   │   ├── ExampleSection.js
│   │   └── TheorySection.js
│   ├── utils/
│   │   └── calculations.js
│   └── StatisticalCalculator.jsx
├── public/
└── README.md
```

- `StatisticalCalculator.jsx`: Main component with UI and logic 🧠
- `calculations.js`: Utility functions for statistical computations ⚡
- `components/`: Placeholder for future Theory and Example sections 🌱

---

## Phase 2

- Planned to add custom input fields according to the different equations!
---

## Contributing 🤝

We’d love your help to make this tool even better! Here’s how to contribute:

1. **Fork the Repo** 🍴
2. **Create a Branch**:
   ```bash
   git checkout -b feature/your-awesome-feature
   ```
3. **Commit Changes**:
   ```bash
   git commit -m "✨ Added a cool feature"
   ```
4. **Push to Your Fork**:
   ```bash
   git push origin feature/your-awesome-feature
   ```
5. **Open a Pull Request** 📬

---

## License 📜

This project is licensed under the MIT License. Feel free to use, modify, and share! 🌍

---

## Acknowledgments 🙌

- Built with [React](https://reactjs.org/) ⚛️
- Icons from [Lucide](https://lucide.dev/) 🎨
- Inspired by a passion for stats and clean design! ❤️

Happy calculating! 🎈  
Questions? Reach out at `amandahansamali18@gmail.com` 📧
```
