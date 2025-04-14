// src/components/MarketingForm.tsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { sendMarketingEmail } from '../api';

const MarketingForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('Book Your Car Appointment Today!');
  const [body, setBody] = useState(
    `<p>Click the link below to book your car service appointment:</p>
     <a href="http://localhost:5173/book">Book Appointment</a>`
  );
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendMarketingEmail({ recipient, subject, body });
      toast({
        title: 'Email Sent',
        description: 'Marketing email has been sent successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setRecipient('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send email.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box borderWidth="1px" p={4} borderRadius="md" mb={6}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={3}>
          <FormLabel>Recipient Email</FormLabel>
          <Input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="user@example.com"
          />
        </FormControl>
        <FormControl isRequired mb={3}>
          <FormLabel>Subject</FormLabel>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired mb={3}>
          <FormLabel>Body (HTML allowed)</FormLabel>
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={5}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={2}>
          Send Email
        </Button>
      </form>
    </Box>
  );
};

export default MarketingForm;
