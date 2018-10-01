import React, {Component} from 'react';
import Ink from 'react-ink';
import classnames from "classnames";

class Option extends Component {
  constructor(props) {
    super(props);
  }

  _selectOption(option) {
    this.props.closeMenu();
    this.props.onChange(option);
  }

  render() {
    return (<button onClick={this._selectOption.bind(this, this.props.value)} className={classnames({
        selected: typeof this.props.selected === "boolean"
          ? this.props.selected
          : this.props.selected === this.props.value
      }, this.props.className, "dropdown-menu-item")}>
      {this.props.children}
      <Ink/>
    </button>);
  }
}

export default Option;
