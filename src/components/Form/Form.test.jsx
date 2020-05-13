import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';

describe('Form', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Form
        onSubmit={() => {}}
        onChange={() => {}}
        url="https://history.muffinlabs.com/date"
        method="get"
        buttonText="Send" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
