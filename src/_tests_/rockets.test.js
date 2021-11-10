import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/rockets.js';

configure({ adapter: new Adapter() });

describe('the UI page', () => {
  test('displays correctly', () => {
    const component = shallow(<Provider store={store}><Rockets /></Provider>);
    expect(component).toMatchSnapshot();
  });
});
