import { motion } from 'framer-motion';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Contact
        </Typography>
        <Box
          component="form"
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <TextField
            required
            fullWidth
            label="Nom"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            variant="contained"
            size="large"
            endIcon={<Send />}
            sx={{ alignSelf: 'flex-start' }}
          >
            Envoyer
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}