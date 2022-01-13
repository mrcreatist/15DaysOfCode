import {useColorScheme} from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

export const isDarkMode = () => {
  return useColorScheme() === 'dark';
};
