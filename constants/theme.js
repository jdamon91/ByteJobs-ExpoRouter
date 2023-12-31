const COLORS = {
  primary: '#2084b7',
  secondary: '#a8d7e9',
  tertiary: '#d5e9f2',

  gray: '#83829A',
  gray2: '#C1C0C8',
  gray3: '#EFEFF1',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',

  lightBlue: '#E6F0F7',
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const MARGIN = {
  xSmall: 5,
  small: 10,
  medium: 15,
  large: 20,
  xLarge: 30,
  xxLarge: 40,
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS, MARGIN };
