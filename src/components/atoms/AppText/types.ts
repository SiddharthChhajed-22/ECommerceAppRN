import type { TextProps } from 'react-native';

export type AppTextVariant = 'heading' | 'subheading' | 'body';

export type AppTextProps = TextProps & {
  variant?: AppTextVariant;
};

