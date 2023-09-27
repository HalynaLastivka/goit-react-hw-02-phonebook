import React, { Component } from 'react';

export default class Filter extends Component {
  state = {
    filter: '',
  };

  onhandleChangeFilter = event => {
    const { value } = event.target;

    // Оновлюємо стан компонента
    this.setState({ filter: value });

    // Викликаємо функцію filterList через props
    this.props.filterList(value);
  };

  render() {
    return (
      <label>
        Find contacts by name:
        <input
          onChange={this.onhandleChangeFilter}
          value={this.state.filter}
          type="text"
          name="filter"
        />
      </label>
    );
  }
}
