  import React, { useMemo, useState } from 'react';
  import { ArrowLeft, ArrowRight, Check, Leaf, RotateCcw, Sparkles } from 'lucide-react';
  import { questions, stages, scoreBands } from './questions';

  export default function App() {
    const [started, setStarted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [finished, setFinished] = useState(false);
    const question = questions[current];
    const selected = answers[current];
    const totalScore = useMemo(() => Object.entries(answers).reduce((sum, [index, option]) => sum + questions[Number(index)].options[option].score, 0), [answers]);
    const completed = Object.keys(answers).length;
    const band = scoreBands.find(item => totalScore >= item.min) || scoreBands[3];
    const progress = (completed / questions.length) * 100;

    function choose(optionIndex) {
      if (selected !== undefined) return;
      setAnswers(previous => ({ ...previous, [current]: optionIndex }));
    }
    function next() {
      if (current === questions.length - 1) setFinished(true);
      else setCurrent(value => value + 1);
    }
    function restart() {
      setStarted(false); setCurrent(0); setAnswers({}); setFinished(false);
    }

    if (!started) return <main className="shell landing">
      <div className="brand"><span className="brand-mark"><Leaf size={22} /></span><span>XYZ COMPONENTS</span></div>
      <div className="hero-card">
        <div className="eyebrow">A SUSTAINABILITY MANAGEMENT SIMULATION</div>
        <h1>Sustainability<br/><em>Innovation Challenge</em></h1>
        <p className="lead">You are the management team of XYZ Components. Make five decisions as your fictional manufacturer responds to sustainability pressures while protecting its business.</p>
        <div className="intro-stats"><div><strong>5</strong><span>Decisions</span></div><div><strong>5</strong><span>Innovation stages</span></div><div><strong>10</strong><span>Minutes</span></div></div>
        <div className="what-to-know"><h3>Before you begin</h3><ul><li>Each scenario has four possible management decisions.</li><li>Choose the action you would take with the information available.</li><li>You’ll receive immediate feedback explaining the strengths and risks of your choice.</li><li>Your score is calculated in this browser only. No answers or personal details are collected.</li></ul></div>
        <button className="primary-btn start-btn" onClick={() => setStarted(true)}>Start the challenge <ArrowRight size={18}/></button>
      </div>
      <footer>Designed for classroom discussion · No login or response tracking</footer>
    </main>;

    if (finished) return <main className="shell results-shell">
      <div className="brand"><span className="brand-mark"><Leaf size={22}/></span><span>XYZ COMPONENTS</span></div>
      <section className="results-card">
        <div className="result-icon"><Sparkles size={28}/></div>
        <div className="eyebrow">CHALLENGE COMPLETE</div>
        <h1>Your decisions,<br/><em>your impact.</em></h1>
        <div className="score-display"><strong>{totalScore}</strong><span>/ 50</span></div>
        <h2>{band.title}</h2><p className="result-description">{band.description}</p>
        <div className="result-meta"><span>{completed} of 5 decisions completed</span><span>{Math.round((totalScore / 50) * 100)}% score</span></div>
        <div className="score-track"><div style={{width: `${totalScore}%`}}/></div>
        <div className="reflection"><h3>Take a moment to reflect</h3><p>Which assumption most influenced your decisions, and what evidence would make you change course?</p></div>
        <button className="primary-btn" onClick={restart}><RotateCcw size={17}/> Try again</button>
        <p className="privacy-note">Your answers are not saved or submitted.</p>
      </section>
      <footer>Thank you for participating</footer>
    </main>;

    const stageQuestionNumbers = questions.map((q, i) => q.stage === question.stage ? i : -1).filter(i => i >= 0);
    const stageIndex = stageQuestionNumbers.indexOf(current) + 1;
    return <main className="shell quiz-shell">
      <header className="topbar"><div className="brand"><span className="brand-mark"><Leaf size={20}/></span><span>XYZ COMPONENTS</span></div><div className="session-label">CLASSROOM SESSION <span>•</span> NO LOGIN</div></header>
      <div className="progress-wrap"><div className="progress-label"><span>YOUR PROGRESS</span><strong>{completed} / 5</strong></div><div className="progress-track"><div style={{width: `${progress}%`}}/></div></div>
      <div className="quiz-layout">
        <aside className="stage-sidebar"><div className="sidebar-title">THE FIVE STAGES</div>{stages.map((stage, i) => {
          const stageQs = questions.map((q, index) => q.stage === i ? index : -1).filter(index => index >= 0);
          const done = stageQs.every(index => answers[index] !== undefined);
          const active = question.stage === i;
          return <div className={`stage-item ${active ? 'active' : ''} ${done ? 'done' : ''}`} key={stage}><span className="stage-number">{done ? <Check size={14}/> : `0${i+1}`}</span><span>{stage}</span></div>;
        })}<div className="sidebar-note">Think like a management team: balance environmental impact, evidence, cost and execution.</div></aside>
        <section className="question-area">
          <div className="question-kicker"><span>STAGE {question.stage + 1}</span><span className="dot">·</span><span>DECISION {current + 1} OF 5</span></div>
          <h1>{question.title}</h1>
          <p className="scenario">{question.scenario}</p>
          <div className="choose-label">WHAT WOULD YOU DO?</div>
          <div className="options">{question.options.map((option, i) => {
            const isSelected = selected === i;
            const isRevealed = selected !== undefined;
            return <button key={i} className={`option ${isSelected ? 'selected' : ''} ${isRevealed && isSelected ? 'revealed' : ''}`} onClick={() => choose(i)} disabled={isRevealed}>
              <span className="option-letter">{String.fromCharCode(65+i)}</span><span className="option-copy">{option.text}</span><span className="option-indicator">{isSelected ? <Check size={17}/> : <span/>}</span>
            </button>;
          })}</div>
          {selected !== undefined && <div className={`feedback ${question.options[selected].score === 10 ? 'feedback-strong' : ''}`}>
            <div className="feedback-heading"><span className="feedback-icon"><Sparkles size={17}/></span><strong>{question.options[selected].score === 10 ? 'Strong decision' : 'Consider the trade-off'}</strong><span className="feedback-tag">YOUR FEEDBACK</span></div>
            <p>{question.options[selected].feedback}</p>
          </div>}
          <div className="question-footer"><button className="back-btn" onClick={() => current > 0 && setCurrent(current - 1)} disabled={current === 0}><ArrowLeft size={16}/> Previous</button><div className="footer-right">{selected !== undefined ? <button className="primary-btn" onClick={next}>{current === 5 ? 'View results' : 'Next decision'} <ArrowRight size={17}/></button> : <span className="select-hint">Select an option to continue</span>}</div></div>
        </section>
      </div>
      <footer className="quiz-footer">Your responses stay in this browser session and are never submitted.</footer>
    </main>;
  }
