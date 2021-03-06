import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../../components/01_atoms/Logo';
import { mount } from 'enzyme';
import { MockProvider } from '../../../lib/MockProvider';

describe('<Logo />', () => {
  it('should mount', () => {
    const wrapper = mount(
      <MockProvider>
        <Logo />
      </MockProvider>
    );
    expect(wrapper.find(Logo)).toHaveLength(1);
  });
});
