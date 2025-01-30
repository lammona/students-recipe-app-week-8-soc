import { useState } from "react";
import "./form.css";

function Form({ addFlashcard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addFlashcard({ question, answer });
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="question" className="formContent">
        Question:
      </label>
      <input
        type="text"
        className="input"
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <label htmlFor="answer" className="formContent">
        Answer:
      </label>
      <input
        type="text"
        className="input"
        id="answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
}

export default Form;
