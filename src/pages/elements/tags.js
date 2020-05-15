import React, { Component, useState, Fragment } from "react";

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import {FormGroup} from 'react-bootstrap'


const Tags = () => {
    const [selected, setSelected2] = useState(['PPE']);
    let categories= ['PPE', 'harrassment', 'ethics', 'wages', 'jobs', 'co-workers'];
    return (
        <Typeahead
          id="categories"
          labelKey="Search Categories"
          onChange={setSelected2}
          options={categories}
          placeholder="Search Categories..."
          selected={selected}
          size={'large'}
        />
    );
  };

  export default Tags;