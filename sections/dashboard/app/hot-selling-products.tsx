
import Scrollbar from '@/components/scrollbar';
import { fCurrency } from '@/utils/format-number';
import { Avatar, Box, CardContent, CardHeader, Link, ListItemText, Stack, Typography } from '@mui/material';
import Card, { CardProps } from '@mui/material/Card';
import { useTheme, alpha } from '@mui/material';
import { bgBlur } from '@/theme/css';

type ItemProps = {
    id: string;
    name: string;
    coverUrl: string;
    price: number;
    priceSale: number;
    hotArea: string
};

interface Props extends CardProps {
    title?: string;
    subheader?: string;
    list: ItemProps[];
}

export default function HotSellingProducts({ title, subheader, list, ...other }: Props) {
    const theme = useTheme();
    
    return (
        <Card {...other}>
          <CardHeader title={title} subheader={subheader} titleTypographyProps={{
            variant: 'h6', 
            lineHeight: 1.6
          }}/>
          <CardContent sx={{height:600}}>
            <Scrollbar>
              <Stack spacing={3} sx={{
                minWidth: 360 ,
              }}>
                {list.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </Stack>
            </Scrollbar>
          </CardContent>
        </Card>
      );


    type ProductItemProps = {
        product: ItemProps;
    };
  
    function ProductItem({ product }: ProductItemProps) {
    const { name, coverUrl, price, priceSale, hotArea } = product;
  
    return (
      <Stack direction="row" spacing={2} sx={{
       
      }}>
        <Avatar
          variant="rounded"
          alt={name}
          src={coverUrl}
          sx={{ width: 80, height: 80, flexShrink: 0 }}
        />
  
        <ListItemText
          sx={{height:80}}
          primary={<Link sx={{ 
            color: "rgb(33, 43, 54)",
            typography: 'body2',
            fontWeight: 500
          }}>{name}</Link>}
          secondary={
            <>
              <Stack direction={'row'} color={'rgb(108, 115, 127)'}>
                Lowest: 
                <Box component="span" sx={{ color: 'error.main', ml:1 }}>
                  {fCurrency(price)}
                </Box>

                <Stack direction={'row'} sx={{ml:3}}>
                  Monthly orders: 
                  <Box component="span" sx={{ color: 'rgb(255, 172, 130)', ml:1 }}>
                    {'5000+'}
                  </Box>
                </Stack>
              </Stack>

              <Stack direction={'row'} >
                Hot sale area: 
                <Box component="span" sx={{ color: alpha('#f48fb1', 0.9), ml:1 }}>
                  {hotArea}
                </Box>
              </Stack>
            </>
          }
          primaryTypographyProps={{
            noWrap: true,
          }}
          secondaryTypographyProps={{
            mt: 0.5,
          }}
        />


      </Stack>
    );
  }
  
}