import React, { Component } from 'react';
import UploadFile from './UploadFile';
import * as api from '../utils/api';
import { StyledSubmission } from '../styled/styledSubmission';
import { Ring } from 'react-awesome-spinners';

export default class SubmissionPage extends Component {
  state = {
    readings: null,
    err: null,
    data: null,
    isLoading: false
  };

  handleOnFileLoad = (data) => {
    this.setState({ readings: null, data, err: null, isLoading: true });
    api
      .postReadings(this.state.data)
      .then((readings) => {
        this.setState({ readings, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  render() {
    const { readings, err, isLoading } = this.state;
    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );

    return (
      <StyledSubmission>
        <h1>Meter Readings Uploader</h1>
        <UploadFile
          readings={readings}
          handleOnFileLoad={this.handleOnFileLoad}
        />

        {err && (
          <>
            <h2>Error {err.response.status}</h2>
            {err.response.status === 400 ? (
              <h2>{err.response.data.msg}</h2>
            ) : (
              <h2>{err.response.statusText}, max file size: 500 records</h2>
            )}
          </>
        )}

        {readings && readings.validSubmissions && readings.invalidSubmissions && (
          <div>
            <h2>Valid Submissions</h2>
            <ol>
              {readings.validSubmissions.map((reading) => {
                return (
                  <li className="submission" key={reading.meter_reading_id}>
                    <p>Meter Reading ID: {reading.meter_reading_id}</p>
                    <p>Account ID: {reading.account_id}</p>
                    <p>Reading: {reading.reading}</p>
                  </li>
                );
              })}
            </ol>
            <h2>Invalid Submissions</h2>
            <ol>
              {readings.invalidSubmissions.map((reading) => {
                return (
                  <React.Fragment key={reading.meter_reading_id}>
                    {reading.reading && (
                      <li className="submission">
                        <p>Meter Reading ID: {reading.meter_reading_id}</p>
                        <p>Account ID: {reading.account_id}</p>
                        <p>Reading: {reading.reading}</p>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ol>
          </div>
        )}
      </StyledSubmission>
    );
  }
}
