// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardProps } from '@mui/material/Card';
// theme
import { bgGradient } from '@/theme/css';
// utils
import { fShortenNumber } from '@/utils/format-number';
// theme
import { ColorSchema } from '@/theme/palette';
import { ListItemText } from '@mui/material';
import SvgColor from '@/components/svg-color';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: number;
  icon: string;
  color?: ColorSchema;
}

export default function WidgetSummary({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      direction={'row'}
      sx={{
        ...bgGradient({
          direction: '135deg',
          startColor: alpha(theme.palette[color].light, 0.2),
          endColor: alpha(theme.palette[color].main, 0.08),
        }),
        py: 3,
        px: 2,
        borderRadius: 2,
        textAlign: 'center',
        backgroundColor: 'common.white',
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 50, height: 50, mb: 1}}>
        <SvgColor src={icon} sx={{
            width:50,
            height:50,
            fill:theme.palette[color].light,
            stroke:theme.palette[color].light,
            strokeWidth:1,
            strokeOpacity:0.5,
            strokeDasharray:0,
            color:theme.palette[color].light,
        }}></SvgColor>
    </Box>}



      <ListItemText primary={title} secondary={fShortenNumber(total)} primaryTypographyProps={{
        sx: {color: theme.palette.grey[500], fontWeight: theme.typography.body2,textAlign:'left'}
      }}  secondaryTypographyProps={{
        sx: {fontWeight: theme.typography.h4,textAlign:'left'}
      }} sx={{pl:2}}
      />

    </Stack>
  );
}
