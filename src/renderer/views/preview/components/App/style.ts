import styled, { css } from 'styled-components';
import { ITheme } from '~/interfaces';
import { maxLines } from '~/renderer/mixins';
import { TAB_MAX_WIDTH } from '~/renderer/views/app/constants/tabs';
import { DIALOG_TRANSITION, DialogStyle } from '~/renderer/mixins/dialogs';

export const StyledApp = styled(DialogStyle)`
  padding: 12px;
  font-size: 13px;
  max-width: ${TAB_MAX_WIDTH}px;
  margin-top: 0;

  ${({ theme, xTransition }: { theme?: ITheme; xTransition: boolean }) => css`
    color: ${theme['dialog.textColor']};
    transition: ${DIALOG_TRANSITION} ${xTransition ? ', 0.08s margin-left' : ''};
  `}
`;

export const Title = styled.div`
  font-weight: 500;
  line-height: 1.3rem;
  ${maxLines(2)};
  opacity: 0.87;
`;

export const Domain = styled.div`
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.3rem;
`;

export const Subtitle = styled.div`
  font-size: 13px;
  opacity: 0.54;
  margin-top: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 16px;
  float: right;
`;
