import React, { Component } from 'react';
import * as api from '../utils/api';
import ReadingsCard from './readingsCard';
import { Ring } from 'react-awesome-spinners';
import { StyledList } from '../styled/styledList';
export default class ReadingsList extends Component {
  state = {
    readings: [],
    isLoading: true
  };
  componentDidMount() {
    api.getReadings().then((readings) => {
      this.setState({ readings, isLoading: false });
    });
  }

  render() {
    const { readings, isLoading } = this.state;
    console.log(readings);
    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );
    return (
      <StyledList>
        <ul>
          <h1>Readings</h1>
          {readings.map(({ account_id, meter_reading_id, reading }) => {
            return (
              <ReadingsCard
                meter_reading_id={meter_reading_id}
                account_id={account_id}
                reading={reading}
              />
            );
          })}
        </ul>
      </StyledList>
    );
  }
}
