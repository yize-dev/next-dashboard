import './globals.scss'

import '@fontsource-variable/public-sans';

import '@/locales/i18n'

import { Metadata } from 'next';

import ThemeProvider from '@/theme';

import { SettingsProvider} from '@/components/settings/context/settings-provider';
// import SettingsDrawer from '@/components/settings/drawer/settings-drawer';


import Loading from '@/components/loading-screen/f5-screen';


export const metadata: Metadata = {
  title: 'Dropify',
  description: 'Dropify'
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const charAt = `Dropify`;

  console.info(`%c${charAt}`, 'color: #5BE49B');

  return (  
    <html lang="en" className="h-full">
      <body className={`h-full`}>
      <SettingsProvider
          defaultSettings={{
            themeMode: 'light', // 'light' | 'dark'
            themeDirection: 'ltr', //  'rtl' | 'ltr'
            themeContrast: 'default', // 'default' | 'bold'
            themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
            themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            themeStretch: true,
            open: false,
          }}
        >
          <ThemeProvider>
            <Loading>
              {/* <SettingsDrawer/> */}
                {children}
            </Loading>
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  )
}
