/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import React from 'react';
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';

describe('ErrorMessage', () => {
    const defaultProps: ErrorMessageProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ErrorMessage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ErrorMessage')).toBeTruthy();
    });
});
