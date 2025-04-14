// src/pages/NotFound.tsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const NotFound: React.FC = () => {
  return (
    <Box p={4}>
      <Heading>404 - Page Not Found</Heading>
      <Text mt={2}>The page you're looking for does not exist.</Text>
    </Box>
  );
};

export default NotFound;
