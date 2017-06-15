import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import * as periods from "../redux/modules/periods";

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

const mapStateToProps = state => ({
  periods: state.periods.options,
  current: state.periods.current,
});

const mapDispatchToProps = {
  select: periods.select,
};

class MiddleToolbar extends Component {
  static propTypes = {
    current: PropTypes.string.isRequired,
    select: PropTypes.func.isRequired,
    periods: PropTypes.array,
  };

  static defaultProps = {
    periods: [],
  };

  handlePeriodChange = event => {
    this.props.select(event.target.value);
  };

  // handleShowChange = event => {
  //   console.log(event.target.value);
  // };

  render() {
    const onlyMine = true;

    return (
      <Container>
        <Select
          value={this.props.current}
          onChange={this.handlePeriodChange}
          options={this.props.periods}
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

export default connect(mapStateToProps, mapDispatchToProps)(MiddleToolbar);
