import { motion } from 'framer-motion';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Framework java",
    description: "Une framework java base sur servlet pour faciliter le developpement web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/ismaelBlaise/framework-java.git",
    live: "https://github.com/ismaelBlaise/framework-java.git"
  },
  // {
  //   title: "Dashboard Analytics",
  //   description: "Dashboard analytique avec visualisation de données en temps réel",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   github: "#",
  //   live: "#"
  // },
  // {
  //   title: "Social Media App",
  //   description: "Application sociale avec chat en temps réel",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   github: "#",
  //   live: "#"
  // }
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Mes Projets
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Github size={20} />
                    <ExternalLink size={20} />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}