import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';

const ICONS = {
  "user": AccountCircle,
  "account": AccountCircle,
  "password": KeyIcon
}

interface IconProps {
  typeIcon?: keyof typeof ICONS;
}

const Icon: React.FC<IconProps> = ({ typeIcon }) => {
  const IconComponent = typeIcon ? ICONS[typeIcon] : AccountCircle;
  return <IconComponent sx={{ color: 'action.active' }} />;
}

interface TextFieldWithIconProps extends React.ComponentProps<typeof TextField>, IconProps {}

export const TextFieldWithIcon: React.FC<TextFieldWithIconProps> = ({typeIcon,...inputProps}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Icon typeIcon={typeIcon} />
      <TextField id={`input${inputProps.label}`} variant="standard" {...inputProps} />
    </Box>
  );
}

interface InputTextWithIconProps extends React.ComponentProps<typeof Input>, IconProps {}

export const InputTextWithIcon: React.FC<InputTextWithIconProps> =  ({typeIcon,...inputProps}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <Icon typeIcon={typeIcon} />
      <Input {...inputProps} />
    </Box>
  );
}

interface InputBaseRoundedWithIconProps extends React.ComponentProps<'input'>, IconProps {}

export const InputBaseRoundedWithIcon: React.FC<InputBaseRoundedWithIconProps> = ({typeIcon,...inputProps}) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection:'row', gap:'0.5em', justifyContent:'flex-start', alignItems:'center' }}>
      <Icon typeIcon={typeIcon} />
      <input {...inputProps} />
    </Box>
  );
}