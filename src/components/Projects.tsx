import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Appel à l'API GitHub pour récupérer les projets
  useEffect(() => {
    axios.get('https://api.github.com/users/ismaelBlaise/repos')
      .then(response => {
        const projectsData = response.data;
        
        // Appel pour récupérer les fichiers README.md de chaque projet
        const fetchReadmeImages = async () => {
          for (let i = 0; i < projectsData.length; i++) {
            const project = projectsData[i];
            try {
              const readmeResponse = await axios.get(
                `https://api.github.com/repos/ismaelBlaise/${project.name}/contents/README.md`
              );
              const readmeContent = Buffer.from(readmeResponse.data.content, 'base64').toString();
              
              // Utilisez une expression régulière pour rechercher les liens d'image dans le README
              const imageMatch = readmeContent.match(/!\[.*\]\((.*)\)/);
              if (imageMatch && imageMatch[1]) {
                // Ajouter l'image à chaque projet
                project.image = imageMatch[1];
              }
            } catch (error) {
              console.error('Erreur lors de la récupération du README:', error);
            }
          }
          setProjects(projectsData); // Mettre à jour les projets après récupération des images
          setLoading(false); // Fin du chargement
        };
        
        fetchReadmeImages();
      })
      .catch(err => {
        setError(err); // Gérer les erreurs
        setLoading(false); // Fin du chargement
      });
  }, []);

  if (loading) {
    return <Typography variant="h6" align="center">Chargement des projets...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error" align="center">Une erreur s'est produite lors du chargement des projets.</Typography>;
  }

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
                    backgroundImage: `url(${project.image || 'https://via.placeholder.com/200'})`, // Utilisation d'une image par défaut si aucune image n'est trouvée
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {project.description || 'Pas de description disponible.'}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    {project.homepage && (
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
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
