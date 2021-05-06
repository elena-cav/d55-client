import React, { Component } from 'react';
import UploadFile from './uploadFile';
import * as api from '../utils/api';
import logo from '../images/d55.png';
import { StyledSubmission } from '../styled/styledSubmission';
import { Link } from 'react-router-dom';

export default class submissionPage extends Component {
  state = {
    readings: null,
    err: null
  };

  handleOnFileLoad = (data) => {
    this.setState({ readings: null, data, err: null });
    api
      .postReadings(this.state.data)
      .then((readings) => {
        this.setState({ readings });
      })
      .catch((err) => {
        this.setState({ err });
      });
  };

  render() {
    const { readings, err } = this.state;
    return (
      <StyledSubmission>
        <img alt={'d55 logo'} src={logo}></img>
        <h1>Meter Readings Uploader</h1>
        <UploadFile
          readings={readings}
          handleOnFileLoad={this.handleOnFileLoad}
        />
        {err && (
          <h2>
            {err.response.status} {err.response.data.msg}
          </h2>
        )}

        {readings && (
          <div>
            <h2>Valid Submissions</h2>
            <ul>
              {readings.validSubmissions.map((reading) => {
                return (
                  <div className="submission">
                    <li key={readings.meter_reading_id}>
                      <p>Meter Reading ID: {reading.meter_reading_id}</p>
                      <p>Account ID: {reading.account_id}</p>
                      <p>Reading: {reading.reading}</p>
                    </li>
                  </div>
                );
              })}
            </ul>
            <h2>Invalid Submissions</h2>
            <ul>
              {readings.invalidSubmissions.map((reading) => {
                return (
                  <div className="submission">
                    <li key={readings.meter_reading_id}>
                      <p>Meter Reading ID: {reading.meter_reading_id}</p>
                      <p>Account ID: {reading.account_id}</p>
                      <p>Reading: {reading.reading}</p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
        <Link></Link>
      </StyledSubmission>
    );
  }
}
