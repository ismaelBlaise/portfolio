import {useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import { motion } from 'framer-motion';
import { Typography, Container, Box, Avatar } from '@mui/material';
import { Github, Linkedin, Mail } from 'lucide-react';


function AnimatedSphere() {
    return (
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#4f46e5"
          wireframe
        />
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
            gap: 4
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              sx={{
                width: 200,
                height: 200,
                border: '4px solid #4f46e5',
                boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography variant="h1" component="h1" align="center" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="h4" component="h2" align="center" color="textSecondary" gutterBottom>
              Développeur Full Stack
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Github size={24} style={{ cursor: 'pointer' }} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Linkedin size={24} style={{ cursor: 'pointer' }} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Mail size={24} style={{ cursor: 'pointer' }} />
              </motion.div>
            </Box>
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
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Box>
      </Container>
    );
  }