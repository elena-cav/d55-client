import React, { Component } from 'react';
import * as api from '../utils/api';
import ReadingsCard from './ReadingsCard';
import { Ring } from 'react-awesome-spinners';
import { StyledList } from '../styled/styledList';
export default class ReadingsList extends Component {
  state = {
    readings: [],
    isLoading: true,
    sort_by: 'meter_reading_id',
    ascending: true
  };
  componentDidMount() {
    api.getReadings().then((readings) => {
      this.setState({ readings, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, ascending } = this.state;
    if (prevState.sort_by !== sort_by || prevState.ascending !== ascending) {
      let order = ascending ? 'asc' : 'desc';

      api.getReadings(sort_by, order).then((readings) => {
        this.setState({ readings, isLoading: false });
      });
    }
  }

  sortAccounts = (sort_by) => {
    const { ascending } = this.state;
    this.setState({
      isLoading: true,
      sort_by,
      ascending: !ascending
    });
  };

  render() {
    const { readings, isLoading, sort_by, ascending } = this.state;
    let arrow = ascending ? <p>⬇️</p> : <p>⬆️</p>;

    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );
    return (
      <StyledList>
        <h1>Readings</h1>
        <h3>Sort by</h3>
        <div className="btnWrapper">
          <button
            className="sortBtn"
            onClick={() => {
              this.sortAccounts('meter_reading_id');
            }}
          >
            Meter Reading ID{' '}
            {sort_by === 'meter_reading_id' && <span>{arrow}</span>}
          </button>
          <button
            className="sortBtn"
            onClick={() => {
              this.sortAccounts('account_id');
            }}
          >
            Account ID {sort_by === 'account_id' && <span>{arrow}</span>}
          </button>
          <button
            className="sortBtn"
            onClick={() => {
              this.sortAccounts('reading');
            }}
          >
            Reading {sort_by === 'reading' && <span>{arrow}</span>}
          </button>
        </div>
        <ul>
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
