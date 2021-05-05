import React, { Component } from 'react';
import { StyledUpload } from '../styled/styledUpload';

import { CSVReader } from 'react-papaparse';

const buttonRef = React.createRef();

export default class UploadFile extends Component {
  state = {
    data: null
  };
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    return (
      <CSVReader
        ref={buttonRef}
        onFileLoad={this.props.handleOnFileLoad}
        onError={this.handleOnError}
        noClick
        noDrag
        onRemoveFile={this.handleOnRemoveFile}
      >
        {({ file }) => (
          <StyledUpload>
            {' '}
            <button type="button" onClick={this.handleOpenDialog}>
              Browse file
            </button>
            <div>{file && file.name}</div>
            <button onClick={this.handleRemoveFile}>Remove</button>
          </StyledUpload>
        )}
      </CSVReader>
    );
  }
}
