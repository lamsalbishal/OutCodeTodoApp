/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../src/page/HomeScreen';

// Note: import explicitly to use the types shiped with jest.
import { it, expect } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    let HomeData: any = renderer.create(<HomeScreen />).getInstance()
    expect(HomeData.completeOrNot(1))
});


