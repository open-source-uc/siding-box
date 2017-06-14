import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  max-height: 30px;
  min-height: 30px;
  flex: 1;
  background-color: rgba(169,188,231,1);
  border-bottom: solid 1px rgba(104,104,104,.25);
  border-top: solid 1px rgba(104,104,104,1);
  padding: 0 12px;
`;

const Select = ({ options, ...props }) =>
  <select {...props}>
    {options.map(option =>
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    )}
  </select>;

Select.propTypes = {
  options: PropTypes.array,
};

const LabelText = styled.span`
  font-size: 12px;
  margin-left: 2px;
`;

class MiddleToolbar extends Component {
  constructor(props) {
    super(props);
    this.handlePeriodChange = this.handlePeriodChange.bind(this);
    this.handleShowChange = this.handleShowChange.bind(this);
  }

  handlePeriodChange(event) {
    console.log(event.target.value);
  }

  handleShowChange(event) {
    console.log(event.target.value);
  }

  render() {
    const current = "2017-1";
    const onlyMine = true;
    const options = [
      { value: "2017-1", text: "2017-1" },
      { value: "2017-2", text: "2017-2" },
      { value: "2016-1", text: "2016-1" },
      { value: "2016-2", text: "2016-2" },
    ];
    return (
      <Container>
        <Select
          value={current}
          onChange={this.handlePeriodChange}
          options={options}
        />
        <label>
          <input
            type="checkbox"
            checked={onlyMine}
            onChange={this.handleShowChange}
          />
          <LabelText>Solo mis cursos</LabelText>
        </label>
      </Container>
    );
  }
}

export default MiddleToolbar;
