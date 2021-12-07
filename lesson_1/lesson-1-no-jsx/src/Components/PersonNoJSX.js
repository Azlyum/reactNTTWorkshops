import React from 'react'

const PersonNoJSX = props => {
    return React.createElement('div', {
        className: 'container',
        children: [
          React.createElement('span', null, 'Hello'),
          ' ',
          React.createElement('span', null, 'World'),
          ' ',
          React.createElement('span', null, 'I'),
          ' ',
          React.createElement('span', null, 'Hope'),
          ' ',
          React.createElement('span', null, 'You'),
          ' ',
          React.createElement('span', null, 'Are'),
          ' ',
          React.createElement('span', null, 'Having'),
          ' ',
          React.createElement('span', null, 'A'),
          ' ',
          React.createElement('span', null, 'Wonderful'),
          ' ',
          React.createElement('span', null, 'Day'),
        ],
      })
      
}

export default PersonNoJSX