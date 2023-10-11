import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {ThemeProvider, dark, theme} from '@stitches.config';

import Calendar from 'pages/Calendar';

import {CalendarProvider} from 'contexts/CalendarContext';

const App: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? dark : theme}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'dark' ? '#1E1E1E' : '#FFF'}
      />
      <CalendarProvider>
        <Calendar />
      </CalendarProvider>
    </ThemeProvider>
  );
};

export default App;
