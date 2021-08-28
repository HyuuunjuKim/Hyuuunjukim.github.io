import { CSSObject } from '@emotion/react';
import React, { ButtonHTMLAttributes } from 'react';
import { ButtonBackgroundType } from '../../../types';
import { Container } from './Button.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundType?: ButtonBackgroundType;
  color?: string;
  isSelected?: boolean;
  css?: CSSObject;
  onClick?: () => void;
}

const Button = ({
  children,
  backgroundType = ButtonBackgroundType.FILLED,
  color = '#03BD9E',
  isSelected = false,
  css = {},
  onClick,
  ...props
}: Props) => {
  return (
    <Container
      backgroundType={backgroundType}
      isSelected={isSelected}
      color={color}
      css={css}
      onClick={onClick}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Button;
