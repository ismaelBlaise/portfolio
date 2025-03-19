import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Typography, Container, Box, Avatar, Button } from '@mui/material';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profilePic from '../assets/img/profile-removebg-preview.png';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial color="#4f46e5" wireframe />
    </Sphere>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar
            src={profilePic}
            sx={{
              width: 200,
              height: 200,
              border: '4px solid ',  // Couleur modifiée ici
              boxShadow: '0 0 20px rgba(34, 139, 34, 0.3)', // Ombre verte
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            Andrianaivo Blaise Ismael
          </Typography>
          <Typography variant="h4" component="h2" align="center" color="textSecondary" gutterBottom>
            Développeur Full Stack
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/ismaelBlaise" target="_blank" rel="noopener noreferrer">
                <Github size={24} style={{ cursor: 'pointer' }} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BG3R%2F8r%2BaT%2BqTks3aSCXMiw%3D%3D" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} style={{ cursor: 'pointer' }} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="mailto:ismablaise@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail size={24} style={{ cursor: 'pointer' }} />
              </a>
            </motion.div>
          </Box>

          {/* Ajouter le bouton de téléchargement du CV */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }} // Ajout de flexbox pour centrer
          > 
           <Button
              href="/path/to/your/cv.pdf" // Remplace par le chemin réel du CV
              download
              variant="contained"
          
              sx={{

                padding: '10px 20px',
                fontWeight: 'bold',
              }}
              startIcon={<Download />}
            >
              Télécharger CV
            </Button>
          </motion.div>
        </motion.div>
      </Box>

      <Box
        ref={containerRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas> */}
      </Box>
    </Container>
  );
}
