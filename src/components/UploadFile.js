import React, { Component } from 'react';
import { StyledUpload } from '../styled/styledUpload';
import { Link } from 'react-router-dom';
import { CSVReader } from 'react-papaparse';

const buttonRef = React.createRef();

export default class UploadFile extends Component {
  state = {
    data: null
  };
  handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  render() {
    return (
      <CSVReader
        ref={buttonRef}
        onFileLoad={this.props.handleOnFileLoad}
        noClick
        noDrag
      >
        {({ file }) => (
          <StyledUpload>
            {' '}
            <button
              className="btn"
              type="button"
              onClick={this.handleOpenDialog}
            >
              Browse file
            </button>
            <Link
              className="btn"
              to="/resources/meter_reading_template.csv"
              target="_blank"
              download
            >
              Download Template
            </Link>
            <p className="fileName">{file && file.name}</p>
          </StyledUpload>
        )}
      </CSVReader>
    );
  }
}
