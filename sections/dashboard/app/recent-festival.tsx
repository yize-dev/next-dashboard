import { alpha, Card, CardProps, Grid, ListItemText, Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

type FestivalProps = {
    name: string,
    days: number
}

interface Props extends CardProps {
    title?: string;
    subheader?: string;
    list: FestivalProps[];
}

export default function RecentFestival({ title, subheader, list, ...other }: Props) {
    
    const theme = useTheme();

    return (
        <Card {...other}>
            <Grid container sx={{py:2}}>
                {list.map((item) => (
                    <Grid item xs={12} sm={6} md={2.4}>
                    <Stack direction={"row"} key={item.name} alignItems="center" sx={{pl:3}}>
                        <Typography variant="h5" sx={{color: theme.palette['primary'].light, fontWeight:500, minWidth:40, textAlign:'right'}}>{item.days}</Typography> 
                        <Typography variant="body1" sx={{ml:1, color:"rgb(108, 115, 127)"}}>days until</Typography>
                        <Typography variant="subtitle1" sx={{ml:1, fontWeight:500}}>{item.name}</Typography> 
                    </Stack>
                    </Grid>
                ))}
            </Grid>
        </Card>
    )
}