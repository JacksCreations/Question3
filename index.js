import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const axios = require('axios').default;
/* 
Looping Exercise

//REPLACED THE OPTIONS IN THE DROPDOWN LIST WITH NAMES FROM THE JSON array
//THE IDS ARE ASSIGNED TO THE VALUES

//BOOTSTRAP IMPLEMENTED IN Q4
*/

function List() {
  const [users, setUsers] = useState([]);
  users.map(function (user) {
    return user.id;
  });

  //Pulls the data from typicode
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(result.data);
    })();
  }, []);

  var selectUser = document.getElementById('select-user');

  //referenced for help with adding to drop dropdown
  //https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
  for (var i = 0; i < users.length; i++) {
    var name = users[i].name;
    var id = users[i].id;
    var el = document.createElement('option');
    el.textContent = name;
    el.value = id;
    selectUser.appendChild(el);
  }

  //DROPDOWN POPULATED WITH JSON ARRAY DATA
  return (
    <div>
      <div>
        <h3>User Dropdown</h3>
        <select id="select-user"></select>
      </div>
    </div>
  );
}

render(<List />, document.getElementById('my-app'));
