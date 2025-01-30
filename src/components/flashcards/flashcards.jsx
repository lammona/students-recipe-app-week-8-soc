import Flashcard from "./cards/flashcard";
import "./flashcards.css";

function FlashcardsContainer({ flashcards }) {
  return (
    <div className="cardContainer">
      <Flashcard
        question="What is React?"
        answer="React is a free and open-source front-end JavaScript library!"
      />
      <Flashcard
        question="What is JSX?"
        answer="JSX is a syntax extension of regular JavaScript and is used to create React elements!"
      />
      <Flashcard
        question="What is a state in React?"
        answer="The state of a component is an object that holds some information that may change over the lifetime of the component!"
      />
      <Flashcard
        question="What are props in React?"
        answer="Props are objects that can be used inside of a component which can allow us to pass information!"
      />
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </div>
  );
}

export default FlashcardsContainer;
