// src/pages/BookAppointment.tsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import AppointmentForm from '../components/AppointmentForm';

const BookAppointment: React.FC = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Book an Appointment</Heading>
      <AppointmentForm />
    </Box>
  );
};

export default BookAppointment;
