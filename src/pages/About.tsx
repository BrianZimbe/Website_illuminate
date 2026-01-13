import { Title, Text, Paper, Container, Grid, Image, Button, Group, Stack, ThemeIcon, Card, BackgroundImage, Overlay, Box, rem } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconPhone, IconMail, IconMapPin, IconCrown, IconShield, IconEye, IconLock } from "@tabler/icons-react";
import ancientPyramidImg from "../assets/useme.jpeg";


export default function About() {
  return (
    <>
      {/* Full-width Hero Image */}
      <Box style={{ position: 'relative', height: rem(400), marginTop: rem(-70) }}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          style={{ height: '100%' }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(139, 69, 19, 0.7) 0%, rgba(101, 67, 33, 0.9) 100%)"
            opacity={0.9}
            zIndex={1}
          />
          
          <Container size="lg" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
            <Stack justify="center" align="center" style={{ height: '100%', textAlign: 'center' }}>
              <Title 
                order={1} 
                style={{ 
                  color: 'white', 
                  fontSize: rem(48),
                  fontWeight: 900
                }}
              >
                About Illuminati Unit
              </Title>
              <Text 
                size="xl" 
                style={{ 
                  color: 'white', 
                  maxWidth: rem(600),
                  opacity: 0.9
                }}
              >
                Guiding exceptional minds toward enlightenment and global influence for centuries
              </Text>
            </Stack>
          </Container>
        </BackgroundImage>
      </Box>

      {/* About Us Card with Contact Button */}
      <Container size="lg" py={80}>
        <Card 
          p="xl" 
          radius="lg" 
          shadow="lg"
          withBorder
          style={{ borderColor: '#B8860B' }}
        >
          <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Title order={2} mb="md" >
                Our Ancient Legacy & Purpose
              </Title>
              <Text size="lg" mb="lg" color="dimmed">
                For centuries, the Illuminati has operated as the guiding force behind humanity's 
                greatest achievements. Our ancient order was founded on principles of enlightenment, 
                wisdom, and the pursuit of ultimate truth. What began as a small circle of enlightened 
                thinkers has evolved into the most influential network in human history.
              </Text>
              
              <Text size="lg" mb="lg" color="dimmed">
                Our mission is to identify and nurture exceptional individuals, guiding them toward 
                their true potential and enabling them to shape world events. We believe that true 
                power comes from knowledge, and true success comes from understanding the hidden 
                forces that govern our world.
              </Text>

              <Group mt="xl">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="gradient"
                    gradient={{ from: 'gold', to: 'orange' }}
                  >
                    Seek Enlightenment
                  </Button>
                </Link>
                <Link to="/how-to-join">
                  <Button 
                    size="lg" 
                    variant="outline"
                    color="orange"
                  >
                    Begin Your Journey
                  </Button>
                </Link>
              </Group>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Image
              src={ancientPyramidImg}
                //src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                radius="lg"
                alt="Ancient wisdom and symbols"
              />
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* Four Images Section */}
      <Container size="lg" py={80}>
        <Title order={2}  mb="xl" >
          Our Ancient Principles
        </Title>
        
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Image
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                height={200}
                radius="md"
                alt="Ancient knowledge"
              />
              <ThemeIcon size={60} radius="md" variant="light" color="orange" mt="md">
                <IconEye size={30} />
              </ThemeIcon>
              <Title order={4} mt="md">Forbidden Knowledge</Title>
              <Text color="dimmed" size="sm">
                Access ancient wisdom and hidden truths beyond ordinary understanding
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Image
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                height={200}
                radius="md"
                alt="Global influence"
              />
              <ThemeIcon size={60} radius="md" variant="light" color="yellow" mt="md">
                <IconCrown size={30} />
              </ThemeIcon>
              <Title order={4} mt="md">Ultimate Power</Title>
              <Text color="dimmed" size="sm">
                Shape world events and influence global systems from within
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Image
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                height={200}
                radius="md"
                alt="Exclusive network"
              />
              <ThemeIcon size={60} radius="md" variant="light" color="red" mt="md">
                <IconShield size={30} />
              </ThemeIcon>
              <Title order={4} mt="md">Elite Brotherhood</Title>
              <Text color="dimmed" size="sm">
                Join the most exclusive network of influential minds in history
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Image
                src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                height={200}
                radius="md"
                alt="Wealth and abundance"
              />
              <ThemeIcon size={60} radius="md" variant="light" color="green" mt="md">
                <IconLock size={30} />
              </ThemeIcon>
              <Title order={4} mt="md">Hidden Wealth</Title>
              <Text color="dimmed" size="sm">
                Unlock ancient financial secrets and create limitless abundance
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Contact Information Section */}
      <Paper 
        style={{ 
          backgroundColor: '#8B4513',
          color: 'white'
        }} 
        py={80}
      >
        <Container size="lg">
          <Title order={2} mb="xl">
            Ready for Enlightenment?
          </Title>
          
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="center" style={{ textAlign: 'center' }}>
                <ThemeIcon size={80} radius="md" variant="light" color="orange">
                  <IconPhone size={40} />
                </ThemeIcon>
                <Title order={4} mt="md">Sacred Communication</Title>
                <Text size="lg" opacity={0.9}>+27 74 400 0980</Text>
                <Text size="sm" opacity={0.7}>Initiation inquiries only</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="center" style={{ textAlign: 'center' }}>
                <ThemeIcon size={80} radius="md" variant="light" color="orange">
                  <IconMail size={40} />
                </ThemeIcon>
                <Title order={4} mt="md">Ancient Wisdom</Title>
                <Text size="lg" opacity={0.9}>agentillumination@gmail .com</Text>
                <Text size="sm" opacity={0.7}>Seekers of truth welcome</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="center" style={{ textAlign: 'center' }}>
                <ThemeIcon size={80} radius="md" variant="light" color="orange">
                  <IconMapPin size={40} />
                </ThemeIcon>
                <Title order={4} mt="md">Temple Location</Title>
                <Text size="lg" opacity={0.9}>5th Alice Lane, Sandton</Text>
                <Text size="sm" opacity={0.7}>South Africa</Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <Box style={{ textAlign: 'center' }} mt="xl">
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="white"
                color="dark"
              >
                Request Initiation
              </Button>
            </Link>
          </Box>
        </Container>
      </Paper>

      {/* Final Enlightenment Section */}
      <Container size="lg" py={80}>
        <Paper 
          p="xl" 
          radius="lg"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b0e 100%)',
            color: 'white',
            textAlign: 'center',
            border: '2px solid #B8860B'
          }}
        >
          <IconCrown size={60} color="#FFD700" style={{ margin: '0 auto 20px' }} />
          <Title order={2} mb="md">
            The Path Awaits the Worthy
          </Title>
          <Text size="lg" mb="xl" opacity={0.9}>
            Ordinary life was never your destiny. The world needs leaders, visionaries, and those 
            brave enough to see beyond the veil of conventional reality. Your journey toward true 
            power and enlightenment begins with a single decision.
          </Text>
          <Group justify="center">
            <Link to="/registration">
              <Button 
                size="lg" 
                variant="gradient"
                gradient={{ from: 'gold', to: 'orange' }}
              >
                Claim Your Destiny
              </Button>
            </Link>
            <Link to="/how-to-join">
              <Button 
                size="lg" 
                variant="outline"
                color="white"
              >
                Learn the Path
              </Button>
            </Link>
          </Group>
        </Paper>
      </Container>

      {/* Footer */}
      <Paper 
        style={{ 
          backgroundColor: '#8B4513',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'white'
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
                  variant="gradient"
                  gradient={{ from: 'gold', to: 'orange' }}
                >
                  ILLUMINATIUNIT
                </Text>
              </Group>
              <Text size="sm" opacity={0.8} mb="lg">
                Guiding exceptional minds toward enlightenment and global influence since 1776.
              </Text>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Grid>
                <Grid.Col span={{ base: 6, sm: 3 }}>
                  <Text fw={600} mb="md">Navigation</Text>
                  <Stack >
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                      <Text size="sm">Home</Text>
                    </Link>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                      <Text size="sm">Ancient Wisdom</Text>
                    </Link>
                    <Link to="/how-to-join" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                      <Text size="sm">Initiation</Text>
                    </Link>
                  </Stack>
                </Grid.Col>
                
                <Grid.Col span={{ base: 6, sm: 3 }}>
                  <Text fw={600} mb="md">Knowledge</Text>
                  <Stack >
                    <Link to="/benefits" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                      <Text size="sm">Member Benefits</Text>
                    </Link>
                    <Link to="/testimonials" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                      <Text size="sm">Success Stories</Text>
                    </Link>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                      <Text size="sm">Contact</Text>
                    </Link>
                  </Stack>
                </Grid.Col>
                
                <Grid.Col span={{ base: 6, sm: 3 }}>
                  <Text fw={600} mb="md">Sacred Texts</Text>
                  <Stack >
                    <Text size="sm" opacity={0.8}>Ancient Protocols</Text>
                    <Text size="sm" opacity={0.8}>Initiation Rites</Text>
                    <Text size="sm" opacity={0.8}>Hidden Knowledge</Text>
                  </Stack>
                </Grid.Col>
                
                <Grid.Col span={{ base: 6, sm: 3 }}>
                  <Text fw={600} mb="md">Join the Order</Text>
                  <Stack>
                    <Link to="/registration" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
                      <Text size="sm">Registration</Text>
                    </Link>
                    <Text size="sm" opacity={0.8}>Member Portal</Text>
                    <Text size="sm" opacity={0.8}>Higher Ranks</Text>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
          
          <Text size="sm" opacity={0.6} mt="xl" style={{ textAlign: 'center' }}>
            © 2024 Illuminati Unit. All knowledge protected by ancient covenant.
          </Text>
        </Container>
      </Paper>
    </>
  );
}