Calcify - A mini calculator

A simple, clean, and responsive Calculator Web Application built using HTML, CSS, and Vanilla JavaScript. This project performs basic arithmetic operations and handles common edge cases to prevent invalid calculations.

Features

~ Basic arithmetic operations: Addition, Subtraction, Multiplication, Division
~ Percentage (%) calculation (simple percentage logic)
~ AC (All Clear) and DEL (Delete last digit) functionality
~ Prevents multiple operators in sequence
~ Error handling for invalid expressions
~ Clean and user-friendly UI

Technologies Used

~ HTML5 – Structure
~ CSS3 – Styling & layout
~ JavaScript (ES6) – Logic & functionality

Project Structure

calculator-project/
│
├── index.html # Calculator UI structure
├── index.css # Styling
├── index.js # Calculator logic
└── README.md # Project documentation

How It Works

~ Users interact with calculator buttons.
~ Button values are stored and displayed dynamically.
~ JavaScript validates input to avoid invalid operations.
~ Expression is evaluated safely and result is displayed.

Example

Input: 50%
Output: 0.5

Input: 12 + 8
Output: 20

Limitations

~ Percentage (%) works only as a standalone value (e.g., 50% → 0.5)
~ Keyboard input is not supported
~ Decimal validation (multiple dots) is not implemented




