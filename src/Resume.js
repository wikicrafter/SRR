import React, { useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';

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
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img
              src="./images/mwpnft.png"
              alt="Profile"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>
          <Typography variant="h4" align="center" gutterBottom>
            Giga Anchabadze
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Saburtalo, Tbilisi, Georgia
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Phone: (+995)000000000
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Email:{' '}
            <a href="mailto:your@email.com">
              example@email.com
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1" gutterBottom>
            Georgian Technical University
          </Typography>
          <Typography variant="body1" gutterBottom>
            Bachelor's Degree in Computer Science & Network Engineering • 2016 - 2020
          </Typography>
          <Typography variant="body1" gutterBottom>
            Total GPA: 3.0
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Character
          </Typography>
          <ul>
            <li>Punctuality</li>
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
            I have several years of experience working as a junior information technology specialist and software developer. I excel at resolving computer, software, network, and web-related issues.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Programming Languages
          </Typography>
          <ul>
            <li>C</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>JavaScript</li>
            <li>React framework</li>
            <li>Angular</li>
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
            I have experience working with various operating systems, including multiple Linux distributions like Debian, Fedora, and Ubuntu. I have mostly worked with Windows operating systems.
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
            <li>Georgian</li>
            <li>English</li>
            <li>Russian</li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <ul>
            <li>
              <Typography variant="subtitle1">
                <a href="https://example.com/project1">Project 1</a>
              </Typography>
              <Typography variant="body1">
                Description of Project 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis metus.
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle1">
                <a href="https://example.com/project2">Project 2</a>
              </Typography>
              <Typography variant="body1">
                Description of Project 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis metus.
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
