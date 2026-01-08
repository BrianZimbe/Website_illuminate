import { Button, Container, Grid, Paper, Text, Title, Image, Group, Stack, List, ThemeIcon, rem, Card, Overlay, BackgroundImage, Box, Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconPhone, IconMail, IconMapPin, IconArrowRight, IconStar } from "@tabler/icons-react";
import Footer from "../components/Footer";

// Pyramid Eye SVG Components
const ClassicPyramidEye = ({ size = 100, animated = false }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100"
    style={{ animation: animated ? 'float 4s ease-in-out infinite' : 'none' }}
  >
    <polygon points="50,10 20,80 80,80" fill="#D4AF37" stroke="#8B4513" strokeWidth="2" />
    <polygon points="50,25 35,65 65,65" fill="#B8860B" opacity="0.8" />
    <circle cx="50" cy="45" r="12" fill="#2C1810" />
    <circle cx="50" cy="45" r="8" fill="#4A301F" />
    <circle cx="50" cy="45" r="4" fill="#FFD700" />
    <ellipse cx="52" cy="43" rx="2" ry="1" fill="white" opacity="0.3" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = angle * Math.PI / 180;
      const x1 = 50 + Math.cos(rad) * 15;
      const y1 = 45 + Math.sin(rad) * 15;
      const x2 = 50 + Math.cos(rad) * 30;
      const y2 = 45 + Math.sin(rad) * 30;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD700" strokeWidth="1.5" strokeOpacity="0.7" />;
    })}
  </svg>
);

