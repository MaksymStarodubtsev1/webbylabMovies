import {Card, styled} from "@mui/material";

export const ListContainer = styled('div')({
  paddingTop: '24px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '16px'
});


export const StyledCard = styled(Card)({
  width: '345px',
  minHeight: '170px',
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});