import { motion } from 'framer-motion';
import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    position: "Chef de projet",
    company: "It University",
    period: "2024 - Présent",
    description: "Direction d'une équipe de 4 développeurs sur des projets d'envergure. Mise en place de l'architecture technique et des bonnes pratiques de développement.",
    technologies: ["Spring boot", "Postgresql", "Laravel","React native","Vue js" ,"Docker"]
  },
  // {
  //   position: "Développeur Full Stack",
  //   company: "Digital Solutions",
  //   period: "2020 - 2022",
  //   description: "Développement d'applications web complexes pour des clients internationaux. Implémentation de solutions scalables et maintenance de systèmes existants.",
  //   technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
  // },
  // {
  //   position: "Développeur Frontend",
  //   company: "StartupFlow",
  //   period: "2019 - 2020",
  //   description: "Création d'interfaces utilisateur modernes et réactives. Collaboration étroite avec les designers pour optimiser l'expérience utilisateur.",
  //   technologies: ["React", "TypeScript", "SASS", "Jest"]
  // }
];

export default function Experience() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Expérience
        </Typography>
        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Briefcase size={24} />
                    <Box>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {exp.position}
                      </Typography>
                      <Typography color="text.secondary">
                        {exp.company} | {exp.period}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" paragraph>
                    {exp.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {exp.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
}