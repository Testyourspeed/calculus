const questions = [
    // Round 1
    [
        {
            question: "Find the derivative of f(x) = 3x^2 - 5x + 7",
            options: ["6x - 5", "6x + 5", "3x - 5", "3x + 5"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = 2x?",
            options: ["x^2 + C", "2x^2 + C", "x^2", "x + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = sin(x) + cos(x)",
            options: ["cos(x) - sin(x)", "-cos(x) - sin(x)", "cos(x) + sin(x)", "-cos(x) + sin(x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^x?",
            options: ["e^x + C", "e^x", "x * e^x + C", "x^2 + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x)",
            options: ["1/x", "x", "1", "x^2"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "Find the integral of f(x) = 3x^2 + 5x - 1",
            options: ["x^3 + (5/2)x^2 - x + C", "x^3 + 5x^2 - x + C", "x^3 + (5/2)x^2 - x", "x^3 + x^2 - x + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^3 + 5x^2 - 3x + 2",
            options: ["6x + 10", "6x^2 + 10", "6x^2 + 10x", "6x + 10x"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = cos(x)",
            options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "tan(x) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = e^(2x)?",
            options: ["2e^(2x)", "e^(2x)", "e^(x)", "2x * e^(2x)"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = 1/x",
            options: ["ln|x| + C", "ln(x) + C", "x + C", "x^2 + C"],
            correct: 0,
        },
    ],

    // Round 3
    [
        {
            question: "Find the derivative of f(x) = x^4 - 2x^3 + x^2 - 5",
            options: ["4x^3 - 6x^2 + 2x", "4x^3 - 6x^2 + 2x - 5", "4x^3 + 6x^2 - 2x", "3x^2 - 2x + 1"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = 5x^3 - 2x^2 + 3x - 1",
            options: ["(5/4)x^4 - (2/3)x^3 + (3/2)x^2 - x + C", "(5/4)x^4 - (2/3)x^3 + (3/2)x^2 + x + C", "(5/4)x^4 + (2/3)x^3 + (3/2)x^2 - x + C", "(5/4)x^4 + (2/3)x^3 + (3/2)x^2 + x + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = tan(x)?",
            options: ["sec^2(x)", "cos(x)", "sin(x)", "tan^2(x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = sec^2(x)?",
            options: ["tan(x) + C", "-tan(x) + C", "sec(x) + C", "ln|sec(x)| + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 2x^4 - 5x^2 + 3x - 7",
            options: ["24x^2 - 10", "8x^3 - 10x", "24x^3 - 10x", "24x^2 - 10x"],
            correct: 0,
        },
    ],

    // Round 4
    [
        {
            question: "What is the derivative of f(x) = ln(x^2 + 1)?",
            options: ["2x/(x^2 + 1)", "2x/(x^2 - 1)", "x/(x^2 + 1)", "1/(x^2 + 1)"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = x^2 sin(x)",
            options: ["-x^2 cos(x) + 2x sin(x) + cos(x) + C", "x^2 cos(x) - 2x sin(x) - cos(x) + C", "x^2 cos(x) - 2x sin(x) + C", "-x^2 cos(x) + 2x sin(x) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x * ln(x)?",
            options: ["ln(x) + 1", "1/x", "ln(x) - 1", "x * (1/x)"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = 1/(x * ln(x))",
            options: ["ln(ln(x)) + C", "ln(x) + C", "1/x + C", "ln(x) + ln(x) + C"],
            correct: 0,
        },
        {
            question: "What is the second derivative of f(x) = x^2 sin(x)?",
            options: ["2x cos(x) - x^2 sin(x)", "2x cos(x) + x^2 sin(x)", "2x cos(x) - 2x sin(x)", "x^2 cos(x) + 2x sin(x)"],
            correct: 0,
        },
    ],
  // Round 5
    [
        {
            question: "Find the derivative of f(x) = e^(x^2)",
            options: ["2x * e^(x^2)", "e^(x^2)", "x * e^(x^2)", "2x * e^(x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = x * e^(x)?",
            options: ["x * e^(x) - e^(x) + C", "e^(x) * x + C", "x * e^(x) + C", "e^(x) * x - C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 5x^3 - 3x^2 + 4x - 7",
            options: ["30x - 6", "30x^2 - 6x", "30x^2 - 6", "30x^2 + 4x"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = ln(x^3)?",
            options: ["3/x", "1/x^3", "3x^2", "1/x"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = cos(x^2)",
            options: ["(1/2)sin(x^2) + C", "sin(x^2) + C", "cos(x^2) + C", "(1/2)cos(x^2) + C"],
            correct: 0,
        },
    ],

    // Round 6
    [
        {
            question: "Find the integral of f(x) = 1/(x * ln(x)^2)",
            options: ["ln(ln(x)) + C", "1/ln(x) + C", "ln(ln(x)^2) + C", "1/x * ln(x) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x * ln(x^2)?",
            options: ["2 * ln(x)", "ln(x^2) + x * 2/x", "ln(x^2) + 2", "2 * ln(x) + 1"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = x^2 * ln(x)",
            options: ["(x^3 / 3) * ln(x) - x^3 / 9 + C", "(x^3 / 3) * ln(x) + C", "(x^3 / 2) * ln(x) - x^2 + C", "(x^3 / 3) * ln(x) + x^2 + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = tan^2(x)?",
            options: ["2 * tan(x) * sec^2(x)", "2 * tan(x) * sec(x)", "2 * sec^2(x)", "2 * tan(x)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 3x^4 - 2x^3 + 5x^2",
            options: ["36x^2 - 12x + 10", "36x^3 - 12x", "12x^3 - 6x + 10", "12x^3 - 6x"],
            correct: 0,
        },
    ],

    // Round 7
    [
        {
            question: "Find the integral of f(x) = 2x * e^(3x)",
            options: ["(2/3) * e^(3x) * (x - 1/3) + C", "(2/3) * e^(3x) + C", "(2/3) * e^(3x) * x + C", "(2/3) * e^(3x) * x + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = (x^2 + 1)^5",
            options: ["10x(x^2 + 1)^4", "5x(x^2 + 1)^4", "5x^2(x^2 + 1)^4", "10x^2(x^2 + 1)^4"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = sin(x^3)?",
            options: ["-(1/3)cos(x^3) + C", "cos(x^3) + C", "-(1/2)sin(x^3) + C", "sin(x^3) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 4x^2 + 3x - 5",
            options: ["8x + 3", "8x - 3", "8x", "6x - 5"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = e^(3x) * sin(x)",
            options: ["3 * e^(3x) * sin(x) + e^(3x) * cos(x)", "e^(3x) * cos(x) - 3 * e^(3x) * sin(x)", "3 * e^(3x) * cos(x) - e^(3x) * sin(x)", "e^(3x) * sin(x) + 3 * e^(3x) * cos(x)"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "What is the derivative of f(x) = x^3 * ln(x)?",
            options: ["3x^2 * ln(x) + x^2", "3x^2 * ln(x) + x^3 / x", "3x^2 * ln(x) + x", "3x^2 * ln(x) + x * ln(x)"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = x * e^(2x)",
            options: ["(x/2) * e^(2x) - (1/2) * e^(2x) + C", "(1/2) * e^(2x) * x + C", "(1/2) * e^(2x) + C", "(x/2) * e^(2x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 5x^5 - 4x^3 + 2x",
            options: ["100x^3 - 12x", "100x^4 - 12x^2", "100x^3 + 12x", "100x^2 - 12x"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = cos^2(x)?",
            options: ["(1/2) * (x + sin(2x)/2) + C", "(1/2) * (x - sin(2x)/2) + C", "(1/2) * (x + sin(2x)) + C", "(1/2) * (x - sin(2x)) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = sec^2(x)?",
            options: ["2 * sec^2(x) * tan(x)", "2 * sec(x) * tan(x)", "sec^2(x) * tan(x)", "2 * sec(x) * tan(x)"],
            correct: 0,
        },
    ],

    // Round 9
    [
        {
            question: "Find the integral of f(x) = x^2 * cos(x)",
            options: ["(x^2 * sin(x) - 2x * cos(x)) + C", "x^2 * sin(x) + C", "(x^2 * sin(x) + 2x * cos(x)) + C", "(x^2 * sin(x) - 2x * cos(x)) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x * cos(x)?",
            options: ["cos(x) - x * sin(x)", "cos(x) + x * sin(x)", "cos(x) - x * cos(x)", "sin(x) - x * cos(x)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^3 + 2x^2 - 3x + 4",
            options: ["6x + 4", "6x^2 + 4", "6x^2 - 6", "6x + 4"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = tan(x)?",
            options: ["-ln|cos(x)| + C", "ln|sin(x)| + C", "ln|cos(x)| + C", "-ln|sin(x)| + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = 1/x^2",
            options: ["-2/x^3", "-2/x^2", "2/x^3", "-2/x"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "What is the integral of f(x) = x^2 * ln(x)?",
            options: ["(x^3 / 3) * ln(x) - (x^3 / 9) + C", "(x^3 / 3) * ln(x) + C", "(x^3 / 3) * ln(x) + (x^2 / 2) + C", "(x^3 / 3) * ln(x) - x^2 + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 4x^3 + 3x^2 - 2x + 7",
            options: ["24x + 6", "24x^2 + 6", "24x^3 + 6", "24x^2 + 6x"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = tan(x^2)?",
            options: ["2x * sec^2(x^2)", "2x * sec(x^2)", "sec^2(x^2)", "2 * sec^2(x)"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = 3x * cos(x)",
            options: ["(3x * sin(x) - 3 * cos(x)) + C", "(3x * sin(x) + 3 * cos(x)) + C", "(3x * sin(x) + 3 * cos(x)) - C", "(3x * sin(x) - 3 * cos(x)) - C"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^x * cos(x)?",
            options: ["(e^x * cos(x) - e^x * sin(x)) + C", "(e^x * sin(x) + e^x * cos(x)) + C", "(e^x * cos(x) + e^x * sin(x)) + C", "(e^x * cos(x) - e^x * sin(x)) - C"],
            correct: 0,
        },
    ],
  // Round 11
    [
        {
            question: "Find the derivative of f(x) = ln(x^2 + 1)",
            options: ["(2x) / (x^2 + 1)", "2x / (x^2 + 1)^2", "x / (x^2 + 1)", "2 / (x^2 + 1)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = x^3 * e^(x^2)?",
            options: ["(e^(x^2) * x^4)/4 + C", "(e^(x^2) * x^3)/3 + C", "(e^(x^2) * x^3)/4 + C", "(e^(x^2) * x^4)/5 + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = tan(x^3)?",
            options: ["3x^2 * sec^2(x^3)", "3x * sec^2(x^3)", "3x^3 * sec(x^3)", "sec^2(x^3)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = 2x * sin(3x)?",
            options: ["(-2/3) * cos(3x) + C", "(2/3) * cos(3x) + C", "(-2/3) * cos(3x) - C", "(2/3) * sin(3x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^4 - 2x^3 + 5x^2 - 7x + 6",
            options: ["12x^2 - 18x + 10", "12x^2 - 18x + 5", "12x^2 - 6x + 5", "12x^2 - 18x + 4"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "Find the integral of f(x) = x^2 * e^(x)",
            options: ["(x^2 * e^(x)) - 2 * e^(x) + C", "(x^2 * e^(x)) + C", "(x^2 * e^(x)) - e^(x) + C", "(x^2 * e^(x)) + x * e^(x) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = 5 * x^3 * ln(x)",
            options: ["15x^2 * ln(x) + 5x^2", "15x^2 * ln(x) + 5x", "15x^2 * ln(x) + 5x", "15x^2 * ln(x) - 5x"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(x^2)?",
            options: ["(1/2)e^(x^2) + C", "e^(x^2) + C", "(1/2) * e^(x^2) + C", "The integral does not have a simple solution"],
            correct: 3,
        },
        {
            question: "Find the second derivative of f(x) = 3x^4 - 4x^2 + 2x",
            options: ["12x^3 - 8x + 2", "12x^3 - 4x + 2", "12x^3 - 8x", "12x^3 - 4x + 3"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x * sin(x^2)?",
            options: ["2x * cos(x^2) + sin(x^2)", "2x * cos(x^2)", "sin(x^2) + 2x * cos(x^2)", "2x * cos(x^2) + x * cos(x^2)"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "What is the integral of f(x) = x^2 * ln(x^2)?",
            options: ["(x^3 / 3) * ln(x^2) - (x^3 / 9) + C", "(x^3 / 3) * ln(x^2) + C", "(x^3 / 3) * ln(x^2) + (x^2 / 2) + C", "(x^3 / 3) * ln(x^2) + x^2 + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 3x^5 - 2x^3 + 5x",
            options: ["30x^3 - 12x", "30x^4 - 12x + 5", "30x^3 - 12x + 5", "30x^2 - 12x"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = e^(3x) * cos(2x)?",
            options: ["3 * e^(3x) * cos(2x) - 2 * e^(3x) * sin(2x)", "3 * e^(3x) * cos(2x) + 2 * e^(3x) * sin(2x)", "3 * e^(3x) * cos(2x) + 2 * e^(3x) * cos(2x)", "3 * e^(3x) * cos(2x) + 2 * e^(3x) * cos(x)"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = e^(x) * ln(x)?",
            options: ["e^(x) * ln(x) - e^(x) / x + C", "e^(x) * ln(x) + C", "e^(x) * ln(x) + x * e^(x) + C", "e^(x) * ln(x) + x * e^(x) / 2 + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = (x^2 + 3x)^4?",
            options: ["4(x^2 + 3x)^3(2x + 3)", "4(x^2 + 3x)^3(2x + 6)", "4(x^2 + 3x)^3(2x + 2)", "4(x^2 + 3x)^3(2x)"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "What is the integral of f(x) = cos(2x) * sin(3x)?",
            options: ["(1/5) * cos(2x) * cos(3x) + C", "(1/5) * sin(2x) * cos(3x) + C", "(1/5) * cos(5x) + C", "(1/5) * sin(2x) * cos(5x) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = tan(x) * ln(x)?",
            options: ["sec^2(x) * ln(x) + tan(x)/x", "sec^2(x) * ln(x) + tan(x) * 1/x", "sec^2(x) + tan(x)/x", "sec^2(x) * ln(x) + tan(x)/x^2"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = x^3 * ln(x^2)?",
            options: ["(x^4 / 4) * ln(x^2) - (x^4 / 16) + C", "(x^4 / 4) * ln(x^2) + C", "(x^4 / 4) * ln(x^2) - (x^3 / 3) + C", "(x^4 / 4) * ln(x^2) + (x^2 / 2) + C"],
            correct: 0,
        },
        {
            question: "What is the second derivative of f(x) = 2x^4 - 3x^3 + 4x^2 - 5x + 7?",
            options: ["24x^2 - 18x + 8", "24x^3 - 18x + 8", "24x^2 - 18x", "24x^3 - 18x"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = 4x * sin(x^2)?",
            options: ["8x * cos(x^2) + 4 * sin(x^2)", "8x * cos(x^2)", "4x * cos(x^2)", "8x * cos(x^2) + 4x * sin(x^2)"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "Find the integral of f(x) = e^(x) * x^2?",
            options: ["e^(x) * (x^2 - 2x + 2) + C", "e^(x) * (x^2 + 2x + 1) + C", "e^(x) * x^2 + C", "e^(x) * (x^2 - 2) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x^2 * tan(x)?",
            options: ["2x * tan(x) + x^2 * sec^2(x)", "2x * tan(x) + x^2 * sec(x)", "2x * sec^2(x)", "x^2 * sec^2(x) + 2x * sec(x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = 1 / (x * ln(x))?",
            options: ["ln(ln(x)) + C", "ln(x) + C", "ln(x^2) + C", "ln(x) / ln(x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 5x^6 - 3x^4 + 2x^3",
            options: ["30x^5 - 12x^3 + 12x^2", "30x^5 - 12x^3 + 6x", "30x^5 - 12x^3", "30x^5 - 12x^3 + 6x^2"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = cos^3(x)?",
            options: ["-3 * cos^2(x) * sin(x)", "3 * cos^2(x) * sin(x)", "-3 * sin(x) * cos^2(x)", "-3 * cos^2(x) * sin(x)"],
            correct: 0,
        },
    ],
   // Round 16
    [
        {
            question: "Find the integral of f(x) = x * cos(2x)",
            options: ["(x/2) * sin(2x) + C", "sin(2x) + (x/2) * cos(2x) + C", "(x/2) * cos(2x) + C", "(x/2) * sin(2x) + x * cos(2x) + C"],
            correct: 0,
        },
        {
            question: "What is the second derivative of f(x) = e^(2x) * sin(x)?",
            options: ["2e^(2x) * sin(x) + e^(2x) * cos(x)", "e^(2x) * sin(x) + e^(2x) * cos(x)", "e^(2x) * cos(x) - 2e^(2x) * sin(x)", "e^(2x) * cos(x) + 2e^(2x) * sin(x)"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = (x^2 + 1)^(1/2) * ln(x)?",
            options: ["(1/2) * (x^2 + 1)^(-1/2) * 2x * ln(x) + (1/x)", "x * (x^2 + 1)^(-1/2) * ln(x) + (1/x)", "2x * (x^2 + 1)^(-1/2) * ln(x) + (1/x)", "x * (x^2 + 1)^(-1/2) * ln(x) + (2/x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = sin(x) * e^(2x)?",
            options: ["(1/5) * e^(2x) * sin(x) - (2/5) * e^(2x) * cos(x) + C", "(1/5) * e^(2x) * sin(x) + (2/5) * e^(2x) * cos(x) + C", "(1/3) * e^(2x) * sin(x) + (2/5) * e^(2x) * cos(x) + C", "(1/3) * e^(2x) * sin(x) - (2/5) * e^(2x) * cos(x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^5 - 5x^3 + 4x^2 - 3x + 2",
            options: ["20x^3 - 30x + 8", "20x^3 - 30x + 4", "20x^3 - 12x + 8", "20x^3 - 30x + 4x"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "Find the integral of f(x) = 4x * e^(-x^2)",
            options: ["-(1/2) * e^(-x^2) + C", "-(1/2) * e^(-x^2) - C", "(1/2) * e^(-x^2) + C", "(1/2) * e^(-x^2) - C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = sin(x) * ln(x^2 + 1)?",
            options: ["cos(x) * ln(x^2 + 1) + 2x * sin(x) / (x^2 + 1)", "cos(x) * ln(x^2 + 1) + 2x * sin(x)", "cos(x) * ln(x^2 + 1) - 2x * sin(x)", "cos(x) * ln(x^2 + 1) + 2x * cos(x) / (x^2 + 1)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^6 - 7x^4 + 3x^2 - x",
            options: ["30x^4 - 28x^2 + 6", "30x^4 - 28x^2 + 2", "30x^4 - 14x^2 + 6", "30x^4 - 14x^2 + 2"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = x * cos(3x)?",
            options: ["(1/10) * sin(3x) + C", "(1/9) * cos(3x) + C", "(1/9) * sin(3x) + C", "(1/6) * sin(3x) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = e^(x^3)?",
            options: ["3x^2 * e^(x^3)", "e^(x^3) * 3x", "3 * e^(x^3)", "3x * e^(x^3)"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "Find the integral of f(x) = ln(x) * e^x",
            options: ["(e^x * ln(x)) - e^x + C", "(e^x * ln(x)) + C", "(e^x * ln(x)) - x + C", "(e^x * ln(x)) + x + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^4 - 4x^3 + 3x^2 - 2x + 1",
            options: ["12x^2 - 24x + 6", "12x^2 - 24x + 8", "12x^2 - 18x + 6", "12x^2 - 18x + 4"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x^2 * sin(2x)?",
            options: ["2x * sin(2x) + 2x^2 * cos(2x)", "2x * sin(2x) + 2x * cos(2x)", "2x * cos(2x) + 2x^2 * sin(2x)", "2x * sin(2x) - 2x^2 * cos(2x)"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = x^2 * e^(x^2)",
            options: ["(1/2) * e^(x^2) + C", "(1/2) * e^(x^2) * x + C", "(1/3) * e^(x^2) * x^2 + C", "(1/3) * e^(x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = (sin(x))^2?",
            options: ["2 * sin(x) * cos(x)", "cos(x)^2", "2 * cos(x) * sin(x)", "2 * cos(x) * sin(x)"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "Find the integral of f(x) = x^3 * e^(-x^2)",
            options: ["-(1/2) * e^(-x^2) * x^2 + C", "-(1/4) * e^(-x^2) * x^4 + C", "(1/4) * e^(-x^2) * x^4 + C", "(1/3) * e^(-x^2) * x^3 + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^2 * ln(x)",
            options: ["(1/x) + (2/x^2)", "(2/x) + (1/x^2)", "(1/x^2) + (1/x)", "(2/x) + (2/x^2)"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x * ln(x^2 + 2x)?",
            options: ["ln(x^2 + 2x) + (2x + 2) / (x^2 + 2x)", "ln(x^2 + 2x) + (2x + 2) * x / (x^2 + 2x)", "ln(x^2 + 2x) + 2 / (x^2 + 2x)", "ln(x^2 + 2x) + (2x + 2) * x"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = x^2 * e^(x^2)?",
            options: ["(1/2) * e^(x^2) + C", "(1/2) * e^(x^2) * x + C", "(1/3) * e^(x^2) * x^2 + C", "(1/3) * e^(x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = e^x * sin(x^2)?",
            options: ["e^x * cos(x^2) * 2x + e^x * sin(x^2)", "e^x * sin(x^2) * 2x + e^x * cos(x^2)", "e^x * cos(x^2) * 2x + e^x * sin(x^2)", "e^x * cos(x^2) * 2x"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "What is the integral of f(x) = x * sin(x^2)?",
            options: ["(1/2) * cos(x^2) + C", "-(1/2) * cos(x^2) + C", "(1/2) * sin(x^2) + C", "-(1/2) * sin(x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = x^3 * cos(x^2)?",
            options: ["3x^2 * cos(x^2) - 2x^4 * sin(x^2)", "3x^2 * cos(x^2) - 2x^3 * sin(x^2)", "3x^2 * cos(x^2) + 2x^4 * sin(x^2)", "3x^2 * cos(x^2) + 2x^3 * sin(x^2)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = x^3 * ln(x)?",
            options: ["(x^4 / 4) * ln(x) - (x^4 / 16) + C", "(x^4 / 4) * ln(x) + C", "(x^4 / 4) * ln(x) + (x^2 / 2) + C", "(x^4 / 4) * ln(x) + x^2 + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 6x^4 - 3x^3 + 2x^2 - x",
            options: ["72x^2 - 18x + 4", "72x^2 - 9x + 4", "72x^2 - 18x + 3", "72x^2 - 9x + 4"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = e^(2x) * ln(x)?",
            options: ["e^(2x) * ln(x) * 2 + e^(2x) / x", "e^(2x) * ln(x) * 2 - e^(2x) / x", "e^(2x) * ln(x) + e^(2x) / x", "e^(2x) * ln(x) + 2e^(2x) / x"],
            correct: 0,
        },
    ],
  // Round 21
    [
        {
            question: "Find the integral of f(x) = 2x * e^(x^2)",
            options: ["e^(x^2) + C", "e^(x^2) * x + C", "e^(x^2) / 2 + C", "e^(x^2) * 2x + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = sin(3x) * cos(2x)",
            options: ["3cos(3x) * cos(2x) - 2sin(3x) * sin(2x)", "3cos(3x) * cos(2x) + 2sin(3x) * sin(2x)", "2cos(3x) * cos(2x) - 3sin(3x) * sin(2x)", "3cos(3x) * sin(2x) - 2sin(3x) * cos(2x)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 5x^3 - 2x^2 + x - 7",
            options: ["30x^2 - 4x + 1", "30x^2 - 4x", "30x^2 - 4x - 1", "30x^2 - 2x + 1"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(3x) * cos(x)?",
            options: ["(1/10) * e^(3x) * cos(x) - (3/10) * e^(3x) * sin(x) + C", "(1/10) * e^(3x) * cos(x) + (3/10) * e^(3x) * sin(x) + C", "(1/5) * e^(3x) * cos(x) + (3/10) * e^(3x) * sin(x) + C", "(1/5) * e^(3x) * cos(x) - (3/10) * e^(3x) * sin(x) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x^2 * ln(x^2 + 1)?",
            options: ["2x * ln(x^2 + 1) + 2x^3 / (x^2 + 1)", "2x * ln(x^2 + 1) + 2x / (x^2 + 1)", "2x * ln(x^2 + 1) - 2x / (x^2 + 1)", "2x * ln(x^2 + 1) + 2x^2 / (x^2 + 1)"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "Find the integral of f(x) = x * ln(x^3 + 2x)?",
            options: ["x * ln(x^3 + 2x) - 3x^2 / (x^3 + 2x)", "x * ln(x^3 + 2x) - 2x^2 / (x^3 + 2x)", "x * ln(x^3 + 2x) - x^2 / (x^3 + 2x)", "x * ln(x^3 + 2x) - x^2 / (3x^2 + 2x)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = e^(2x) * ln(x)?",
            options: ["2e^(2x) * ln(x) + e^(2x) / x^2", "e^(2x) * ln(x) + e^(2x) / x^2", "e^(2x) * ln(x) + 2e^(2x) / x^2", "2e^(2x) * ln(x) + e^(2x) / x"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = sin(2x) * cos(3x)?",
            options: ["(1/5) * sin(2x) * cos(3x) - (1/5) * cos(2x) * sin(3x) + C", "(1/10) * cos(5x) - (1/5) * cos(2x) + C", "(1/10) * sin(5x) + C", "(1/5) * sin(5x) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = e^(x^2) * cos(x)?",
            options: ["2x * e^(x^2) * cos(x) - e^(x^2) * sin(x)", "2x * e^(x^2) * cos(x) + e^(x^2) * sin(x)", "2x * e^(x^2) * sin(x) - e^(x^2) * cos(x)", "2x * e^(x^2) * sin(x) + e^(x^2) * cos(x)"],
            correct: 0,
        },
        {
            question: "What is the second derivative of f(x) = 3x^5 - 2x^3 + x^2 - 4x + 3?",
            options: ["60x^4 - 12x^2 + 2x - 4", "60x^4 - 12x^2 + 2x + 4", "60x^4 - 12x^2 + 2x - 2", "60x^4 - 12x^2 + 4x - 4"],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "Find the integral of f(x) = 2x * ln(x^2 + 1)",
            options: ["2x * ln(x^2 + 1) - 2x / (x^2 + 1)", "x * ln(x^2 + 1) + 2x / (x^2 + 1)", "x * ln(x^2 + 1) - 2x / (x^2 + 1)", "2x * ln(x^2 + 1) + x / (x^2 + 1)"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = ln(x^3 + x)?",
            options: ["(3x^2 + 1) / (x^3 + x)", "(3x^2 + 1) / x", "(3x^2 + 1) / (x^3 + x^2)", "(3x^2 + 1) / (x^2 + x)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 4x^6 - 3x^5 + 2x^4 - x^3 + x^2 - x",
            options: ["120x^4 - 60x^3 + 24x^2 - 6x + 2", "120x^4 - 60x^3 + 24x^2 - 6x", "120x^4 - 60x^3 + 24x^2 - 6x + 1", "120x^4 - 60x^3 + 24x^2 - 5x + 2"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^x * sin(2x)?",
            options: ["(1/5) * e^x * sin(2x) - (1/5) * e^x * cos(2x) + C", "(1/5) * e^x * cos(2x) - (1/5) * e^x * sin(2x) + C", "(1/3) * e^x * cos(2x) - (1/3) * e^x * sin(2x) + C", "(1/5) * e^x * cos(2x) + (1/5) * e^x * sin(2x) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = e^(x^2) * ln(x^2 + 2x)?",
            options: ["2x * e^(x^2) * ln(x^2 + 2x) + e^(x^2) * (2x + 2) / (x^2 + 2x)", "2x * e^(x^2) * ln(x^2 + 2x) + e^(x^2) * (2x + 2)", "2x * e^(x^2) * ln(x^2 + 2x) + e^(x^2) * (2x + 2) / (x^2 + 2x)", "2x * e^(x^2) * ln(x^2 + 2x) + e^(x^2) * (2x + 2)"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the integral of f(x) = x * sin(x^2)?",
            options: ["(1/2) * cos(x^2) + C", "-(1/2) * cos(x^2) + C", "(1/2) * sin(x^2) + C", "-(1/2) * sin(x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = x^4 * ln(x^2 + 1)",
            options: ["4x^3 * ln(x^2 + 1) + 4x^5 / (x^2 + 1)", "4x^3 * ln(x^2 + 1) + 4x / (x^2 + 1)", "4x^3 * ln(x^2 + 1) + 4x^2 / (x^2 + 1)", "4x^3 * ln(x^2 + 1) + 2x^2 / (x^2 + 1)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^6 - 3x^4 + x^2 - x + 2",
            options: ["30x^4 - 12x^2 + 2", "30x^4 - 12x^2 + 4", "30x^4 - 12x^2 + 8", "30x^4 - 12x^2 + 6"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(3x) * cos(x)?",
            options: ["(1/10) * e^(3x) * cos(x) - (3/10) * e^(3x) * sin(x) + C", "(1/10) * e^(3x) * cos(x) + (3/10) * e^(3x) * sin(x) + C", "(1/5) * e^(3x) * cos(x) + (3/10) * e^(3x) * sin(x) + C", "(1/5) * e^(3x) * cos(x) - (3/10) * e^(3x) * sin(x) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = e^(2x) * ln(x)?",
            options: ["2e^(2x) * ln(x) + e^(2x) / x^2", "e^(2x) * ln(x) + e^(2x) / x^2", "e^(2x) * ln(x) + 2e^(2x) / x^2", "2e^(2x) * ln(x) + e^(2x) / x"],
            correct: 0,
        },
    ],
  // Round 25
    [
        {
            question: "Find the integral of f(x) = 2x * e^(3x^2)",
            options: ["e^(3x^2) + C", "e^(3x^2) / 3 + C", "e^(3x^2) / 2 + C", "2e^(3x^2) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x^2 * sin(x)?",
            options: ["2x * sin(x) + x^2 * cos(x)", "2x * sin(x) - x^2 * cos(x)", "2x * cos(x) + x^2 * sin(x)", "2x * cos(x) - x^2 * sin(x)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 3x^4 - 5x^3 + 2x^2 - x + 1",
            options: ["36x^2 - 30x + 4", "36x^2 - 30x + 2", "36x^2 - 30x + 6", "36x^2 - 32x + 4"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(x) * cos(x)?",
            options: ["(1/2) * e^x * (sin(x) + cos(x)) + C", "(1/2) * e^x * (sin(x) - cos(x)) + C", "(1/2) * e^x * (cos(x) - sin(x)) + C", "(1/2) * e^x * (cos(x) + sin(x)) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^3 + 2x)",
            options: ["(3x^2 + 2) / (x^3 + 2x)", "(3x^2 + 2) / x", "(3x^2 + 2) / (x^2 + 2x)", "(3x^2 + 2) / (x^3 + 2x^2)"],
            correct: 0,
        },
    ],

    // Round 26
    [
        {
            question: "What is the integral of f(x) = x * cos(x^2)?",
            options: ["(1/2) * sin(x^2) + C", "(1/2) * cos(x^2) + C", "(1/2) * sin(x^2) - C", "(1/2) * cos(x^2) - C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^5 - 2x^4 + x^3 - 3x + 2",
            options: ["20x^3 - 24x^2 + 6x - 3", "20x^3 - 24x^2 + 6x - 4", "20x^3 - 24x^2 + 6x", "20x^3 - 24x^2 + 6x + 3"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = e^(x^2) * sin(x)?",
            options: ["2x * e^(x^2) * sin(x) + e^(x^2) * cos(x)", "2x * e^(x^2) * cos(x) - e^(x^2) * sin(x)", "2x * e^(x^2) * cos(x) + e^(x^2) * sin(x)", "2x * e^(x^2) * sin(x) - e^(x^2) * cos(x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(x) * sin(3x)?",
            options: ["(1/10) * e^x * cos(3x) - (3/10) * e^x * sin(3x) + C", "(1/5) * e^x * sin(3x) + (1/5) * e^x * cos(3x) + C", "(1/5) * e^x * cos(3x) + (1/5) * e^x * sin(3x) + C", "(1/10) * e^x * sin(3x) + (3/10) * e^x * cos(3x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 2x^3 - 5x^2 + 4x - 3",
            options: ["12x^2 - 10x + 4", "12x^2 - 10x + 6", "12x^2 - 10x", "12x^2 - 4x + 6"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "Find the integral of f(x) = 4x * e^(2x^2)",
            options: ["e^(2x^2) + C", "2x * e^(2x^2) + C", "e^(2x^2) / 2 + C", "2x * e^(2x^2) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x^2 * ln(x^2 + 2x)?",
            options: ["2x * ln(x^2 + 2x) + 2x * (x + 1) / (x^2 + 2x)", "2x * ln(x^2 + 2x) + 2x / (x^2 + 2x)", "2x * ln(x^2 + 2x) + 2x / (x^2 + 2x) + 1", "2x * ln(x^2 + 2x) + x / (x^2 + 2x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = cos(x) * sin(x)?",
            options: ["(1/2) * cos^2(x) + C", "(1/2) * sin^2(x) + C", "(1/2) * sin(2x) + C", "(1/2) * cos(2x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 2x^6 - 3x^5 + 2x^4 - x^3 + x^2",
            options: ["120x^4 - 60x^3 + 24x^2 - 6x + 2", "120x^4 - 60x^3 + 24x^2 - 8x", "120x^4 - 60x^3 + 24x^2 - 6x", "120x^4 - 60x^3 + 24x^2 - 6x + 1"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x * ln(x^2 + 1)?",
            options: ["(2x^2 + 1) / (x^2 + 1)", "2x / (x^2 + 1)", "2x * ln(x^2 + 1) + 2x / (x^2 + 1)", "2x * ln(x^2 + 1) + x / (x^2 + 1)"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "What is the integral of f(x) = x * sin(3x^2)?",
            options: ["(1/6) * cos(3x^2) + C", "(1/2) * sin(3x^2) + C", "(1/6) * cos(3x^2) - C", "(1/6) * sin(3x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^6 - 3x^4 + 2x^2 - x + 3",
            options: ["30x^4 - 24x^2 + 4", "30x^4 - 24x^2 + 2", "30x^4 - 24x^2 + 6", "30x^4 - 24x^2 + 4"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = e^(x^2) * cos(x)?",
            options: ["2x * e^(x^2) * cos(x) - e^(x^2) * sin(x)", "2x * e^(x^2) * cos(x) + e^(x^2) * sin(x)", "2x * e^(x^2) * cos(x) - e^(x^2) * sin(x)", "2x * e^(x^2) * sin(x) - e^(x^2) * cos(x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = cos(2x) * sin(3x)?",
            options: ["(1/5) * sin(5x) + C", "(1/6) * sin(5x) + C", "(1/5) * sin(5x) - C", "(1/4) * cos(5x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^3 * ln(x)?",
            options: ["6x^2 * ln(x) + 2x", "6x^2 * ln(x) + 3x", "6x^2 * ln(x) - 2x", "6x^2 * ln(x) - x"],
            correct: 0,
        },
    ],
  // Round 29
    [
        {
            question: "Find the integral of f(x) = x * e^(x^2)?",
            options: ["(1/2) * e^(x^2) + C", "(1/2) * e^(x^2) - C", "(1/3) * e^(x^2) + C", "(1/2) * x * e^(x^2) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = ln(x^2 + 1)?",
            options: ["2x / (x^2 + 1)", "2x / x^2 + 1", "1 / (x^2 + 1)", "1 / (x + 1)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 5x^4 - 3x^3 + x^2 - 4x + 7",
            options: ["60x^2 - 18x + 2", "60x^2 - 18x + 3", "60x^2 - 18x", "60x^2 - 18x + 4"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(x) * cos(2x)?",
            options: ["(1/2) * e^x * (sin(2x) - cos(2x)) + C", "(1/2) * e^x * (sin(2x) + cos(2x)) + C", "(1/2) * e^x * (cos(2x) - sin(2x)) + C", "(1/2) * e^x * (cos(2x) + sin(2x)) + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = x^3 * cos(x)?",
            options: ["3x^2 * cos(x) - x^3 * sin(x)", "3x^2 * cos(x) + x^3 * sin(x)", "3x^2 * sin(x) - x^3 * cos(x)", "3x^2 * sin(x) + x^3 * cos(x)"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the integral of f(x) = x * sin(x^2)?",
            options: ["(1/2) * cos(x^2) + C", "(1/2) * sin(x^2) + C", "(1/2) * cos(x^2) - C", "(1/2) * sin(x^2) - C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 4x^5 - 3x^4 + 2x^3 - x^2 + 6",
            options: ["100x^3 - 24x^2 + 12x", "100x^3 - 24x^2 + 12x + 12", "100x^3 - 24x^2 + 12x + 6", "100x^3 - 24x^2 + 10x + 6"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^3 + 4x^2)?",
            options: ["(3x^2 + 8x) / (x^3 + 4x^2)", "(3x^2 + 4x) / (x^3 + 4x^2)", "(3x^2 + 8x) / x^3 + 4x^2", "(3x^2 + 4x) / x^3 + 4x^2"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = sin(3x) * cos(3x)?",
            options: ["(1/6) * sin(6x) + C", "(1/3) * cos(6x) + C", "(1/6) * cos(6x) + C", "(1/2) * cos(6x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^4 * ln(x)?",
            options: ["12x^2 * ln(x) + 4x", "12x^2 * ln(x) + 8x", "12x^2 * ln(x) - 4x", "12x^2 * ln(x) - 8x"],
            correct: 0,
        },
    ],

    // Round 31
    [
        {
            question: "What is the integral of f(x) = cos(x) * e^(2x)?",
            options: ["(1/5) * e^(2x) * sin(x) + C", "(1/5) * e^(2x) * cos(x) + C", "(1/4) * e^(2x) * cos(x) + C", "(1/4) * e^(2x) * sin(x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 7x^6 - 2x^4 + 3x^2 - x + 5",
            options: ["210x^4 - 8x^2 + 6", "210x^4 - 8x^2 + 5", "210x^4 - 8x^2 + 7", "210x^4 - 8x^2 + 3"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^2 + 3x + 2)?",
            options: ["(2x + 3) / (x^2 + 3x + 2)", "(2x + 3) / x^2 + 3x + 2", "(2x + 3) / (x^2 + 3x + 2) + 1", "(2x + 3) / x^2 + 3x + 2 + 1"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(x) * cos(x)?",
            options: ["(1/2) * e^x * (sin(x) + cos(x)) + C", "(1/2) * e^x * (sin(x) - cos(x)) + C", "(1/2) * e^x * (cos(x) - sin(x)) + C", "(1/2) * e^x * (cos(x) + sin(x)) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^5 - 2x^3 + x^2 - 4x + 1",
            options: ["20x^3 - 12x + 2", "20x^3 - 12x + 1", "20x^3 - 12x + 3", "20x^3 - 12x + 5"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "Find the integral of f(x) = x * ln(x)?",
            options: ["x^2 * ln(x) - (x^2) / 2 + C", "x^2 * ln(x) + x + C", "x^2 * ln(x) + x^2 + C", "x^2 * ln(x) - x^2 + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = e^(x^3)?",
            options: ["3x^2 * e^(x^3)", "x^2 * e^(x^3)", "x * e^(x^3)", "3x * e^(x^3)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^7 - 4x^6 + 2x^5 - 3x^3 + x^2",
            options: ["42x^5 - 24x^4 + 10x^3 - 9x", "42x^5 - 24x^4 + 10x^3 - 3x", "42x^5 - 24x^4 + 10x^3 - 3x + 1", "42x^5 - 24x^4 + 10x^3 - 2x"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = x * sin(x^3)?",
            options: ["(1/3) * cos(x^3) + C", "(1/3) * sin(x^3) + C", "(1/2) * sin(x^3) + C", "(1/3) * cos(x^3) - C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^2 + 1) / x?",
            options: ["(2x / (x^2 + 1)) - (ln(x^2 + 1) / x^2)", "(2x / (x^2 + 1)) + (ln(x^2 + 1) / x^2)", "(2x / (x^2 + 1)) + (1 / x^2)", "(2x / (x^2 + 1)) - (1 / x^2)"],
            correct: 0,
        },
    ],
   // Round 33
    [
        {
            question: "Find the integral of f(x) = x^2 * cos(x^3)?",
            options: ["(1/3) * sin(x^3) + C", "(1/3) * cos(x^3) + C", "(1/3) * sin(x^3) - C", "(1/3) * cos(x^3) - C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^6 - 3x^4 + 2x^2 - x + 4",
            options: ["180x^4 - 12x^2 + 4", "180x^4 - 12x^2 + 2", "180x^4 - 12x^2 + 6", "180x^4 - 12x^2 + 7"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^2 + 4x + 4)?",
            options: ["(2x + 4) / (x^2 + 4x + 4)", "(2x + 4) / x^2 + 4x + 4", "(2x + 4) / x^2 + 4x + 5", "(2x + 4) / (x^2 + 4x + 5)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(x) * cos(x)?",
            options: ["(1/2) * e^x * (sin(x) - cos(x)) + C", "(1/2) * e^x * (cos(x) - sin(x)) + C", "(1/2) * e^x * (sin(x) + cos(x)) + C", "(1/2) * e^x * (cos(x) + sin(x)) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 5x^5 - 3x^3 + 2x^2 - 4x + 7",
            options: ["100x^3 - 18x + 4", "100x^3 - 18x + 6", "100x^3 - 18x + 7", "100x^3 - 18x + 2"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "What is the integral of f(x) = x * cos(x^2)?",
            options: ["(1/2) * sin(x^2) + C", "(1/3) * sin(x^2) + C", "(1/2) * cos(x^2) + C", "(1/3) * cos(x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 7x^4 - 5x^2 + 3x - 8",
            options: ["84x^2 - 10x + 3", "84x^2 - 10x + 6", "84x^2 - 10x + 2", "84x^2 - 10x + 5"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^3 + x^2 + x)?",
            options: ["(3x^2 + 2x + 1) / (x^3 + x^2 + x)", "(3x^2 + 2x + 1) / (x^3 + x^2 + x^2)", "(3x^2 + 2x + 1) / (x^3 + 2x^2 + x)", "(3x^2 + 2x + 1) / (x^3 + x^2 + 1)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = x * e^(x^2)?",
            options: ["(1/2) * e^(x^2) + C", "(1/2) * e^(x^2) - C", "(1/3) * e^(x^2) + C", "(1/2) * x * e^(x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^7 - 3x^5 + 4x^3 - x + 5",
            options: ["210x^5 - 60x^3 + 24x", "210x^5 - 60x^3 + 24x + 5", "210x^5 - 60x^3 + 24x - 2", "210x^5 - 60x^3 + 24x + 7"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "Find the integral of f(x) = x * tan(x)?",
            options: ["ln(cos(x)) + C", "ln(sin(x)) + C", "ln(cos(x)) - C", "ln(cos(x)) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 3x^6 - 2x^4 + x^3 - x^2 + x + 5",
            options: ["540x^4 - 24x^2 + 6x - 2", "540x^4 - 24x^2 + 6x + 2", "540x^4 - 24x^2 + 6x + 1", "540x^4 - 24x^2 + 6x - 5"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x^2 * sin(x)?",
            options: ["2x * sin(x) + x^2 * cos(x)", "2x * sin(x) - x^2 * cos(x)", "2x * cos(x) + x^2 * sin(x)", "2x * cos(x) - x^2 * sin(x)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = sin(x^2)?",
            options: ["-cos(x^2) + C", "cos(x^2) + C", "sin(x^2) + C", "-sin(x^2) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 2x^6 - 3x^4 + x^3 - 6x^2 + 2x",
            options: ["60x^4 - 12x^2 + 6", "60x^4 - 12x^2 + 5", "60x^4 - 12x^2 + 3", "60x^4 - 12x^2 + 8"],
            correct: 0,
        },
    ],

    // Round 36
    [
        {
            question: "What is the integral of f(x) = x^3 * ln(x)?",
            options: ["x^4 * ln(x) - (x^4) / 4 + C", "x^4 * ln(x) - (x^3) / 3 + C", "x^4 * ln(x) - (x^4) / 3 + C", "x^4 * ln(x) - (x^2) / 4 + C"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^4 + 3x^3 + 2x + 1)?",
            options: ["(4x^3 + 9x^2 + 2) / (x^4 + 3x^3 + 2x + 1)", "(4x^3 + 9x^2 + 2) / (x^4 + 3x^3 + 2x + 1)^2", "(4x^3 + 9x^2 + 2) / x^4 + 3x^3 + 2x + 1", "(4x^3 + 9x^2 + 2) / (x^3 + 3x^2 + 2x + 1)"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = sin(x) * e^(x)?",
            options: ["(1/2) * e^(x) * (sin(x) - cos(x)) + C", "(1/2) * e^(x) * (cos(x) - sin(x)) + C", "(1/2) * e^(x) * (sin(x) + cos(x)) + C", "(1/2) * e^(x) * (cos(x) + sin(x)) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 2x^6 - 3x^4 + x^3 - 5x + 9",
            options: ["60x^5 - 12x^3 + 6x - 5", "60x^5 - 12x^3 + 6x + 9", "60x^5 - 12x^3 + 6x - 4", "60x^5 - 12x^3 + 6x + 7"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = ln(x^5 + 4x^3 + 3x)?",
            options: ["(5x^4 + 12x^2 + 3) / (x^5 + 4x^3 + 3x)", "(5x^4 + 12x^2 + 3) / (x^5 + 4x^3 + 3x^2)", "(5x^4 + 12x^2 + 3) / (x^5 + 4x^3 + 3x^4)", "(5x^4 + 12x^2 + 3) / (x^5 + 4x^3 + 3x + 2)"],
            correct: 0,
        },
    ],
  // Round 37
    [
        {
            question: "Find the integral of f(x) = e^(-x^2)?",
            options: ["(1/2) * sqrt(pi)", "(1/2) * e^(-x^2) + C", "sqrt(pi) * e^(-x^2) + C", "None of the above"],
            correct: 3,
        },
        {
            question: "Find the derivative of f(x) = (x^2 + 1)^5?",
            options: ["10x(x^2 + 1)^4", "5x(x^2 + 1)^4", "5x(x^2 + 1)^5", "10x(x^2 + 1)^5"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = 1/(x^2 + 1)?",
            options: ["arctan(x) + C", "arcsin(x) + C", "log(x^2 + 1) + C", "arccos(x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 5x^4 - 4x^3 + 3x^2 - x + 1",
            options: ["60x^2 - 24x + 6", "60x^2 - 24x + 8", "60x^2 - 24x + 4", "60x^2 - 24x + 2"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = x * ln(x)?",
            options: ["ln(x) + 1", "ln(x) - 1", "1/x", "1/x + ln(x)"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "Find the integral of f(x) = sin(2x)?",
            options: ["-cos(2x)/2 + C", "cos(2x)/2 + C", "-cos(2x) + C", "sin(2x)/2 + C"],
            correct: 0,
        },
        {
            question: "What is the second derivative of f(x) = x^5 - 6x^3 + 4x^2 - x + 10",
            options: ["20x^3 - 18x + 8", "20x^3 - 18x + 6", "20x^3 - 18x + 4", "20x^3 - 18x + 10"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = cos(3x)?",
            options: ["(1/3) * sin(3x) + C", "(1/3) * cos(3x) + C", "(1/2) * sin(3x) + C", "(1/2) * cos(3x) + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = (3x^2 + 5)^4?",
            options: ["24x(3x^2 + 5)^3", "12x(3x^2 + 5)^3", "24x(3x^2 + 5)^4", "12x(3x^2 + 5)^4"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 2x^6 - 4x^4 + x^3 - x + 2",
            options: ["60x^5 - 16x^3 + 6x^2 - 1", "60x^5 - 16x^3 + 6x^2 + 2", "60x^5 - 16x^3 + 6x^2 + 1", "60x^5 - 16x^3 + 6x^2 - 2"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "Find the integral of f(x) = tan(x)?",
            options: ["-ln|cos(x)| + C", "ln|cos(x)| + C", "ln|sin(x)| + C", "ln|tan(x)| + C"],
            correct: 0,
        },
        {
            question: "What is the second derivative of f(x) = 4x^7 - 3x^5 + x^3 - 2x + 6?",
            options: ["168x^5 - 30x^3 + 6", "168x^5 - 30x^3 + 5", "168x^5 - 30x^3 + 3", "168x^5 - 30x^3 + 4"],
            correct: 0,
        },
        {
            question: "What is the integral of f(x) = e^(2x)?",
            options: ["(1/2)e^(2x) + C", "(1/2)e^(2x)", "(1/3)e^(2x) + C", "(1/3)e^(2x)"],
            correct: 0,
        },
        {
            question: "Find the derivative of f(x) = x^3 * ln(x)?",
            options: ["3x^2 * ln(x) + x^2", "3x^2 * ln(x) - x^2", "3x^2 * ln(x) + x^3", "3x^2 * ln(x) - x^3"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 3x^7 - 6x^5 + 2x^3 - 4x + 10",
            options: ["420x^5 - 30x^3 + 12x - 4", "420x^5 - 30x^3 + 12x - 3", "420x^5 - 30x^3 + 12x - 6", "420x^5 - 30x^3 + 12x - 7"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "What is the integral of f(x) = sec^2(x)?",
            options: ["tan(x) + C", "-tan(x) + C", "sec(x) + C", "-sec(x) + C"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = x^4 - 5x^3 + 6x^2 - x + 1",
            options: ["12x^2 - 30x + 12", "12x^2 - 30x + 10", "12x^2 - 30x + 14", "12x^2 - 30x + 16"],
            correct: 0,
        },
        {
            question: "Find the integral of f(x) = x * ln(x^2)?",
            options: ["(x^2 / 2) * ln(x^2) - x^2 + C", "(x^2 / 2) * ln(x^2) + C", "(x^2 / 2) * ln(x^2) - x + C", "(x^2 / 2) * ln(x^2) + x + C"],
            correct: 0,
        },
        {
            question: "What is the derivative of f(x) = (x^2 + 1)^(3/2)?",
            options: ["(3x)(x^2 + 1)^(1/2)", "(3x)(x^2 + 1)^(3/2)", "(3x)(x^2 + 1)^(2)", "(3x)(x^2 + 1)^(1/2)"],
            correct: 0,
        },
        {
            question: "Find the second derivative of f(x) = 2x^6 - 7x^4 + 3x^2 - 5x + 1",
            options: ["60x^5 - 28x^3 + 6x - 5", "60x^5 - 28x^3 + 6x + 5", "60x^5 - 28x^3 + 6x - 6", "60x^5 - 28x^3 + 6x + 3"],
            correct: 0,
        },
    ]
];
  



// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
