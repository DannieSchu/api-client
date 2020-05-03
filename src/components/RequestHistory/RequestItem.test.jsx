import React from 'react';
import { shallow } from 'enzyme';
import RequestItem from './RequestItem.jsx';

describe('RequestItem', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RequestItem method='post' url='https://jsonplaceholder.typicode.com/posts' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
