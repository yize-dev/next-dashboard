"use client"

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import RouterLink from 'next/link';
import { useRouter } from 'next/navigation'
import Head from 'next/head';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

// hooks
import { useBoolean } from '@/hooks/use-boolean';

// components
import Iconify from '@/components/iconify/iconify';
import AuthClassicLayout from '@/layouts/auth/classic';

import FormProvider from '@/components/hook-form/form-provider';
import RHFTextField from '@/components/hook-form/rhf-text-field';

// ----------------------------------------------------------------------

export default function Page() {

  const router = useRouter()

  const [errorMsg, setErrorMsg] = useState('');


  const password = useBoolean();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password length cannot exceed 12 characters').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Password must contain numbers and letters'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {

      // const response = await fetch('http://192.168.2.100/apis/index/countryPhoneCode');
      // const data = await response.json();
      // console.log(data);

      router.push('/dashboard')
      
    } catch (error :Error | any) {
      console.error(error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant='h4' className='text-2xl font-bold'>Sign in to dropify</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">New user?</Typography>

        <Link component={RouterLink} href={'/auth/sign-up'} variant="subtitle2">
          Create an account
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={3}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <RHFTextField name="email" label="Email address" />

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Link
        component={RouterLink}
        href={'/auth/forgot-password'}
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: 'flex-end' }}
      >
        Forgot password?
      </Link>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
    </Stack>
  );

  return (
    <>
    <Head>
      <title>My Page Title</title>
    </Head>

    <AuthClassicLayout title='Start your journey with dropify.'>
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
    </AuthClassicLayout>
    </>
  );
}
