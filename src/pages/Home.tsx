import { Button, Container, Grid, Paper, Text, Title, Image, Group, Stack, List, ThemeIcon, rem, Card, Overlay, BackgroundImage, Box, Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconPhone, IconMail, IconMapPin, IconArrowRight, IconStar, IconCrown, IconShield, IconTrendingUp } from "@tabler/icons-react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Full-width Hero Image Section */}
      <Box style={{ position: 'relative', height: rem(600), marginTop: rem(-70) }}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          style={{ height: '100%' }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)"
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
                  fontWeight: 900,
                  lineHeight: 1.2
                }}
              >
                WELCOME TO THE 
                <Text 
                  component="span" 
                  variant="gradient"
                  gradient={{ from: 'gold', to: 'orange' }}
                  style={{ display: 'block' }}
                >
                  ILLUMINATI
                </Text>
              </Title>
              
              <Text 
                size="xl" 
                style={{ 
                  color: 'white', 
                  maxWidth: rem(600),
                  opacity: 0.9
                }}
              >
                Join the ancient secret society that has shaped world events for centuries. 
                Access forbidden knowledge and unlimited power.
              </Text>

              <Group mt="xl">
                <Link to="/registration">
                  <Button 
                    size="lg" 
                    variant="gradient"
                    gradient={{ from: 'gold', to: 'orange' }}
                    rightSection={<IconArrowRight size={20} />}
                    style={{ fontWeight: 600 }}
                  >
                    JOIN NOW
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="white"
                    color="dark"
                  >
                    LEARN MORE
                  </Button>
                </Link>
              </Group>
            </Stack>
          </Container>
        </BackgroundImage>
      </Box>

      {/* Simple Message Card */}
      <Container size="lg" py={80}>
        <Paper 
          p="xl" 
          radius="lg" 
          shadow="md"
          style={{
            background: 'linear-gradient(135deg, #B8860B 0%, #8B6914 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Title order={2} mb="md">
            THE ILLUMINATI - WHERE POWER MEETS PURPOSE
          </Title>
          <Text size="lg" opacity={0.9}>
            For centuries, we have guided world leaders and shaped global events. 
            Join the elite circle of influential minds and unlock your true potential 
            within our ancient brotherhood.
          </Text>
        </Paper>
      </Container>

      {/* Image with Overlay Join Message */}
      <Container size="lg" py={80}>
        <Box style={{ position: 'relative', borderRadius: rem(20), overflow: 'hidden' }}>
          <Image
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80"
            height={400}
            radius="lg"
          />
          <Overlay
            gradient="linear-gradient(105deg, rgba(139, 69, 19, 0.95) 0%, rgba(101, 67, 33, 0.7) 100%)"
            opacity={0.9}
            zIndex={1}
          />
          
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              right: rem(60),
              transform: 'translateY(-50%)',
              zIndex: 2,
              maxWidth: rem(400)
            }}
          >
            <Card 
              p="xl" 
              radius="lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Title order={3}  mb="md">
                READY FOR ENLIGHTENMENT?
              </Title>
              <Text color="dark" mb="lg">
                Join our ancient order and access forbidden knowledge, unlimited power, 
                and connections that control global affairs.
              </Text>
              
              <List
                spacing="sm"
                size="sm"
                center
                icon={
                  <ThemeIcon color="orange" size={20} radius="xl">
                    <IconCrown size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>Global Influence Networks</List.Item>
                <List.Item>Wealth Creation Secrets</List.Item>
                <List.Item>Ancient Knowledge Access</List.Item>
              </List>
              
              <Link to="/registration">
                <Button 
                  fullWidth 
                  mt="xl" 
                  size="md"
                  variant="gradient"
                  gradient={{ from: 'gold', to: 'orange' }}
                >
                  START YOUR JOURNEY
                </Button>
              </Link>
            </Card>
          </Box>
        </Box>
      </Container>

      {/* Three Images with Messages */}
      <Container size="lg" py={80}>
        <Title order={2}  mb="xl">
          MEMBER TRANSFORMATIONS
        </Title>
        
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Avatar 
                size={120} 
                radius="50%"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
              <ThemeIcon size={30} radius="xl" color="orange" mt={-15}>
                <IconTrendingUp size={16} />
              </ThemeIcon>
              <Title order={4} mt="md">ALEXANDER R.</Title>
              <Text color="dimmed" size="sm">Global Financial Leader</Text>
              <Text size="sm" mt="sm">
                "The Illuminati's wisdom transformed my understanding of power. 
                I now influence global markets with ancient principles."
              </Text>
              <Group mt="xs">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={16} color="#FFD700" fill="#FFD700" />
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Avatar 
                size={120} 
                radius="50%"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
              <ThemeIcon size={30} radius="xl" color="orange" mt={-15}>
                <IconShield size={16} />
              </ThemeIcon>
              <Title order={4} mt="md">ISABELLA V.</Title>
              <Text color="dimmed" size="sm">Political Influencer</Text>
              <Text size="sm" mt="sm">
                "Through the brotherhood, I gained access to power corridors 
                I never knew existed. My influence now shapes policies."
              </Text>
              <Group mt="xs">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={16} color="#FFD700" fill="#FFD700" />
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Avatar 
                size={120} 
                radius="50%"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
              <ThemeIcon size={30} radius="xl" color="orange" mt={-15}>
                <IconCrown size={16} />
              </ThemeIcon>
              <Title order={4} mt="md">MARCUS A.</Title>
              <Text color="dimmed" size="sm">Industry Titan</Text>
              <Text size="sm" mt="sm">
                "Ancient business strategies revealed to me created an empire. 
                The brotherhood's wisdom transcends modern education."
              </Text>
              <Group mt="xs">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={16} color="#FFD700" fill="#FFD700" />
                ))}
              </Group>
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
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} mb="xl">
                SEEK ENLIGHTENMENT
              </Title>
              <Text size="lg" mb="xl" opacity={0.9}>
                Ready to transcend ordinary limitations? Contact us to begin your journey 
                toward ultimate power and global influence.
              </Text>
              <Stack>
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="orange">
                    <IconPhone size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500}>SACRED LINE</Text>
                    <Text size="lg">+27 74 400 0980</Text>
                  </div>
                </Group>
                
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="orange">
                    <IconMail size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500}>ANCIENT WISDOM</Text>
                    <Text size="lg">agentillumination@gmail .com</Text>
                  </div>
                </Group>
                
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="orange">
                    <IconMapPin size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500}>TEMPLE LOCATION</Text>
                    <Text size="lg">
                      5th Alice Lane, Sandton<br />
                      South Africa
                    </Text>
                  </div>
                </Group>
              </Stack>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                radius="lg"
                height={300}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>

      {/* Final Call to Action */}
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
            THE WORLD AWAITS YOUR ASCENT
          </Title>
          <Text size="lg" mb="xl" opacity={0.9}>
            Ordinary life is for ordinary people. You were destined for ultimate power. 
            Take the first step toward your true potential today.
          </Text>
          <Link to="/registration">
            <Button 
              size="lg" 
              variant="gradient"
              gradient={{ from: 'gold', to: 'orange' }}
              rightSection={<IconArrowRight size={20} />}
            >
              CLAIM YOUR DESTINY
            </Button>
          </Link>
        </Paper>
      </Container>

      {/* Reusable Footer Component */}
      <Footer />
    </>
  );
}