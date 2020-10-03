import React from "react";
import queryString from "query-string";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    const query = queryString.parse(this.props.location.search);

    this.state = {
      currentTab: query.menu ? query.menu : "1",
    };
  }
  render() {
    const { currentTab } = this.state;
    return (
      <div className="Header">
        <ul>
          <li
            className={currentTab === "1" ? "active" : ""}
            onClick={() => this._tapClickHandler("1")}
          >
            <Link to="/">
              <HomeIcon />
            </Link>
          </li>
          <li
            className={currentTab === "2" ? "active" : ""}
            onClick={() => this._tapClickHandler("2")}
          >
            <Link to="/screen01">여가</Link>
          </li>
          <li
            className={currentTab === "3" ? "active" : ""}
            onClick={() => this._tapClickHandler("3")}
          >
            <Link to="/screen02">주거</Link>
          </li>
          <li
            className={currentTab === "4" ? "active" : ""}
            onClick={() => this._tapClickHandler("4")}
          >
            <Link to="/screen03">의료</Link>
          </li>
        </ul>
      </div>
    );
  }
  _tapClickHandler = (tab) => {
    this.setState({
      currentTab: tab,
    });
  };
}

export default Header;
