import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Story from '../components/story/Story';
import Chat from '../components/chat/Chat';
import Loading from '../components/loading/Loading';
import Start from '../components/loading/Start';

const HomeStack = createStackNavigator({
  Loading: Chat,
  Start: Start,
  Story: Story,
  Chat: Chat
}, {headerMode: 'none'});

export default HomeStack;
