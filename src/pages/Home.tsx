// src/pages/Home.tsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Dashboard from '../components/Dashboard';
import MarketingForm from '../components/MarketingForm';

const Home: React.FC = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Car Workshop Appointment Management</Heading>
      <MarketingForm />
      <Box mt={8}>
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Home;
