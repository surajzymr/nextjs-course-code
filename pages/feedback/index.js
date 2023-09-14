import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  return (
    <div>
      <h1>API Data Page</h1>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text} </li>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}
export default FeedbackPage;
