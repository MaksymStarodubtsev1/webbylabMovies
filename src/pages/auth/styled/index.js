import {Box, styled} from "@mui/material";

export const FormContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
});

export const StyledBox = styled(Box)({
  py: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px 0',
  alignItems: 'center',
  maxWidth: '300px',
});