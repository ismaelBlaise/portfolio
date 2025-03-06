import { motion } from 'framer-motion';
import { Container, Typography, TextField, Button, Box, Snackbar } from '@mui/material';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Fonction pour gérer la mise à jour des données du formulaire
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Vous pouvez envoyer le formulaire ici via une API ou un service d'email

    try {
      // Par exemple, une requête à votre API (remplacez avec la vraie URL et méthode)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setOpenSnackbar(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        // Gérer les erreurs de soumission ici
        console.error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur de connexion à l\'API:', error);
    }
  };

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
          onSubmit={handleSubmit} // Attache la fonction de soumission
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
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            size="large"
            endIcon={<Send />}
            sx={{ alignSelf: 'flex-start' }}
            type="submit"
          >
            Envoyer
          </Button>
        </Box>
        {/* Snackbar pour afficher un message de succès */}
        <Snackbar
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          message="Votre message a été envoyé avec succès!"
          autoHideDuration={3000}
        />
      </motion.div>
    </Container>
  );
}
