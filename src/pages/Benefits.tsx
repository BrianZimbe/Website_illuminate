import { 
  Title, 
  Text, 
  Container, 
  Grid, 
  Paper, 
  Group, 
  Stack, 
  Card, 
  //Image, 
  BackgroundImage, 
  Overlay, 
  Box, 
  rem,
  ThemeIcon,
  Avatar,
  Badge,
  Button
} from "@mantine/core";
import { Link } from "react-router-dom";
import { 
  IconPhone, 
  IconMapPin, 
  IconMail,
  IconStar,
  IconCrown,
  IconShield,
  IconEye,
  IconLock,
  //IconGem,
  IconWorld
} from "@tabler/icons-react";
import Footer from "../components/Footer";


const Benefits = () => {
  const achievers = [
    {
      name: "ALEXANDER R.",
      position: "Global Financial Leader",
      company: "World Banking Consortium",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievement: "Shaped Global Economic Policies",
      benefits: ["WEALTH SECRETS", "ANCIENT ECONOMICS", "GLOBAL NETWORK"],
      rating: 5
    },
    {
      name: "ISABELLA V.",
      position: "Political Influencer",
      company: "Global Governance Council",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievement: "Directed National Policies",
      benefits: ["POLITICAL POWER", "INFLUENCE NETWORKS", "STRATEGIC WISDOM"],
      rating: 5
    },
    {
      name: "MARCUS A.",
      position: "Industry Titan",
      company: "Ancient Enterprises",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievement: "Built Multi-Billion Empire",
      benefits: ["BUSINESS SECRETS", "MARKET CONTROL", "WEALTH CREATION"],
      rating: 5
    },
    {
      name: "DR. HELENA P.",
      position: "Research Director",
      company: "Advanced Sciences Institute",
      image: "https://images.unsplash.com/photo-1551836026-d5c88ac5c73d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievement: "Pioneered Forbidden Technologies",
      benefits: ["ANCIENT SCIENCE", "RESEARCH ACCESS", "INNOVATION SECRETS"],
      rating: 5
    },
    {
      name: "LORD WILLIAM B.",
      position: "Global Negotiator",
      company: "International Relations Bureau",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievement: "Brokered Historic Agreements",
      benefits: ["DIPLOMATIC POWER", "GLOBAL INFLUENCE", "STRATEGIC ALLIANCES"],
      rating: 5
    },
    {
      name: "MADAME SOPHIA R.",
      position: "Global Leader",
      company: "World Change Foundation",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievement: "Directed Global Humanitarian Efforts",
      benefits: ["SOCIAL INFLUENCE", "WEALTH DISTRIBUTION", "GLOBAL IMPACT"],
      rating: 5
    }
  ];

  const benefitCategories = [
    {
      icon: IconCrown,
      title: "ULTIMATE POWER",
      description: "Access forbidden knowledge and influence world events",
      features: ["GLOBAL INFLUENCE", "DECISION MAKING", "POWER NETWORKS"]
    },
    {
      icon: IconStar,
      title: "WEALTH MASTERY",
      description: "Learn ancient financial secrets that create limitless abundance",
      features: ["WEALTH SECRETS", "INVESTMENT WISDOM", "ECONOMIC CONTROL"]
    },
    {
      icon: IconEye,
      title: "FORBIDDEN KNOWLEDGE",
      description: "Access wisdom hidden from ordinary minds for centuries",
      features: ["ANCIENT TEXTS", "HIDDEN TRUTHS", "ESOTERIC WISDOM"]
    },
    {
      icon: IconWorld,
      title: "GLOBAL NETWORK",
      description: "Connect with the most influential minds across the globe",
      features: ["ELITE CONTACTS", "GLOBAL REACH", "STRATEGIC ALLIANCES"]
    },
    {
      icon: IconShield,
      title: "ANCIENT PROTECTION",
      description: "Benefit from centuries of accumulated power and influence",
      features: ["LEGAL SHIELD", "ASSET PROTECTION", "INFLUENCE SECURITY"]
    },
    {
      icon: IconLock,
      title: "SECRET ACCESS",
      description: "Gain entry to exclusive circles and hidden opportunities",
      features: ["PRIVATE EVENTS", "SECRET SOCIETIES", "EXCLUSIVE DEALS"]
    }
  ];

  return (
    <>
      {/* Hero Section with Image */}
      <Box style={{ position: 'relative', height: rem(400), marginTop: rem(-70) }}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          style={{ height: '100%' }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(25, 15, 50, 0.8) 0%, rgba(40, 25, 80, 0.9) 100%)"
            opacity={0.9}
            zIndex={1}
          />
          
          <Container size="lg" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
            <Stack justify="center" style={{ height: '100%', color: 'white' }}>
              <Title 
                order={1} 
                style={{ 
                  fontSize: rem(48),
                  fontWeight: 900
                }}
              >
                MEMBER BENEFITS
              </Title>
              <Text size="xl" opacity={0.9}>
                Access Privileges Reserved for the World's Elite
              </Text>
            </Stack>
          </Container>
        </BackgroundImage>
      </Box>

      {/* Benefits Overview */}
      <Container size="lg" py={80}>
        <Title order={2} mb="md" style={{ color: '#2D1B69' }}>
          EXCLUSIVE MEMBER PRIVILEGES
        </Title>
        <Text size="lg"  mb="xl" color="dimmed">
          Ancient benefits that have shaped world leaders for centuries
        </Text>

        <Grid gutter={30}>
          {benefitCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Card 
                  p="lg" 
                  radius="lg" 
                  withBorder
                  style={{ 
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderColor: '#FFD700',
                    backgroundColor: '#2D1B69',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Group mb="md">
                    <ThemeIcon size={50} radius="md" variant="light" color="#FFD700">
                      <IconComponent size={26} />
                    </ThemeIcon>
                    <Title order={4}>
                      {category.title}
                    </Title>
                  </Group>
                  
                  <Text opacity={0.9} mb="md">
                    {category.description}
                  </Text>
                  
                  <Stack >
                    {category.features.map((feature, featureIndex) => (
                      <Group key={featureIndex} >
                        <ThemeIcon size={20} radius="xl" color="#FFD700" variant="light">
                          <IconStar size={12} />
                        </ThemeIcon>
                        <Text size="sm">{feature}</Text>
                      </Group>
                    ))}
                  </Stack>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>

      {/* Achievers Gallery */}
      <Paper 
        style={{ 
          backgroundColor: '#1A0F3D'
        }} 
        py={80}
      >
        <Container size="lg">
          <Title order={2}  mb="md" style={{ color: 'white' }}>
            OUR ENLIGHTENED MEMBERS
          </Title>
          <Text size="lg"  mb="xl" style={{ color: 'white', opacity: 0.9 }}>
            Those who have embraced their power and shaped history
          </Text>

          <Grid gutter={30}>
            {achievers.map((achiever, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Card 
                  p="lg" 
                  radius="lg" 
                  withBorder
                  style={{ 
                    height: '100%',
                    textAlign: 'center',
                    borderColor: '#FFD700',
                    backgroundColor: '#2D1B69',
                    color: 'white'
                  }}
                >
                  <Avatar 
                    size={120} 
                    radius="50%" 
                    src={achiever.image} 
                    mx="auto"
                    mb="md"
                  />
                  
                  <Title order={4} mb="xs">
                    {achiever.name}
                  </Title>
                  
                  <Text fw={600} color="#FFD700" size="sm" mb="xs">
                    {achiever.position}
                  </Text>
                  
                  <Text size="sm" opacity={0.8} mb="xs">
                    {achiever.company}
                  </Text>
                  
                  <Badge color="#FFD700" variant="light" mb="md">
                    {achiever.achievement}
                  </Badge>
                  
                  <Group mb="md">
                    {[...Array(achiever.rating)].map((_, i) => (
                      <IconStar key={i} size={16} color="#FFD700" fill="#FFD700" />
                    ))}
                  </Group>
                  
                  <Stack >
                    {achiever.benefits.map((benefit, benefitIndex) => (
                      <Badge 
                        key={benefitIndex} 
                        variant="outline" 
                        color="#FFD700" 
                        size="sm"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Paper>

      {/* Contact Card Section */}
      <Container size="lg" py={80}>
        <Card 
          p="xl" 
          radius="lg" 
          shadow="md"
          style={{
            background: 'linear-gradient(135deg, #2D1B69 0%, #1A0F3D 100%)',
            color: 'white'
          }}
        >
          <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Title order={2} mb="md">
                READY TO CLAIM YOUR BIRTHRIGHT?
              </Title>
              <Text size="lg" mb="lg" opacity={0.9}>
                Join the Illuminati and access privileges reserved for world leaders. 
                Our council awaits worthy candidates.
              </Text>
              
              <Stack>
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="#FFD700">
                    <IconPhone size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500}>SACRED LINE</Text>
                    <Text size="lg">+27 74 400 0980</Text>
                  </div>
                </Group>
                
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="#FFD700">
                    <IconMail size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500}>ANCIENT WISDOM</Text>
                    <Text size="lg">agentillumination@gmail .com</Text>
                  </div>
                </Group>
                
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="#FFD700">
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
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack justify="center" style={{ height: '100%' }}>
                <Link to="/registration">
                  <Button 
                    fullWidth 
                    size="lg" 
                    variant="gradient"
                    gradient={{ from: '#FFD700', to: '#FFA500' }}
                    mb="md"
                  >
                    JOIN NOW
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    fullWidth 
                    size="lg" 
                    variant="outline"
                    color="white"
                  >
                    CONTACT US
                  </Button>
                </Link>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* Final Enlightenment Section */}
      <Container size="lg" py={80}>
        <Paper 
          p="xl" 
          radius="lg"
          style={{
            background: 'linear-gradient(135deg, #2D1B69 0%, #1A0F3D 100%)',
            color: 'white',
            textAlign: 'center',
            border: '2px solid #FFD700'
          }}
        >
          <IconCrown size={60} color="#FFD700" style={{ margin: '0 auto 20px' }} />
          <Title order={2} mb="md">
            THE WORLD AWAITS YOUR ASCENT
          </Title>
          <Text size="lg" mb="xl" opacity={0.9}>
            Ordinary power is for ordinary people. You were destined for ultimate influence. 
            Take the first step toward claiming your rightful place among the world's elite.
          </Text>
          <Link to="/registration">
            <Button 
              size="lg" 
              variant="gradient"
              gradient={{ from: '#FFD700', to: '#FFA500' }}
            >
              CLAIM YOUR POWER
            </Button>
          </Link>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Benefits;