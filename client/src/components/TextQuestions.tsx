const styles = require("../styles/text-questions.module.css").default;

const TextQuestions = ({
  question,
  onInputChange,
  value,
  showLink,
  disabled,
}: any) => {
  const handleChange = (event: any) => {
    const data = event.target.value;
    onInputChange(data);
  };

  return (
    <>
      <div className={styles["text-questions"]}>
        <label htmlFor="">{question}</label>
        {showLink && (
          <p>
            <a
              href={
                "https://nclpub.wipo.int/enfr/?explanatory_notes=show&gors=&lang=en&menulang=en&notion=class_headings&version=20240101"
              }
            >
              [Check this link to know your TM Class details]
            </a>
          </p>
        )}
        <input
          placeholder="Your Answer"
          onChange={handleChange}
          value={value}
          type="text"
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default TextQuestions;
