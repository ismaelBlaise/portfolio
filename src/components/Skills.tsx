import { motion } from 'framer-motion';
import { Container, Typography, Grid, Paper, Box, LinearProgress } from '@mui/material';
import { Code2, Database, Palette, Globe } from 'lucide-react';

const skills = {
  frontend: {
    icon: <Code2 size={24} />,
    title: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "CSS/SASS", level: 85 }
    ]
  },
  backend: {
    icon: <Database size={24} />,
    title: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 }
    ]
  },
  design: {
    icon: <Palette size={24} />,
    title: "Design",
    items: [
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 75 },
      { name: "UI/UX", level: 85 },
      { name: "Responsive Design", level: 90 }
    ]
  },
  other: {
    icon: <Globe size={24} />,
    title: "Autres",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 }
    ]
  }
};

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Compétences
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {Object.entries(skills).map(([key, category], index) => (
            <Grid item xs={12} md={6} key={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
                    {category.icon}
                    <Typography variant="h5" component="h3">
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {category.items.map((skill, skillIndex) => (
                      <Box key={skillIndex}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}