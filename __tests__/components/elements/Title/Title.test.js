import React from 'react';
import { render } from '../../../settings/test-utils';
import Title from '../../../../src/component/Title/Title';

describe('<Title />', () => {
  test('should render Title component', () => {
    const mockTitle = 'mock title';
    const { asFragment } = render(<Title text={mockTitle} />);
    expect(asFragment(<Title text={mockTitle} />)).toMatchSnapshot();
  });
});
