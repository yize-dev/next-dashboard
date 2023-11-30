"use client"

import { useState, useEffect } from 'react';

import { alpha, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';


// hooks
import { useResponsive } from '@/hooks/use-responsive';

// theme
import { bgGradient } from '@/theme/css';

// components
import Logo from '@/components/logo';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import { Grid, ListItem } from '@mui/material';
import { Grid3x3 } from '@mui/icons-material';
import D from '@/components/logo/d';



type Props = {
    title?: string;
    image?: string;
    children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
    const theme = useTheme();
  
    const upMd = useResponsive('up', 'md');

  
    const renderLogo = (
      <Logo
        sx={{
          zIndex: 9,
          position: 'absolute',
          m: { xs: 2, md: 5 },
        }}
      />
    );
  
    const renderContent = (
      <Stack
        sx={{
          width: 1,
          height: "100vh",
          mx: 'auto',
          maxWidth: 600,
          minWidth: 215,
          px: { xs: 2, md: 10 },
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
      >
        {children}
      </Stack>
    );
  
    const   renderSection = (
      <Stack 
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        spacing={10}
        minHeight='100vh'
        minWidth={740}
        sx={{
          backgroundColor:  "#F2F4F8",
          ...bgGradient({
            color: alpha(
              theme.palette.background.default,
              theme.palette.mode === 'light' ? 0.88 : 0.94
            ),
          }),
        }}
        
      >
        
    
        <Stack >
          <Typography variant="h2" sx={{
            maxWidth: 480, textAlign: 'left',
          }} className="font-semibold">
            {title || 'Start your journey with dropify.'}
          </Typography>
        </Stack>  

        <Stack sx={{px:3}} spacing={6}>
          <Typography component="text" sx={{ 
            maxWidth: 800,
            textAlign: 'left',
            fontWeight: 500,
            fontSize: "18px",
            letterSpacing: 0.4,
            lineHeight: "32px"
          }}>
            Customers expect invoices and receipts when they place an order with your store. Order Printer Pro automatically delivers PDF invoices and receipts for you, so you save time and keep your customers happy. Make your order packing process easier, by printing packing slips, returns forms and other shipping documents for many orders at once. Fully customizable and translatable templates, so your brand can shine while including all the needed details. Simple setup with friendly 24/7 support.
          </Typography>

          <Typography component="text" sx={{ 
            maxWidth: 800,
            textAlign: 'left',
            color: "rgb(120 114 109)",
            fontWeight: 500,
            fontSize: "16px" ,
            letterSpacing: 0.5,
          }}>
          1. Automatic delivery of PDF invoices and receipts for every customer order. <br /><br />

          2. Print and export documents for many orders at once, draft orders also supported. <br /><br />

          3. Customizable invoices, receipts, packing slips, returns forms & other templates. <br /><br />

          4. Quickly filter & print orders from your Shopify admin, Shopify POS and Mobile. <br /><br />

          5. Supports Shopify Markets (translations, multi-currency, taxes, duties etc.)
          </Typography>
        </Stack> 
{/* 
        <Card sx={{
            backgroundColor:"#1f2937",
            width: 480,
            padding: 1,
        }}>
        
        <CardContent>
          <Typography component="text" sx={{ 
            textAlign: 'left',
            color: "#f8fafc",
            fontWeight: 400,
            
          }}>
            I just wanted to reach out and express my gratitude for your amazing product. I have been using it for several months now, and it has completely transformed the way I work. Keep up the great work!
          </Typography>

          <Box sx={{
            marginTop: 1,
            display: 'flex',
          }}>
            <Avatar sx={{
               width: 60, height: 60 , mr: 2, 
            }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            
            <ListItemText
            primary={'Aspen Schmitt'}
            secondary={'Dropify Select Client'}
            primaryTypographyProps={{
              sx: {color:"#f8fafc", fontSize:"16px"},
              typography: 'body2' 
            }}
            secondaryTypographyProps={{
              component: 'span',
              color: 'text.disabled',
            }}

            />
          </Box>
        </CardContent>
        </Card> */}
        {/* <Box
          component="img"
          alt="auth"
          src={image || '/assets/illustrations/illustration_dashboard.png'}
          sx={{ maxWidth: 720 }}
        /> */}
      </Stack>
    );
  
    return (
      <Stack
        component="main"
        direction="row"
        sx={{
          minHeight: '100vh',
        }}
      >
        {renderLogo}
  
        {upMd && renderSection}
        
        {renderContent}
      </Stack>
    );
  }
  

