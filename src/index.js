import { render } from "@wordpress/element";
import App from "./App";
import "./style/main.css";

if (document.getElementById("tf-shortcode-page-app")) {
  render(<App />, document.getElementById("tf-shortcode-page-app"));
}
