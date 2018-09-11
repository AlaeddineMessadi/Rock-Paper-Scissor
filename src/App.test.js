import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import GameStore from './stores/GameStore';
import ErrorBoundary from './Utils/ErrorBoundary';
import App from './App';

import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ErrorBoundary>
      <Provider game={ GameStore }>
        <App />
      </Provider>
    </ErrorBoundary>, div);
  ReactDOM.unmountComponentAtNode(div);
});

Enzyme.configure({ adapter: new Adapter() })

it("renders an app with in Human VS Robot Mode", async () => {
  const wrapper = Enzyme.mount(
    <ErrorBoundary>
      <Provider game={ GameStore }>
        <App />
      </Provider>
    </ErrorBoundary>
  );

  // Home title is rendered
  expect(wrapper.contains(<h2>HUMAN VS ROBOT</h2>)).toEqual(true);
  expect(wrapper.contains(<h3>HUMAN</h3>)).toEqual(true);
  expect(wrapper.contains(<h3>ROBOT</h3>)).toEqual(true);
});