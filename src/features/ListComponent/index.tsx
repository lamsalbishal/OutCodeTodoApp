import React from 'react';
import { View, ViewProps, Dimensions } from 'react-native';

import { FlashList, FlashListProps } from '@shopify/flash-list';
const { height, width } = Dimensions.get('window');

export interface SuperListProps extends FlashListProps<any> {
  customStyle?: ViewProps['style'];
}

export default function ListComponent({
  data,
  ...props
}: SuperListProps): React.ReactElement {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, height: '100%' }}>
      <FlashList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        extraData={{ ...data }}
        estimatedItemSize={201}
        {...props}
      />
    </View>
  );
}
