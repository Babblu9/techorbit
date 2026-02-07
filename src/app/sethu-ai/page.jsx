'use client';
import { useState } from 'react';
import { Bot, Send, User, Sparkles, MessageSquare, Zap, Brain } from 'lucide-react';
import styles from './page.module.css';

export default function SethuAIPage() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi! I\'m Sethu-AI, your personal learning assistant. How can I help you today? I can answer questions about courses, career guidance, or technical topics.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: input }]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: getAIResponse(input)
            }]);
            setIsTyping(false);
        }, 1500);
    };

    const getAIResponse = (query) => {
        const lowerQuery = query.toLowerCase();
        if (lowerQuery.includes('course') || lowerQuery.includes('training')) {
            return 'We offer a wide range of courses including DevOps, Data Science, Full Stack Development, Testing Tools, and more. Each course includes hands-on projects and placement support. Would you like me to recommend a course based on your career goals?';
        } else if (lowerQuery.includes('placement') || lowerQuery.includes('job')) {
            return 'Our placement rate is 95%+ with top companies like TCS, Infosys, Amazon, and Microsoft. We provide resume building, mock interviews, and direct referrals to our partner companies. Have you completed any of our courses?';
        } else if (lowerQuery.includes('fee') || lowerQuery.includes('cost') || lowerQuery.includes('price')) {
            return 'Course fees vary based on the program duration and mode (online/classroom). We offer flexible EMI options and early bird discounts. Please contact our admissions team at +91-XXXXXXXXXX for detailed pricing.';
        } else if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
            return 'Hello! Great to connect with you. I\'m here to help you with course information, career guidance, or any questions about Techorbit. What would you like to know?';
        } else {
            return 'That\'s a great question! While I can provide general guidance, for specific queries I recommend speaking with our career counselors who can give you personalized advice. Would you like me to help you schedule a free consultation?';
        }
    };

    const quickActions = [
        { icon: MessageSquare, label: 'Browse Courses', query: 'What courses do you offer?' },
        { icon: Zap, label: 'Career Path', query: 'Help me choose a career path' },
        { icon: Brain, label: 'Placements', query: 'Tell me about placements' },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.aiLogo}>
                        <Bot size={40} />
                        <Sparkles className={styles.sparkle} size={16} />
                    </div>
                    <h1 className={styles.title}>Sethu-AI</h1>
                    <p className={styles.subtitle}>Your AI-Powered Learning Assistant</p>
                </div>
            </section>

            {/* Chat Container */}
            <div className={styles.container}>
                <div className={styles.chatWindow}>
                    {/* Messages */}
                    <div className={styles.messagesArea}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${styles[msg.role]}`}>
                                <div className={styles.avatar}>
                                    {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
                                </div>
                                <div className={styles.messageContent}>
                                    <span className={styles.sender}>
                                        {msg.role === 'assistant' ? 'Sethu-AI' : 'You'}
                                    </span>
                                    <p>{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className={`${styles.message} ${styles.assistant}`}>
                                <div className={styles.avatar}><Bot size={20} /></div>
                                <div className={styles.messageContent}>
                                    <span className={styles.sender}>Sethu-AI</span>
                                    <div className={styles.typing}>
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className={styles.quickActions}>
                        {quickActions.map((action, index) => (
                            <button
                                key={index}
                                className={styles.quickBtn}
                                onClick={() => setInput(action.query)}
                            >
                                <action.icon size={16} />
                                {action.label}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form className={styles.inputArea} onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Ask Sethu-AI anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className={styles.chatInput}
                        />
                        <button type="submit" className={styles.sendBtn} disabled={!input.trim()}>
                            <Send size={20} />
                        </button>
                    </form>
                </div>

                {/* Features */}
                <div className={styles.features}>
                    <div className={styles.featureCard}>
                        <Brain size={24} />
                        <h3>Smart Recommendations</h3>
                        <p>Get personalized course suggestions based on your goals</p>
                    </div>
                    <div className={styles.featureCard}>
                        <Zap size={24} />
                        <h3>Instant Answers</h3>
                        <p>Quick responses to your learning queries 24/7</p>
                    </div>
                    <div className={styles.featureCard}>
                        <MessageSquare size={24} />
                        <h3>Career Guidance</h3>
                        <p>Expert advice on tech career paths and skills</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
