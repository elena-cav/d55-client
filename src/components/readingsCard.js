import React, { Component } from 'react';
import { StyledCard } from '../styled/styledCard';
export default class ReadingsCard extends Component {
  render() {
    const { meter_reading_id, reading, account_id } = this.props;
    return (
      <StyledCard>
        <p>Meter Reading ID: {meter_reading_id}</p>
        <p>Reading: {reading}</p>
        <p>Account ID: {account_id}</p>
      </StyledCard>
    );
  }
}
