import styled from 'styled-components';

export const SubTitle = styled.span`
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;
