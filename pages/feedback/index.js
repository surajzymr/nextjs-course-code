import { buildFeedbackPath, extractFeedback } from "../api/feedback";
import Link from "next/link";
import Router from "next/router";

function FeedbackPage(props) {
  return (
    <div>
      <h1>API Data Page</h1>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text} </li>
      ))}
      <Link href={"/"}>
        <button>HomePage</button>
      </Link>
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
