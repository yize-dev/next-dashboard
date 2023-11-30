// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// routes
import  RouterLink  from 'next/link';
// config
import { PATH_AFTER_LOGIN } from '@/config-global';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  return (
    <Button component={RouterLink} href={PATH_AFTER_LOGIN} variant="outlined" sx={{ mr: 1, ...sx }}>
      Login
    </Button>
  );
}
