// src/components/AppointmentForm.tsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { bookAppointment } from '../api';

const AppointmentForm: React.FC = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    date: '',
    carDetails: {
      make: '',
      model: '',
      year: '',
    },
    contactDetails: {
      name: '',
      email: '',
      phone: '',
    },
    paymentStatus: 'Pending',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name in formData.contactDetails) {
      setFormData((prev) => ({
        ...prev,
        contactDetails: { ...prev.contactDetails, [name]: value },
      }));
    } else if (name in formData.carDetails) {
      setFormData((prev) => ({
        ...prev,
        carDetails: { ...prev.carDetails, [name]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await bookAppointment(formData);
      toast({
        title: 'Appointment Booked',
        description: 'Confirmation email has been sent.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to book appointment.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box borderWidth="1px" p={4} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Car Make</FormLabel>
            <Input name="make" onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Car Model</FormLabel>
            <Input name="model" onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Car Year</FormLabel>
            <Input name="year" onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input name="phone" onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Payment Status</FormLabel>
            <Select name="paymentStatus" onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Overdue">Overdue</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Submit Appointment
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AppointmentForm;
