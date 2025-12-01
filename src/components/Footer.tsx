import { Paper, Container, Grid, Text, Group, Stack, ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconMail } from "@tabler/icons-react";

export default function Footer() {
  return (
    <Paper 
      component="footer"
      style={{ 
        background: "linear-gradient(135deg, rgba(10, 15, 25, 0.98) 0%, rgba(20, 30, 48, 0.97) 100%)",
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        backdropFilter: "blur(20px)",
      }} 
      py={50}
    >
      <Container size="lg">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group mb="md">
              <Text 
                size="xl" 
                fw={900}
                style={{
                  background: "linear-gradient(135deg, #00F5FF 0%, #00FF87 50%, #FF00FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.05em",
                  filter: "drop-shadow(0 0 20px rgba(0, 245, 255, 0.3))",
                }}
              >
                ILLUMINATIUNIT
              </Text>
            </Group>
            <Text size="sm" opacity={0.8} mb="lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              The premier organization for global enlightenment, empowerment, and exclusive membership benefits. 
              Join the elite circle of visionaries shaping the future.
            </Text>
            
            <Group>
              <ActionIcon 
                size="lg" 
                variant="gradient"
                gradient={{ from: '#00F5FF', to: '#00FF87' }}
                radius="xl"
                component="a"
                href="https://twitter.com"
                target="_blank"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <IconBrandTwitter size={20} />
              </ActionIcon>
              <ActionIcon 
                size="lg" 
                variant="gradient"
                gradient={{ from: '#00F5FF', to: '#00FF87' }}
                radius="xl"
                component="a"
                href="https://linkedin.com"
                target="_blank"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <IconBrandLinkedin size={20} />
              </ActionIcon>
              <ActionIcon 
                size="lg" 
                variant="gradient"
                gradient={{ from: '#00F5FF', to: '#00FF87' }}
                radius="xl"
                component="a"
                href="https://facebook.com"
                target="_blank"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <IconBrandFacebook size={20} />
              </ActionIcon>
              <ActionIcon 
                size="lg" 
                variant="gradient"
                gradient={{ from: '#00F5FF', to: '#00FF87' }}
                radius="xl"
                component="a"
                href="mailto:agentillumination@gmail .com"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <IconMail size={20} />
              </ActionIcon>
            </Group>

            {/* Contact Info */}
            <Stack gap="xs" mt="lg">
              <Group gap="xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                    stroke="rgba(0, 245, 255, 0.8)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                    fill="rgba(0, 245, 255, 0.8)"
                  />
                </svg>
                <Text size="sm" opacity={0.8} style={{ fontFamily: "'Inter', sans-serif" }}>
                  58 Sandton city Pretoria South Africa
                </Text>
              </Group>
              
              <Group gap="xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V19.92C22 20.52 21.53 21.02 20.94 21.07C20.38 21.12 19.8 21.15 19.2 21.15C10.73 21.15 3.85 14.27 3.85 5.8C3.85 5.2 3.88 4.62 3.93 4.06C3.98 3.47 4.48 3 5.08 3H8.08C8.63 3 9.09 3.39 9.13 3.94C9.16 4.46 9.19 4.97 9.24 5.47C9.34 6.37 9.5 7.25 9.71 8.11C9.81 8.52 9.63 8.95 9.27 9.18L7.97 10.07C9.16 12.83 11.17 14.84 13.93 16.03L14.82 14.73C15.05 14.37 15.48 14.19 15.89 14.29C16.75 14.5 17.63 14.66 18.53 14.76C19.03 14.81 19.54 14.84 20.06 14.87C20.61 14.91 21 15.37 21 15.92Z"
                    fill="rgba(0, 245, 255, 0.8)"
                  />
                </svg>
                <Text size="sm" opacity={0.8} style={{ fontFamily: "'Inter', sans-serif" }}>
                  +27 74 400 0980
                </Text>
              </Group>
              
              <Group gap="xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7L10.94 11.34C11.59 11.75 12.41 11.75 13.06 11.34L20 7M5 18H19C20.1 18 21 17.1 21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18Z"
                    stroke="rgba(0, 245, 255, 0.8)"
                    strokeWidth="1.5"
                  />
                </svg>
                <Text size="sm" opacity={0.8} style={{ fontFamily: "'Inter', sans-serif" }}>
                  agentillumination@gmail .com
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Grid>
              <Grid.Col span={{ base: 6, sm: 3 }}>
                <Text fw={600} mb="md" style={{ fontFamily: "'Inter', sans-serif", color: '#00F5FF' }}>
                  Navigation
                </Text>
                <Stack gap="xs">
                  <Link to="/" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Home</Text>
                  </Link>
                  <Link to="/about" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>About Us</Text>
                  </Link>
                  <Link to="/how-to-join" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Join Illuminati</Text>
                  </Link>
                  <Link to="/benefits" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Members Benefits</Text>
                  </Link>
                </Stack>
              </Grid.Col>
              
              <Grid.Col span={{ base: 6, sm: 3 }}>
                <Text fw={600} mb="md" style={{ fontFamily: "'Inter', sans-serif", color: '#00F5FF' }}>
                  Resources
                </Text>
                <Stack gap="xs">
                  <Link to="/testimonials" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Testimonials</Text>
                  </Link>
                  <Link to="/events" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Exclusive Events</Text>
                  </Link>
                  <Link to="/blog" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Knowledge Base</Text>
                  </Link>
                  <Link to="/resources" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Member Resources</Text>
                  </Link>
                </Stack>
              </Grid.Col>
              
              <Grid.Col span={{ base: 6, sm: 3 }}>
                <Text fw={600} mb="md" style={{ fontFamily: "'Inter', sans-serif", color: '#00F5FF' }}>
                  Support
                </Text>
                <Stack gap="xs">
                  <Link to="/contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Contact Us</Text>
                  </Link>
                  <Link to="/faq" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>FAQ</Text>
                  </Link>
                  <Link to="/support" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Member Support</Text>
                  </Link>
                  <Link to="/application-status" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Application Status</Text>
                  </Link>
                </Stack>
              </Grid.Col>
              
              <Grid.Col span={{ base: 6, sm: 3 }}>
                <Text fw={600} mb="md" style={{ fontFamily: "'Inter', sans-serif", color: '#00F5FF' }}>
                  Membership
                </Text>
                <Stack gap="xs">
                  <Link to="/registration" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Join Now</Text>
                  </Link>
                  <Link to="/membership-levels" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Membership Levels</Text>
                  </Link>
                  <Link to="/privacy" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Privacy Policy</Text>
                  </Link>
                  <Link to="/terms" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                    <Text size="sm" style={{ fontFamily: "'Inter', sans-serif" }}>Terms of Service</Text>
                  </Link>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        
        <Text 
          size="sm" 
          opacity={0.6} 
          mt="xl" 
          style={{ 
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif",
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '20px'
          }}
        >
          © {new Date().getFullYear()} Illuminati Unit. All rights reserved. | The path to enlightenment begins here.
        </Text>
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        a:hover {
          opacity: 1 !important;
          color: #00F5FF !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </Paper>
  );
}