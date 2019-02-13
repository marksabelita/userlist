import { renderComponent, expect } from '../test-helper';
import App from '../../src/components/users';

describe('Users', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component.find('list-group-item').length).to.equal(0);
    expect(component).to.contain('User list:');
  });
});