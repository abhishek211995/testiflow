import { Outlet, Link } from "react-router-dom";

export default function TfHeader() {
  return (
    <div className="tf_header">
      <div className="tf_container">
        <div className="tf_header_content_wrap">
          <div className="tf_logo">
            <h1>Testiflow</h1>
          </div>
          <div className="tf_menu_wrap">
            <ul>
              <li>
                <Link to="/">
                  <a className="text-sm font-medium text-center text-gray-900 outline-none">
                    All Shortcodes
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/create-shortcode">
                  <a className="text-sm font-medium text-center text-gray-900">
                    Generate Shortcode
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/preferences">
                  <a className="text-sm font-medium text-center text-gray-900">
                    Preferences
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/docs">
                  <a className="text-sm font-medium text-center text-gray-900">
                    Docs
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
