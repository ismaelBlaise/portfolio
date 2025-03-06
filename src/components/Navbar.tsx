import { AppBar, Toolbar, Container, Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Accueil', section: 'hero' },
  { label: 'Formation', section: 'education' },
  { label: 'Compétences', section: 'skills' },
  { label: 'Expérience', section: 'experience' },
  { label: 'Projets', section: 'projects' },
  { label: 'Contact', section: 'contact' }
];

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(18, 18, 18, 0.8)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}>
            Ismael
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  color="inherit"
                  onClick={() => scrollToSection(item.section)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}