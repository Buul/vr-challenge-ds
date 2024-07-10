import React, { FC } from 'react';

import * as Styled from './Typography.styled';
import { TypographyProps } from './Typography.types';

const variantsComponents = {
  principal: (props: TypographyProps) => (
    <Styled.Paragraph {...props}>{props.children}</Styled.Paragraph>
  ),
  secondary: (props: TypographyProps) => (
    <Styled.Paragraph {...props}>{props.children}</Styled.Paragraph>
  ),
  base: (props: TypographyProps) => (
    <Styled.Paragraph {...props}>{props.children}</Styled.Paragraph>
  ),
  baseBold: (props: TypographyProps) => (
    <Styled.Paragraph {...props}>{props.children}</Styled.Paragraph>
  ),
  title: (props: TypographyProps) => (
    <Styled.Paragraph {...props}>{props.children}</Styled.Paragraph>
  ),
  value: (props: TypographyProps) => (
    <Styled.Span {...props}>{props.children}</Styled.Span>
  ),
  button: (props: TypographyProps) => (
    <Styled.Span {...props}>{props.children}</Styled.Span>
  ),
};

const Typography: FC<TypographyProps> = (props) => (
  <>{variantsComponents[props.variant || 'base'](props)}</>
);

export default Typography;
