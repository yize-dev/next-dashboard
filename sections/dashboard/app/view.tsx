
'use client'

import { useSettingsContext } from "@/components/settings";
import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import EcommerceSales from "./ecommerce-sales";
import WidgetSummary from "./widget-summary";
import { _ecommerceLatestProducts, _appRecentFestivals } from "@/_mock/_overview";
import HotSellingProducts from "./hot-selling-products";
import RecentFestival from "./recent-festival";

export default function AppView() {
    const settings = useSettingsContext();
    
    return (<>
        <Container maxWidth={settings.themeStretch ? 'xl' : false}>
 
        <Grid container spacing={{md:3, sm:2}}  py={2} direction={"row"} >
            <Grid item  xs={12} sm={12} md={8}>
            <Grid container direction={"column"} spacing={{md:3, sm:2}} >

                <Card sx={{p:{md:3, sm:2}, ml:{md:3, sm:2}, mt:{md:3, sm:2}}}>
                <Grid container spacing={{xs:3, md:2, sm:1}} item>
                    <Grid item xs={12} sm={6} md={3}>
                    <WidgetSummary
                        title="Alarm"
                        color="error"
                        total={110}
                        icon={"/assets/icons/glass/ic_chart.svg"}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                    <WidgetSummary
                        title="Warning"
                        color="warning"
                        total={120}
                        icon={"/assets/icons/glass/ic_chart.svg"}
                    />
                    </Grid>
                    
                    <Grid  item xs={12} sm={6} md={3}>
                    <WidgetSummary
                        title="Unpaid"
                        color="info"
                        total={150}
                        icon={"/assets/icons/glass/ic_info.svg"}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                    <WidgetSummary
                        title="Pending"
                        total={360}
                        icon={"/assets/icons/glass/ic_paper.svg"}
                    />
                    </Grid>
                </Grid> 
                </Card>

                <Grid item >
                <EcommerceSales
                    title="Order Number"
                    chart={{
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    series: [
                        {
                        year: 'day',
                        data: [
                            {
                            name: 'Total Income',
                            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                            },
                            {
                            name: 'Total Expenses',
                            data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                            },
                        ],
                        },
                        {
                        year: 'week',
                        data: [
                            {
                            name: 'Total Income',
                            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                            },
                            {
                            name: 'Total Expenses',
                            data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                            },
                        ],
                        },
                        {
                        year: 'month',
                        data: [
                            {
                            name: 'Total Income',
                            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                            },
                            {
                            name: 'Total Expenses',
                            data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                            },
                        ],
                        },

                    ],
                    }}
                />
                </Grid>       
            </Grid>
            </Grid>

            <Grid item  xs={12} sm={12} md={4}  >
                <HotSellingProducts title="Top 5 Aug 1st To 15th 2023" list={_ecommerceLatestProducts}
                    sx={{height:657}}
                />
            </Grid>
        </Grid>

        <RecentFestival list={_appRecentFestivals}/>

        </Container>
    </>)
}