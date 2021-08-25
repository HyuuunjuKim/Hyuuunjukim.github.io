import React, { ButtonHTMLAttributes } from 'react';
import { ButtonBackgroundType } from '../../types';
import { Container } from './Button.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundType?: ButtonBackgroundType;
  color?: string;
  styles?: object;
  onClick?: () => void;
}

const Button = ({
  children,
  backgroundType = ButtonBackgroundType.FILLED,
  color = '#03BD9E',
  styles = {},
  onClick,
  ...props
}: Props) => (
  <Container
    backgroundType={backgroundType}
    color={color}
    styles={styles}
    onClick={onClick}
    {...props}
  >
    {children}
  </Container>
);

export default Button;
