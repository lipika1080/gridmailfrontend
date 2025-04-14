// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { getAppointments } from '../api';

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await getAppointments();
        setAppointments(res.data);
      } catch (err) {
        toast({
          title: 'Failed to fetch appointments',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  if (loading) return <Spinner />;

  return (
    <Box mt={6}>
      <Heading size="md" mb={4}>All Appointments</Heading>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Customer</Th>
            <Th>Car</Th>
            <Th>Email</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appointments.map((appt) => (
            <Tr key={appt._id}>
              <Td>{appt.date}</Td>
              <Td>{appt.contactDetails?.name}</Td>
              <Td>{`${appt.carDetails?.make} ${appt.carDetails?.model}`}</Td>
              <Td>{appt.contactDetails?.email}</Td>
              <Td>{appt.paymentStatus}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Dashboard;
