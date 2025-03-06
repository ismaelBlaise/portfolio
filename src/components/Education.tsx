import { motion } from 'framer-motion';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    year: "2022 - 2025",
    degree: "Licence en Développement Web",
    school: "IT University Madagascar",
    description: "Spécialisation en développement full-stack et architecture cloud"
  },
  {
    year: "2021 - 2022",
    degree: "Baccalauréat serie D",
    school: "Lycee Saint Pierre Canisius Ambohipo",
    description: "Diplome de fin d'etude secondaire"
  }
];

export default function Education() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Formation
        </Typography>
        <Box sx={{ mt: 6 }}>
          <Timeline position="alternate">
            {educationData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <GraduationCap size={20} />
                  </TimelineDot>
                  {index !== educationData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card>
                      <CardContent>
                        <Typography color="primary" variant="subtitle1">
                          {item.year}
                        </Typography>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {item.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                          {item.school}
                        </Typography>
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </motion.div>
    </Container>
  );
}