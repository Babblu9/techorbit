export const scholarshipQuestions = 
{
  "sections": [
    {
      "id": "aptitude",
      "name": "Aptitude Test",
      "description": "Test your analytical and quantitative skills",
      "duration": 20,
      "questions": [
        {
          "id": "apt1",
          "type": "mcq",
          "question": "A shopkeeper offers two successive discounts of 20% and 10% on an article marked at ₹500. What is the actual selling price?",
          "options": ["₹360", "₹350", "₹340", "₹320"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Percentage", "Successive Discounts"],
          "explanation": {
            "stepByStep": [
              "Marked Price = ₹500",
              "After 20% discount: 500 × (100-20)/100 = 500 × 0.8 = ₹400",
              "After additional 10% discount: 400 × (100-10)/100 = 400 × 0.9 = ₹360"
            ],
            "formula": "Final Price = MP × (1 - d1/100) × (1 - d2/100)"
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt2",
          "type": "mcq",
          "question": "A train 150 meters long passes a pole in 15 seconds. What is its speed in km/hr?",
          "options": ["36 km/hr", "45 km/hr", "54 km/hr", "60 km/hr"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Time-Speed-Distance", "Unit Conversion"],
          "explanation": {
            "stepByStep": [
              "Speed = Distance / Time = 150m / 15s = 10 m/s",
              "Convert m/s to km/hr: 10 × (18/5) = 36 km/hr"
            ],
            "formula": "1 m/s = 18/5 km/hr"
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt3",
          "type": "mcq",
          "question": "The average of 5 consecutive odd numbers is 25. What is the smallest number?",
          "options": ["21", "23", "25", "27"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Average", "Number Series"],
          "explanation": {
            "stepByStep": [
              "Let the numbers be x, x+2, x+4, x+6, x+8 (consecutive odd)",
              "Average = (x + x+2 + x+4 + x+6 + x+8) / 5 = 25",
              "(5x + 20) / 5 = 25",
              "x + 4 = 25",
              "x = 21"
            ]
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt4",
          "type": "mcq",
          "question": "If 8 men can build a wall in 12 days, how many days will 6 men take to build the same wall?",
          "options": ["14 days", "16 days", "18 days", "20 days"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Work and Time", "Inverse Proportion"],
          "explanation": {
            "stepByStep": [
              "Work = Men × Days = 8 × 12 = 96 man-days",
              "For 6 men: 96 / 6 = 16 days"
            ],
            "formula": "M1 × D1 = M2 × D2 (for same work)"
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt5",
          "type": "mcq",
          "question": "A person sells an article at a loss of 10%. If he had sold it for ₹45 more, he would have gained 5%. Find the cost price.",
          "options": ["₹300", "₹250", "₹200", "₹350"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Profit and Loss", "Linear Equations"],
          "explanation": {
            "stepByStep": [
              "Let CP = ₹x",
              "SP at 10% loss = 0.9x",
              "SP at 5% gain = 1.05x",
              "Difference = 1.05x - 0.9x = 0.15x = 45",
              "x = 45 / 0.15 = 300"
            ]
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt6",
          "type": "mcq",
          "question": "The ratio of ages of A and B is 3:5. After 6 years, the ratio becomes 2:3. Find A's present age.",
          "options": ["18 years", "21 years", "24 years", "27 years"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Ratios", "Age Problems"],
          "explanation": {
            "stepByStep": [
              "Let A = 3x, B = 5x",
              "After 6 years: (3x+6)/(5x+6) = 2/3",
              "3(3x+6) = 2(5x+6)",
              "9x+18 = 10x+12",
              "x = 6",
              "A = 3x = 18 years"
            ]
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt7",
          "type": "mcq",
          "question": "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
          "options": ["10%", "12.5%", "15%", "8%"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Simple Interest", "Percentage"],
          "explanation": {
            "stepByStep": [
              "Let Principal = P, Amount = 2P",
              "Simple Interest = 2P - P = P",
              "SI = (P × R × 8) / 100 = P",
              "R = 100/8 = 12.5%"
            ],
            "formula": "Rate = (100 × SI) / (P × Time)"
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt8",
          "type": "mcq",
          "question": "What is the least number that when divided by 12, 15, and 18 leaves a remainder of 7?",
          "options": ["180", "187", "360", "367"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["LCM", "Remainder Problems"],
          "explanation": {
            "stepByStep": [
              "Find LCM of 12, 15, 18",
              "12 = 2² × 3",
              "15 = 3 × 5",
              "18 = 2 × 3²",
              "LCM = 2² × 3² × 5 = 180",
              "Required number = 180 + 7 = 187"
            ]
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt9",
          "type": "mcq",
          "question": "In how many ways can the letters of the word 'LEADER' be arranged?",
          "options": ["120", "240", "360", "720"],
          "correctAnswer": 2,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Permutations", "Factorial"],
          "explanation": {
            "stepByStep": [
              "Word: LEADER (6 letters)",
              "L, E, A, D, E, R",
              "E appears twice",
              "Number of arrangements = 6! / 2! = 720 / 2 = 360"
            ],
            "formula": "n! / (repeated letters factorial)"
          },
          "category": "Quantitative Aptitude"
        },
        {
          "id": "apt10",
          "type": "mcq",
          "question": "A man rows upstream at 6 km/hr and downstream at 10 km/hr. Find his speed in still water.",
          "options": ["8 km/hr", "7 km/hr", "9 km/hr", "6 km/hr"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": "Boats and Streams",
          "explanation": {
            "stepByStep": [
              "Speed in still water = (Upstream + Downstream) / 2",
              "= (6 + 10) / 2 = 16/2 = 8 km/hr"
            ],
            "formula": "Speed in still water = (Up + Down) / 2"
          },
          "category": "Quantitative Aptitude"
        }
      ]
    },
    {
      "id": "reasoning",
      "name": "Logical Reasoning",
      "description": "Test your analytical and logical thinking abilities",
      "duration": 20,
      "questions": [
        {
          "id": "reas1",
          "type": "mcq",
          "question": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
          "options": ["40", "42", "44", "46"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Pattern Recognition", "Series"],
          "explanation": {
            "pattern": "The differences are: 4, 6, 8, 10, 12 (increasing by 2)",
            "nextNumber": "30 + 12 = 42",
            "alternative": "n² + n: 1²+1=2, 2²+2=6, 3²+3=12, 4²+4=20, 5²+5=30, 6²+6=42"
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas2",
          "type": "mcq",
          "question": "If 'PAPER' is written as 'OZDODQ', how is 'PENCIL' written in that code?",
          "options": ["ODMBHK", "ODMBHJ", "OCMBHK", "ODMCKJ"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Coding-Decoding", "Letter Shifting"],
          "explanation": {
            "stepByStep": [
              "P → O (-1), A → Z (-1, with wrap), P → O (-1)",
              "E → D (-1), R → Q (-1)",
              "Actually: Each letter is replaced by the previous letter",
              "P → O (-1)",
              "E → D (-1)",
              "N → M (-1)",
              "C → B (-1)",
              "I → H (-1)",
              "L → K (-1)",
              "PENCIL = O D M B H K"
            ]
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas3",
          "type": "mcq",
          "question": "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
          "options": ["Sister", "Mother", "Aunt", "Grandmother"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Blood Relations", "Family Tree"],
          "explanation": {
            "stepByStep": [
              "Only daughter of woman's mother = Woman herself",
              "So the man's mother = The woman",
              "Therefore, the woman is the man's mother"
            ]
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas4",
          "type": "mcq",
          "question": "In a certain code, 'SISTER' is coded as 'RHRSDQ'. What will be the code for 'BROTHER'?",
          "options": ["AQNSGDQ", "CQSUGFS", "BQNSGDQ", "AQNSGES"],
          "correctAnswer": 0,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Coding-Decoding", "Letter Substitution"],
          "explanation": {
            "pattern": "Each letter is shifted one position backward in alphabet",
            "S→R, I→H, S→R, T→S, E→D, R→Q",
            "B→A, R→Q, O→N, T→S, H→G, E→D, R→Q",
            "BROTHER = AQNSGDQ"
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas5",
          "type": "mcq",
          "question": "Find the odd one out: 64, 125, 144, 216",
          "options": ["64", "125", "144", "216"],
          "correctAnswer": 2,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Odd One Out", "Number Properties"],
          "explanation": {
            "analysis": "64 = 4³ (perfect cube), 125 = 5³ (perfect cube), 216 = 6³ (perfect cube)",
            "exception": "144 = 12² (perfect square, NOT a perfect cube)"
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas6",
          "type": "mcq",
          "question": "If A + B means A is the daughter of B, A - B means A is the husband of B, and A × B means A is the brother of B, what does P + Q - R mean?",
          "options": [
            "P is the daughter of R who is husband of Q",
            "P is the daughter-in-law of R",
            "P is the sister of R's husband",
            "None of these"
          ],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Blood Relations", "Symbol Operations"],
          "explanation": {
            "stepByStep": [
              "P + Q = P is daughter of Q",
              "P + Q - R = (P is daughter of Q) and (P is husband of R)",
              "So P is husband of R and daughter of Q",
              "This means P is daughter-in-law of R"
            ]
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas7",
          "type": "mcq",
          "question": "Five people A, B, C, D, and E are standing in a row. A is to the left of B. C is at one end. D is between A and E. E is to the right of A. Who is standing at the extreme right?",
          "options": ["A", "B", "E", "C"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Seating Arrangement", "Logical Ordering"],
          "explanation": {
            "stepByStep": [
              "Given: A left of B → A ... B",
              "E right of A → A ... E ... B",
              "D between A and E → A D E or E D A",
              "Combining: A D E B (or E D A B)",
              "C at one end → C A D E B",
              "Rightmost = B"
            ]
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas8",
          "type": "mcq",
          "question": "Complete the analogy: Book is to Read as Pen is to ?",
          "options": ["Ink", "Write", "Paper", "Draw"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Analogies", "Word Relationships"],
          "explanation": {
            "relationship": "Book is used for Reading, similarly Pen is used for Writing",
            "function": "Action-object relationship"
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas9",
          "type": "mcq",
          "question": "In a class of 40 students, 25 play cricket, 20 play hockey, and 12 play both games. How many play neither?",
          "options": ["5", "7", "10", "12"],
          "correctAnswer": 1,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Set Theory", "Venn Diagrams"],
          "explanation": {
            "stepByStep": [
              "Cricket only = 25 - 12 = 13",
              "Hockey only = 20 - 12 = 8",
              "Both = 12",
              "Total who play = 13 + 8 + 12 = 33",
              "Neither = 40 - 33 = 7"
            ],
            "formula": "n(A∪B) = n(A) + n(B) - n(A∩B)"
          },
          "category": "Logical Reasoning"
        },
        {
          "id": "reas10",
          "type": "mcq",
          "question": "Statement: All roses are flowers. Some flowers fade quickly. Conclusions: I. Some roses fade quickly. II. All roses fade quickly.",
          "options": [
            "Only conclusion I follows",
            "Only conclusion II follows",
            "Both follow",
            "Neither follows"
          ],
          "correctAnswer": 3,
          "marks": 5,
          "difficulty": "medium",
          "cognitiveSkills": ["Syllogisms", "Logical Deduction"],
          "explanation": {
            "analysis": "All roses are flowers (A→B). Some flowers fade (B→C).",
            "reasoning": "From these, we cannot establish any relationship between roses and fading. The statements don't connect 'roses' to 'fade quickly'.",
            "conclusion": "Neither I nor II follows"
          },
          "category": "Logical Reasoning"
        }
      ]
    }
  ]
};
