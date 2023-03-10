import {Box, Select, styled, TextField} from "@mui/material";

export const SearchContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '500px',
  gap: '1rem'
})

export const SelectBox = styled(Box)({
  flex: 1
})
export const OptionsBox = styled(Box)({
  display: 'flex',
  gap: '1rem'
})

export const SearchBox = styled(Box)({
  display: 'flex',
  gap: '16px',
  width: '100%',
})

export const StyledSelect = styled(Select)({
  color: '#eee'
});

export const StyledTextField = styled(TextField)((
  { fontcolor }
) => ({
  input: {
    color: fontcolor,
  },
}));

export const ModalContainer = styled(Box)({
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})