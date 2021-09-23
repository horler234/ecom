import styled from 'styled-components';

/**
 * HiddenLabel is a label element that is not viewable
 * but makes inputs more accessible to screen readers.
 */
export const HiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
  padding: 0;
  margin: -1px;
`;