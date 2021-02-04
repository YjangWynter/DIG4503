import React from 'react';

import ReactDOM from 'react-dom';
import Customer from './components/customer'

const customer = {

  first_name: "Alex",

  last_name: "DeVille"

};

//              your code inside these <div> tags

const output = <div>
  <Customer firstName = {customer.first_name} lastName = {customer.last_name} />
</div>;

ReactDOM.render(output, document.querySelector("#root"));