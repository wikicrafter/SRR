import React, { useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { Button } from '@mui/material';

const Resume = () => {
  useEffect(() => {
    const handleScroll = () => {
      // handle scroll logic here
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <div style={{ textAlign: 'center' }}>
            <img
              src="https://ipfs.io/ipfs/QmdihpuXf1td9NPDcDNgYiZSyqqdXgB89i9FEYZY3wG5JV/673.png"
              alt="Profile"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginTop: '2rem',
              }}
            />
      </div>

          <Typography variant="h4" align="center" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
             Living location
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Phone: (+...)000000000
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            {' '}
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ padding: '0.5rem 1rem' }}
              href="mailto:g.anchabadze@protonmail.com"
            >
                Email me
            </Button>
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your University
          </Typography>
          <Typography variant="body1" gutterBottom>
            Bachelor's Degree in Computer Science & Network Engineering • 2016 - 2020
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total GPA: 3.5
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Character
          </Typography>
          <ul>
            <li>Punctualit</li>
            <li>Brainstorming</li>
            <li>Goal setting</li>
            <li>Prioritization</li>
            <li>Problem solving</li>
            <li>Providing discipline</li>
            <li>Team building</li>
          </ul>
          <Typography variant="h4" gutterBottom>
            <strong>Computer Science Field </strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
              lore lorem ips lorem lorem ips ips ips ips ips ips ips
          </Typography>
          <Typography variant="h4" gutterBottom>
            Programming Languages
          </Typography>
          <ul>
            <li>C</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
          <Typography variant="h4" gutterBottom>
            Front-End Development
          </Typography>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React framework</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
          </ul>
          <Typography variant="h4" gutterBottom>
            Networking
          </Typography>
          <ul>
            <li>CCNA</li>
            <li>Basic network configuration of routers and switches</li>
            <li>Packet analyzers such as Wireshark</li>
          </ul>
          <Typography variant="h4" gutterBottom>
            Operating Systems
          </Typography>
          <Typography variant="body1" gutterBottom>
                lorem lorem lorem ipsum dolor sit amet, consectetur adip
          </Typography>
          <Typography variant="h4" gutterBottom>
            DevOps
          </Typography>
          <ul>
            <li>Kubernetes</li>
            <li>GitHub Actions</li>
          </ul>
          <Typography variant="h4" gutterBottom>
            Languages
          </Typography>
          <ul>
          
            <li>English</li>
            
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          
          <ul>


          <li>
              <Typography variant="subtitle1">
              <a href="https://github.com/wikicrafter/SRR/">SRR</a> - Date:
              </Typography>
              <Typography variant="body1">
              description lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ipsum
              </Typography>
            </li>



            {/* Add more projects as needed */}
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Typography variant="subtitle1" align="center">
              Follow me on <a href="https://github.com/wikicrafter">GitHub</a>
              <br />
              Made with ❤️ by Giga 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resume;