export default function Home() {
  // Unsplash Pyramid/Eye Related Images
  const pyramidEyeImages = {
    // Actual Pyramid with Eye imagery from Unsplash
    ancientPyramid: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    pyramidEyeArt: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    mysteriousEye: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
    pyramidStructure: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    eyeDetail: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
    goldenPyramid: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    secretSociety: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=2094&q=80",
    ancientSymbols: "https://images.unsplash.com/photo-1542044898-3a503d4f763d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    allSeeingEye: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    pyramidLight: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    mysteriousArt: "https://images.unsplash.com/photo-1542044898-3a503d4f763d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    eyeCloseup: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.1; }
          50% { transform: translate(20px, -20px) rotate(5deg); opacity: 0.2; }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.7)); transform: scale(1.05); }
        }
        @keyframes subtleRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Full-width Hero Image Section with Pyramid Eye Image */}
      <Box style={{ position: 'relative', height: rem(600), marginTop: rem(-70) }}>
        <BackgroundImage
          src={pyramidEyeImages.goldenPyramid}
          style={{ height: '100%' }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)"
            opacity={0.7}
            zIndex={1}
          />
          
          <Container size="lg" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
            <Stack justify="center" align="center" style={{ height: '100%', textAlign: 'center' }}>
              {/* Animated Pyramid Eye with Eye Image Overlay */}
              <Box style={{ 
                marginBottom: rem(30),
                position: 'relative',
                width: rem(140),
                height: rem(140),
              }}>
                <Box style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: rem(140),
                  height: rem(140),
                  animation: 'pulseGlow 4s ease-in-out infinite'
                }}>
                  <ClassicPyramidEye size={140} />
                </Box>
                
                {/* Eye Image at Center */}
                <Box style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: rem(40),
                  height: rem(40),
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #FFD700',
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
                }}>
                  <Image
                    src={pyramidEyeImages.eyeCloseup}
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                
                <Text 
                  size="xs" 
                  style={{ 
                    color: 'rgba(255, 215, 0, 0.7)', 
                    marginTop: rem(10),
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontWeight: 300,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  VINCIT OMNIA VERITAS
                </Text>
              </Box>
              
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

      {/* Pyramid Eye Gallery Section */}
      <Container size="lg" py={80}>
        <Box style={{ textAlign: 'center', marginBottom: rem(40) }}>
          <Box style={{ animation: 'subtleRotate 30s linear infinite', width: rem(60), height: rem(60), margin: '0 auto' }}>
            <ClassicPyramidEye size={60} />
          </Box>
          <Title order={2}  mt="md">
            ANCIENT SYMBOLISM
          </Title>
          <Text size="lg" color="dimmed" mt="xs">The Pyramid Eye Through History</Text>
        </Box>
        
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: 'relative', borderRadius: rem(12), overflow: 'hidden', height: rem(300) }}>
              <Image
                src={pyramidEyeImages.ancientPyramid}
                height={300}
                style={{ objectFit: 'cover' }}
              />
              <Overlay gradient="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" opacity={0.3} />
              <Box style={{ 
                position: 'absolute', 
                bottom: rem(20), 
                left: rem(20), 
                right: rem(20),
                color: 'white'
              }}>
                <Title order={4}>THE GREAT PYRAMID</Title>
                <Text size="sm">Ancient power structure that inspired our symbols</Text>
              </Box>
            </Box>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: 'relative', borderRadius: rem(12), overflow: 'hidden', height: rem(300) }}>
              <Image
                src={pyramidEyeImages.allSeeingEye}
                height={300}
                style={{ objectFit: 'cover' }}
              />
              <Overlay gradient="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" opacity={0.3} />
              <Box style={{ 
                position: 'absolute', 
                bottom: rem(20), 
                left: rem(20), 
                right: rem(20),
                color: 'white'
              }}>
                <Title order={4}>THE ALL-SEEING EYE</Title>
                <Text size="sm">Omniscient vision that guides our brotherhood</Text>
              </Box>
            </Box>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box style={{ position: 'relative', borderRadius: rem(12), overflow: 'hidden', height: rem(250) }}>
              <Image
                src={pyramidEyeImages.pyramidStructure}
                height={250}
                style={{ objectFit: 'cover' }}
              />
              <Overlay gradient="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" opacity={0.3} />
              <Box style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                width: '100%'
              }}>
                <ClassicPyramidEye size={40} />
                <Text size="sm" mt="xs">GEOMETRIC PERFECTION</Text>
              </Box>
            </Box>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box style={{ position: 'relative', borderRadius: rem(12), overflow: 'hidden', height: rem(250) }}>
              <Image
                src={pyramidEyeImages.mysteriousEye}
                height={250}
                style={{ objectFit: 'cover' }}
              />
              <Overlay gradient="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" opacity={0.3} />
              <Box style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                width: '100%'
              }}>
                <Box style={{
                  width: rem(40),
                  height: rem(40),
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto',
                  border: '2px solid #FFD700'
                }}>
                  <Image
                    src={pyramidEyeImages.eyeDetail}
                    width={40}
                    height={40}
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Text size="sm" mt="xs">VISION OF TRUTH</Text>
              </Box>
            </Box>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box style={{ position: 'relative', borderRadius: rem(12), overflow: 'hidden', height: rem(250) }}>
              <Image
                src={pyramidEyeImages.ancientSymbols}
                height={250}
                style={{ objectFit: 'cover' }}
              />
              <Overlay gradient="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)" opacity={0.3} />
              <Box style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                width: '100%'
              }}>
                <ClassicPyramidEye size={40} />
                <Text size="sm" mt="xs">SACRED KNOWLEDGE</Text>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Simple Message Card with Pyramid Eye Image */}
      <Container size="lg" py={80}>
        <Paper 
          p="xl" 
          radius="lg" 
          shadow="md"
          style={{
            background: 'linear-gradient(135deg, #B8860B 0%, #8B6914 100%)',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box style={{
            position: 'absolute',
            top: rem(20),
            right: rem(20),
            width: rem(80),
            height: rem(80),
            opacity: 0.2
          }}>
            <ClassicPyramidEye size={80} />
          </Box>
          
          <Box style={{
            position: 'absolute',
            bottom: rem(20),
            left: rem(20),
            width: rem(60),
            height: rem(60),
            opacity: 0.2
          }}>
            <ClassicPyramidEye size={60} />
          </Box>
          
          <Box style={{ position: 'relative', zIndex: 1 }}>
            <Box style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: rem(20),
              opacity: 0.9 
            }}>
              <Box style={{ 
                position: 'relative',
                width: rem(80),
                height: rem(80)
              }}>
                <ClassicPyramidEye size={80} />
                <Box style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: rem(25),
                  height: rem(25),
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid #FFD700'
                }}>
                  <Image
                    src={pyramidEyeImages.eyeDetail}
                    width={25}
                    height={25}
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Box>
            <Title order={2} mb="md">
              THE ILLUMINATI - WHERE POWER MEETS PURPOSE
            </Title>
            <Text size="lg" opacity={0.9}>
              For centuries, we have guided world leaders and shaped global events. 
              Join the elite circle of influential minds and unlock your true potential 
              within our ancient brotherhood.
            </Text>
          </Box>
        </Paper>
      </Container>

      {/* Image with Overlay Join Message */}
      <Container size="lg" py={80}>
        <Box style={{ position: 'relative', borderRadius: rem(20), overflow: 'hidden' }}>
          <Image
            src={pyramidEyeImages.secretSociety}
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
              <Box style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: rem(15) 
              }}>
                <Box style={{ position: 'relative' }}>
                  <ClassicPyramidEye size={50} />
                  <Box style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: rem(15),
                    height: rem(15),
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '1px solid #B8860B'
                  }}>
                    <Image
                      src={pyramidEyeImages.eyeCloseup}
                      width={15}
                      height={15}
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
              </Box>
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
                    <Box style={{ width: 12, height: 12 }}>
                      <ClassicPyramidEye size={12} />
                    </Box>
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
          
          {/* Pyramid Eye in corner */}
          <Box style={{
            position: 'absolute',
            top: rem(30),
            left: rem(30),
            width: rem(50),
            height: rem(50),
            opacity: 0.7,
            zIndex: 2
          }}>
            <ClassicPyramidEye size={50} />
          </Box>
        </Box>
      </Container>

      {/* Three Images with Messages */}
      <Container size="lg" py={80}>
        <Box style={{ textAlign: 'center', marginBottom: rem(40) }}>
          <Box style={{ 
            position: 'relative',
            width: rem(100),
            height: rem(100),
            margin: '0 auto',
            marginBottom: rem(20)
          }}>
            <Box style={{ animation: 'subtleRotate 40s linear infinite' }}>
              <ClassicPyramidEye size={100} />
            </Box>
            <Box style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: rem(30),
              height: rem(30),
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #FFD700',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
            }}>
              <Image
                src={pyramidEyeImages.eyeCloseup}
                width={30}
                height={30}
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>
          <Title order={2}  mb="xl">
            MEMBER TRANSFORMATIONS
          </Title>
          <Text size="lg" color="dimmed">Witness the Ascension of Our Brotherhood</Text>
        </Box>
        
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <Box style={{ position: 'relative' }}>
                <Avatar 
                  size={120} 
                  radius="50%"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
                <ThemeIcon size={36} radius="xl" color="orange" mt={-18} style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  border: '2px solid white',
                  overflow: 'hidden'
                }}>
                  <Box style={{ width: 18, height: 18 }}>
                    <Image
                      src={pyramidEyeImages.eyeDetail}
                      width={18}
                      height={18}
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </ThemeIcon>
              </Box>
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
              <Box style={{ position: 'relative' }}>
                <Avatar 
                  size={120} 
                  radius="50%"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
                <ThemeIcon size={36} radius="xl" color="orange" mt={-18} style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  border: '2px solid white',
                  overflow: 'hidden'
                }}>
                  <Box style={{ width: 18, height: 18 }}>
                    <Image
                      src={pyramidEyeImages.eyeCloseup}
                      width={18}
                      height={18}
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </ThemeIcon>
              </Box>
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
              <Box style={{ position: 'relative' }}>
                <Avatar 
                  size={120} 
                  radius="50%"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
                <ThemeIcon size={36} radius="xl" color="orange" mt={-18} style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  border: '2px solid white',
                  overflow: 'hidden'
                }}>
                  <Box style={{ width: 18, height: 18 }}>
                    <Image
                      src={pyramidEyeImages.mysteriousEye}
                      width={18}
                      height={18}
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </ThemeIcon>
              </Box>
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

      {/* Contact Information Section with Pyramid Eye Background */}
      <Paper 
        style={{ 
          backgroundColor: '#8B4513',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }} 
        py={80}
      >
        <Box style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `url(${pyramidEyeImages.ancientSymbols})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        
        <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box style={{ display: 'flex', alignItems: 'center', gap: rem(15), marginBottom: rem(20) }}>
                <Box style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}>
                  <ClassicPyramidEye size={50} />
                </Box>
                <Title order={2}>
                  SEEK ENLIGHTENMENT
                </Title>
              </Box>
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
              <Box style={{ position: 'relative', borderRadius: rem(12), overflow: 'hidden', height: rem(300) }}>
                <Image
                  src={pyramidEyeImages.pyramidLight}
                  radius="lg"
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <Overlay 
                  gradient="linear-gradient(180deg, rgba(139, 69, 19, 0.3) 0%, rgba(139, 69, 19, 0.6) 100%)" 
                  opacity={0.5}
                />
                <Box style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  color: 'white',
                  width: '80%'
                }}>
                  <Box style={{ 
                    position: 'relative',
                    width: rem(60),
                    height: rem(60),
                    margin: '0 auto',
                    marginBottom: rem(15),
                    animation: 'pulseGlow 2s ease-in-out infinite'
                  }}>
                    <ClassicPyramidEye size={60} />
                    <Box style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: rem(20),
                      height: rem(20),
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '1px solid #FFD700'
                    }}>
                      <Image
                        src={pyramidEyeImages.eyeCloseup}
                        width={20}
                        height={20}
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>
                  <Text fw={700} size="lg">EYE OF PROVIDENCE</Text>
                  <Text size="sm" opacity={0.8}>Watches Over All That Seek Enlightenment</Text>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>

      {/* Final Call to Action with Pyramid Eye Image */}
      <Container size="lg" py={80}>
        <Paper 
          p="xl" 
          radius="lg" 
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b0e 100%)',
            color: 'white',
            textAlign: 'center',
            border: '2px solid #B8860B',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url(${pyramidEyeImages.mysteriousArt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          
          <Box style={{ position: 'relative', zIndex: 1 }}>
            <Box style={{ 
              position: 'relative',
              width: rem(120), 
              height: rem(120), 
              margin: '0 auto',
              marginBottom: rem(20)
            }}>
              <Box style={{ animation: 'subtleRotate 30s linear infinite' }}>
                <ClassicPyramidEye size={120} />
              </Box>
              <Box style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: rem(35),
                height: rem(35),
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #FFD700',
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.7)'
              }}>
                <Image
                  src={pyramidEyeImages.eyeDetail}
                  width={35}
                  height={35}
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
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
          </Box>
        </Paper>
      </Container>

      {/* Reusable Footer Component */}
      <Footer />
    </>
  );
}