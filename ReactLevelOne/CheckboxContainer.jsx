import React from "react";
import Checkbox from "./Checkbox";

/**
 * Container for all our checkboxes
 */
class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    const { list } = this.props;

    this.state = {
      // true if all the checkboxes are checked
      allChecked: false,
      // list of static checkboxes defined in App.js
      list: list
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckAll = this.handleCheckAll.bind(this);
  }

  /**
   * OChnage event for classic checkboxes
   */
  handleChange(e) {
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      list = list.map(item =>
        item.name === itemName ? { ...item, isChecked: checked } : item
      );
      allChecked = list.every(item => item.isChecked);

      return { list, allChecked };
    });
  }

  /**
   * OnChange Event for "check all" checkbox
   */
  handleCheckAll(e) {
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      allChecked = checked;
      list = list.map(item => ({ ...item, isChecked: checked }));

      return { list, allChecked };
    });
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="checkbox"
          name="checkAll"
          checked={this.state.allChecked}
          onChange={this.handleCheckAll}
        />
        Check all
        {this.state.list.map(item => (
          <Checkbox
            name={item.name}
            checked={item.isChecked}
            onChange={this.handleChange}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;
