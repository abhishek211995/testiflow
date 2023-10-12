import { Link } from "react-router-dom";

export default function TfLinkButton(props) {
  return (
    <Link
      to={props.link}
      className={`tf_button ${props.className ? props.className : ""}`}
    >
      {props.children}
    </Link>
  );
}
