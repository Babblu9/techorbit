"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';
import { scholarshipQuestions } from '../../data/scholarshipQuestions';

export default function ScholarshipTest() {
    const [testState, setTestState] = useState('registration'); // registration, active, results
    const [studentData, setStudentData] = useState({ name: '', email: '', phone: '', course: '' });

    // Flatten only MCQ questions for the automated client-side test
    const [questions, setQuestions] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
    const [testResult, setTestResult] = useState(null);

    useEffect(() => {
        // Extract MCQ questions from data
        if (scholarshipQuestions && scholarshipQuestions.sections) {
            const mcqs = scholarshipQuestions.sections
                .flatMap(s => s.questions)
                .filter(q => q.type === 'mcq');
            setQuestions(mcqs);
        }
    }, []);

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        if (studentData.name && studentData.email && studentData.phone && studentData.course) {
            setTestState('active');
            setTimeLeft(15 * 60); // Reset timer
        } else {
            alert('Please fill all fields');
        }
    };

    const handleOptionSelect = (qId, optionIdx) => {
        setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    };

    const calculateScholarship = (percentage) => {
        const originalFee = 45000;
        let scholarshipPercentage = 15; // default

        if (percentage >= 90) scholarshipPercentage = 100;
        else if (percentage >= 80) scholarshipPercentage = 60;
        else if (percentage >= 70) scholarshipPercentage = 50;
        else if (percentage >= 50) scholarshipPercentage = 40;
        else if (percentage >= 35) scholarshipPercentage = 25;

        const amount = (originalFee * scholarshipPercentage) / 100;
        return {
            percentage: scholarshipPercentage,
            amount: amount,
            finalFee: originalFee - amount,
            originalFee: originalFee
        };
    };

    const submitTest = useCallback(() => {
        let totalScore = 0;
        let maxScore = 0;

        questions.forEach(q => {
            maxScore += q.marks || 5;
            if (answers[q.id] === q.correctAnswer) {
                totalScore += q.marks || 5;
            }
        });

        const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
        const scholarship = calculateScholarship(percentage);

        setTestResult({
            score: totalScore,
            maxScore,
            percentage,
            scholarship
        });
        setTestState('results');
    }, [questions, answers]);

    useEffect(() => {
        let timer;
        if (testState === 'active' && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && testState === 'active') {
            submitTest();
        }
        return () => clearInterval(timer);
    }, [testState, timeLeft, submitTest]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    if (testState === 'registration') {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Techorbit <span>Scholastic Assessment Test</span> (TSAT Exam)</h1>
                    <p>Take our TSAT exam to earn up to 100% scholarship on TechOrbit&apos;s premium IT programs.</p>
                </div>

                <div className={styles.registrationCard}>
                    <h2>Register for Test</h2>
                    <p>Enter your details to begin the 15-minute assessment.</p>
                    <form onSubmit={handleRegistrationSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input
                                type="text"
                                className={styles.input}
                                value={studentData.name}
                                onChange={e => setStudentData({ ...studentData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={studentData.email}
                                onChange={e => setStudentData({ ...studentData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone Number</label>
                            <input
                                type="tel"
                                className={styles.input}
                                value={studentData.phone}
                                onChange={e => setStudentData({ ...studentData, phone: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Interested Course</label>
                            <select
                                className={styles.select}
                                value={studentData.course}
                                onChange={e => setStudentData({ ...studentData, course: e.target.value })}
                                required
                            >
                                <option value="">Select a Course</option>
                                <option value="Full Stack Development">Full Stack Development</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Cloud Computing">Cloud Computing</option>
                                <option value="Cyber Security">Cyber Security</option>
                            </select>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Start TSAT Exam
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    if (testState === 'active' && questions.length > 0) {
        const currentQ = questions[currentIdx];

        return (
            <div className={styles.container} style={{ padding: '2rem 1.5rem' }}>
                <div className={styles.testContainer}>

                    {/* Question Palette Sidebar */}
                    <div className={styles.sidebar}>
                        <div className={styles.sidebarHeader}>
                            <h4>Navigation</h4>
                        </div>
                        <div className={styles.paletteGrid}>
                            {questions.map((q, idx) => {
                                const isAnswered = answers[q.id] !== undefined;
                                const isCurrent = currentIdx === idx;
                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentIdx(idx)}
                                        className={`
                      ${styles.paletteBtn} 
                      ${isAnswered ? styles.answered : ''} 
                      ${isCurrent ? styles.current : ''}
                    `}
                                    >
                                        {idx + 1}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Question Area */}
                    <div className={styles.mainArea}>
                        <div className={styles.testHeader}>
                            <div className={styles.testTitle}>
                                <h3>TechOrbit <span>FSAT</span></h3>
                            </div>
                            <div className={`${styles.timer} ${timeLeft < 300 ? styles.warning : ''}`}>
                                ⏱ {formatTime(timeLeft)}
                            </div>
                        </div>

                        <div className={styles.questionDisplay}>
                            <div className={styles.questionHeader}>
                                <span className={styles.questionNumber}>Question {currentIdx + 1} of {questions.length}</span>
                                <span className={styles.questionMarks}>{currentQ.marks} Marks</span>
                            </div>

                            <h2 className={styles.questionText}>{currentQ.question}</h2>

                            <div className={styles.optionsGrid}>
                                {currentQ.options?.map((opt, idx) => (
                                    <label
                                        key={idx}
                                        className={`${styles.optionLabel} ${answers[currentQ.id] === idx ? styles.selected : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name={`q-${currentQ.id}`}
                                            className={styles.optionRadio}
                                            checked={answers[currentQ.id] === idx}
                                            onChange={() => handleOptionSelect(currentQ.id, idx)}
                                        />
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className={styles.bottomBar}>
                            <button
                                className={`${styles.actionBtn} ${styles.prev}`}
                                onClick={() => setCurrentIdx(prev => prev - 1)}
                                disabled={currentIdx === 0}
                            >
                                ← Previous
                            </button>

                            {currentIdx === questions.length - 1 ? (
                                <button
                                    className={`${styles.actionBtn} ${styles.submit}`}
                                    onClick={submitTest}
                                >
                                    Submit Test
                                </button>
                            ) : (
                                <button
                                    className={`${styles.actionBtn} ${styles.next}`}
                                    onClick={() => setCurrentIdx(prev => prev + 1)}
                                >
                                    Next →
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    if (testState === 'results' && testResult) {
        const { scholarship } = testResult;

        return (
            <div className={styles.container}>
                <div className={styles.resultsContainer}>
                    <div className={styles.resultCard}>

                        <div className={styles.resultHeader}>
                            <h2>Test Completed!</h2>
                            <p>Thank you for taking the Techorbit Scholastic Assessment Test (TSAT).</p>
                        </div>

                        <div className={styles.scoreCircle}>
                            <div className={styles.scoreValue}>{testResult.percentage}%</div>
                            <div className={styles.scoreLabel}>Final Score</div>
                        </div>

                        <div className={styles.scholarshipSection}>
                            <div className={styles.scholarshipTitle}>Your Scholarship</div>
                            <div className={styles.scholarshipValue}>{scholarship.percentage}%</div>
                            <div className={styles.scholarshipSubtitle}>on {studentData.course}</div>

                            <div className={styles.feeBreakdown}>
                                <div className={styles.feeRow}>
                                    <span className={styles.feeLabel}>Course Fee</span>
                                    <span className={styles.feeAmount}>₹{scholarship.originalFee.toLocaleString('en-IN')}</span>
                                </div>
                                <div className={styles.feeRow}>
                                    <span className={styles.feeLabel}>Scholarship Discount</span>
                                    <span className={`${styles.feeAmount} ${styles.savings}`}>- ₹{scholarship.amount.toLocaleString('en-IN')}</span>
                                </div>
                                <div className={`${styles.feeRow} ${styles.total}`}>
                                    <span className={styles.feeLabel}>Your Final Fee</span>
                                    <span className={`${styles.feeAmount} ${styles.final}`}>₹{scholarship.finalFee.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.resultActions}>
                            <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                An admissions counselor will contact you shortly at <strong>{studentData.phone}</strong>.
                            </p>
                            <button className={`${styles.actionBtn} ${styles.submit}`} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }} onClick={() => window.location.href = '/'}>
                                Back to Home
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div style={{ textAlign: 'center', padding: '4rem' }}>
                <h2>Loading Test Environment...</h2>
            </div>
        </div>
    );
}
