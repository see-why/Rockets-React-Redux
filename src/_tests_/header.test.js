import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from '../components/Header';

configure({ adapter: new Adapter() });

describe('the UI page', () => {
  test('displays correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });

  test('should have Home, Calculator and Quote link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(screen.getByText('Rockets')).toHaveTextContent('Rockets');
    expect(screen.getByText('Missions')).toHaveTextContent('Missions');
    expect(screen.getByText('My profile')).toHaveTextContent('My profile');
  });
});
