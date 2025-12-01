import { 
  Title, 
  Text, 
  Container, 
  Grid, 
  Paper, 
  Group, 
  Stack, 
  Button, 
  List, 
  ThemeIcon, 
  Card, 
  Image, 
  BackgroundImage, 
  Overlay, 
  Box, 
  rem,
  Badge
} from "@mantine/core";
import { Link } from "react-router-dom";
import { 
  IconCheck, 
  IconUser, 
  IconFileDescription, 
  //IconCreditCard, 
  //IconCertificate,
  IconArrowRight,
  //IconStar,
  IconCrown,
  IconShield,
  IconEye,
  IconLock
} from "@tabler/icons-react";
import Footer from "../components/Footer";

const HowToJoin = () => {
  const steps = [
    {
      icon: IconUser,
      title: "Seeker's Application",
      description: "Begin your path to enlightenment",
      details: "Submit your personal information for initial consideration"
    },
    {
      icon: IconFileDescription,
      title: "Ancient Knowledge Test",
      description: "Demonstrate your worthiness",
      details: "Complete our assessment of wisdom, ambition, and potential"
    },
    {
      icon: IconShield,
      title: "Council Review",
      description: "Ancient wisdom evaluates your soul",
      details: "Our high council reviews your application in sacred chambers"
    },
    {
      icon: IconCrown,
      title: "Initiation Ceremony",
      description: "Embrace your true destiny",
      details: "Final acceptance and welcome into our ancient brotherhood"
    }
  ];

  const membershipPlans = [
    {
      name: "Neophyte",
      price: "$777",
      period: "/initiation",
      description: "First step toward enlightenment",
      features: ["Basic Ancient Knowledge", "Monthly Wisdom Sessions", "Sacred Texts Access", "Brotherhood Network"],
      popular: false,
      badge: "Seeker"
    },
    {
      name: "Adept",
      price: "$1,999",
      period: "/initiation",
      description: "Deeper wisdom and influence",
      features: ["All Neophyte features", "Advanced Rituals", "Mentorship Program", "Global Connections", "Wealth Secrets"],
      popular: true,
      badge: "Most Chosen"
    },
    {
      name: "Master",
      price: "$4,444",
      period: "/initiation",
      description: "Ultimate power and knowledge",
      features: ["All Adept features", "High Council Access", "Ancient Prophecies", "World Influence", "Forbidden Arts"],
      popular: false,
      badge: "Elite"
    }
  ];

  return (
    <>
      {/* Hero Section with Image */}
      <Box style={{ position: 'relative', height: rem(400), marginTop: rem(-70) }}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          style={{ height: '100%' }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(139, 69, 19, 0.7) 0%, rgba(101, 67, 33, 0.9) 100%)"
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
                Begin Your Initiation
              </Title>
              <Text size="xl" opacity={0.9}>
                Start your journey toward ultimate power and ancient wisdom
              </Text>
            </Stack>
          </Container>
        </BackgroundImage>
      </Box>

      {/* How to Join Process */}
      <Container size="lg" py={80}>
        <Stack >
          {/* Process Steps */}
          <Box>
            <Title order={2} mb="xl" >
              The 4 Sacred Steps to Enlightenment
            </Title>
            
            <Grid gutter={50}>
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
                    <Card 
                      p="lg" 
                      radius="lg" 
                      withBorder
                      style={{ 
                        textAlign: 'center',
                        height: '100%',
                        transition: 'transform 0.3s ease',
                        borderColor: '#B8860B'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(184, 134, 11, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Box
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: rem(80),
                          height: rem(80),
                          background: 'linear-gradient(135deg, #B8860B 0%, #8B4513 100%)',
                          borderRadius: '50%',
                          margin: '0 auto 20px'
                        }}
                      >
                        <IconComponent size={40} color="white" />
                      </Box>
                      
                      <Text fw={700} size="lg" mb="xs" color="orange">
                        Ancient Step {index + 1}
                      </Text>
                      <Title order={4}  mb="sm">
                        {step.title}
                      </Title>
                      <Text color="dimmed" mb="sm">
                        {step.description}
                      </Text>
                      <Text size="sm" color="orange">
                        {step.details}
                      </Text>
                    </Card>
                  </Grid.Col>
                );
              })}
            </Grid>
          </Box>

          {/* Benefits Section */}
          <Box>
            <Title order={2}  mb="xl">
              Why Seek Illumination?
            </Title>
            
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Image
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=2094&q=80"
                  radius="lg"
                  height={400}
                />
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack >
                  <List
                    spacing="md"
                    size="lg"
                    center
                    icon={
                      <ThemeIcon color="orange" size={24} radius="xl">
                        <IconEye size={16} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      <Text fw={600}>Forbidden Knowledge</Text>
                      <Text size="sm" color="dimmed">
                        Access ancient wisdom hidden from ordinary minds
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={600}>Global Influence</Text>
                      <Text size="sm" color="dimmed">
                        Shape world events from behind the veil of power
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={600}>Wealth Mastery</Text>
                      <Text size="sm" color="dimmed">
                        Learn financial secrets that create limitless abundance
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={600}>Elite Brotherhood</Text>
                      <Text size="sm" color="dimmed">
                        Join history's most powerful and secretive network
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={600}>Ancient Prophecies</Text>
                      <Text size="sm" color="dimmed">
                        Understand the hidden patterns that shape our world
                      </Text>
                    </List.Item>
                  </List>
                  
                  <Link to="/registration">
                    <Button 
                      size="lg" 
                      variant="gradient"
                      gradient={{ from: 'gold', to: 'orange' }}
                      rightSection={<IconArrowRight size={20} />}
                    >
                      Begin Your Initiation
                    </Button>
                  </Link>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Membership Plans */}
          <Box>
            <Title order={2}  mb="xl">
              Choose Your Path to Power
            </Title>
            
            <Grid>
              {membershipPlans.map((plan, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                  <Card 
                    p="xl" 
                    radius="lg" 
                    withBorder
                    style={{ 
                      position: 'relative',
                      height: '100%',
                      border: plan.popular ? '2px solid #B8860B' : '1px solid #dee2e6',
                      background: plan.popular ? 'linear-gradient(135deg, #FFF8DC 0%, #FFEBCD 100%)' : 'white'
                    }}
                  >
                    {plan.popular && (
                      <Badge 
                        variant="filled" 
                        color="orange" 
                        size="lg"
                        style={{
                          position: 'absolute',
                          top: -15,
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      >
                        {plan.badge}
                      </Badge>
                    )}
                    
                    <Stack align="center" mb="lg">
                      <Title order={3} >
                        {plan.name}
                      </Title>
                      <Group align="end">
                        <Text size="xl" fw={900} color="orange">
                          {plan.price}
                        </Text>
                        <Text size="sm" color="dimmed" mb={2}>
                          {plan.period}
                        </Text>
                      </Group>
                      <Text size="sm" color="dimmed" >
                        {plan.description}
                      </Text>
                    </Stack>
                    
                    <List
                      spacing="sm"
                      center
                      icon={
                        <ThemeIcon color="orange" size={20} radius="xl">
                          <IconCheck size={12} />
                        </ThemeIcon>
                      }
                    >
                      {plan.features.map((feature, featureIndex) => (
                        <List.Item key={featureIndex}>
                          <Text size="sm">{feature}</Text>
                        </List.Item>
                      ))}
                    </List>
                    
                    <Link to="/registration">
                      <Button 
                        fullWidth 
                        mt="xl" 
                        size="md"
                        variant={plan.popular ? "filled" : "outline"}
                        color="orange"
                        style={{
                          background: plan.popular ? 'linear-gradient(135deg, #B8860B 0%, #8B4513 100%)' : undefined
                        }}
                      >
                        Choose Path
                      </Button>
                    </Link>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Box>

          {/* CTA Section with Image Overlay */}
          <Box style={{ position: 'relative', borderRadius: rem(20), overflow: 'hidden' }}>
            <BackgroundImage
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              style={{ height: rem(400) }}
            >
              <Overlay
                gradient="linear-gradient(105deg, rgba(139, 69, 19, 0.9) 0%, rgba(101, 67, 33, 0.7) 100%)"
                opacity={0.9}
              />
              
              <Container size="sm" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
                <Stack justify="center" align="center" style={{ height: '100%', textAlign: 'center', color: 'white' }}>
                  <IconCrown size={60} color="#FFD700" />
                  <Title order={2} mb="md">
                    Ready to Claim Your Destiny?
                  </Title>
                  <Text size="lg" mb="xl" opacity={0.9}>
                    Join the ancient brotherhood that has shaped human history for centuries
                  </Text>
                  
                  <Group>
                    <Link to="/registration">
                      <Button 
                        size="lg" 
                        variant="white"
                        color="dark"
                        rightSection={<IconArrowRight size={20} />}
                      >
                        Begin Initiation
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button 
                        size="lg" 
                        variant="outline"
                        color="white"
                      >
                        Seek Counsel
                      </Button>
                    </Link>
                  </Group>
                </Stack>
              </Container>
            </BackgroundImage>
          </Box>
        </Stack>
      </Container>

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
          <IconLock size={60} color="#FFD700" style={{ margin: '0 auto 20px' }} />
          <Title order={2} mb="md">
            The Gates of Power Await
          </Title>
          <Text size="lg" mb="xl" opacity={0.9}>
            Ordinary life was never your destiny. The world needs those brave enough to see beyond 
            conventional reality and embrace their true power. Your journey toward enlightenment 
            and global influence begins with a single decision.
          </Text>
          <Link to="/registration">
            <Button 
              size="lg" 
              variant="gradient"
              gradient={{ from: 'gold', to: 'orange' }}
              rightSection={<IconArrowRight size={20} />}
            >
              Unlock Your Potential
            </Button>
          </Link>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HowToJoin;