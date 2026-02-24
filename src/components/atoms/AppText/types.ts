import type { TextProps } from 'react-native';

export type AppTextVariant = 'heading' | 'subheading' | 'body' | 'caption';

export type AppTextProps = TextProps & {
  variant?: AppTextVariant;
};

