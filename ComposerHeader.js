/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

const Colors = require('./Colors');
const Sizes = require('./Sizes');
const FeelSticker = require('./FeelSticker');

import type { Sticker } from './Stickers';

type Props = {
  currentSticker: ?Sticker,
};

class ComposerHeader extends Component<void, Props, void> {

  props: Props;

  render() {
    const sticker = this.props.currentSticker;
    if (sticker) {
      return <FeelSticker sticker={sticker} />;
    }
    return (
      <View style={styles.emptyCircle}>
        <Text style={styles.sup}>
          sup?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sup: {
    fontSize: 20,
    color: Colors.whyDark,
    fontWeight: 'bold',
  },
  emptyCircle: {
    borderRadius: Sizes.HEADER_CIRCLE / 2,
    height: Sizes.HEADER_CIRCLE,
    width: Sizes.HEADER_CIRCLE,
    borderColor: Colors.headerBorder,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = ComposerHeader;