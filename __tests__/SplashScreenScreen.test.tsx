/**
 * @format
 */

import 'react-native';
import React from 'react';
import SplashScreen from '../src/page/SplashScreen';

// Note: import explicitly to use the types shiped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    let snap = renderer.create(<SplashScreen />).toJSON()
    expect(snap).toMatchSnapshot()
});


