import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import React, { Component, useState,Fragment } from "react";
import {FormGroup} from 'react-bootstrap'


const BasicExample = () => {
    const [selected, setSelected] = useState(['UW Medical', 'Virginia Mason']);
    let options= ['Microsoft', 'UW Medical', 'Virginia Mason', 'Google', 'Lyft', 'AirBNB', 'Uber', 'Amazon', 'Facebook'];
    return (
      <Fragment>
        <Typeahead
          id="companies"
          labelKey="Search Companies"
          multiple
          onChange={setSelected}
          options={options}
          placeholder="Search Companies..."
          selected={selected}
          size={'large'}
        />
      </Fragment>
    );
  };

  export default BasicExample;