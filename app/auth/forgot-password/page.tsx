"use client"

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import RouterLink from 'next/link' 
import { useRouter } from 'next/navigation';

// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// auth


// assets
import PasswordIcon from '@/public/assets/icons/password-icon';

// components
import Iconify from '@/components/iconify/iconify';
import FormProvider   from '@/components/hook-form/form-provider';
import  RHFTextField  from '@/components/hook-form/rhf-text-field';
import CompactLayout from '@/layouts/compact/layout';


// ----------------------------------------------------------------------

export default function Page() {

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const router = useRouter();

  const defaultValues = {
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const searchParams = new URLSearchParams({
        email: data.email,
      }).toString();
      const href = `/auth/new-password?${searchParams}`;
      router.push(href)
    } catch (error) {
      console.error(error);
    }
  });

  const renderForm = (
    <Stack spacing={3} alignItems="center">
      <RHFTextField name="email" label="Email address" />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Send Request
      </LoadingButton>

      <Link
        component={RouterLink}
        href={'/auth/sign-in'}
        color="inherit"
        variant="subtitle2"
        sx={{
          alignItems: 'center',
          display: 'inline-flex',
        }}
      >
        <Iconify icon="eva:arrow-ios-back-fill" width={16} />
        Return to sign in
      </Link>
    </Stack>
  );

  const renderHead = (
    <>
      <PasswordIcon sx={{ height: 96 }} />

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography variant="h3">Forgot your password?</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Please enter the email address associated with your account and We will email you a link
          to reset your password.
        </Typography>
      </Stack>
    </>
  );

  return (
    <CompactLayout>
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
    </CompactLayout>
  );
}
