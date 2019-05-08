import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });


describe('renders without crashing', () => {
  const app = shallow(<App />);

  it('renders properly', () =>{
    expect(app).toMatchSnapshot();
  })
  
});
