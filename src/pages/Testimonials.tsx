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
  Rating,
  Blockquote,
  Badge,
  Button
} from "@mantine/core";
import { Link } from "react-router-dom";
import { 
  IconQuote, 
  IconStar, 
  IconCrown,
  IconShield,
  IconEye,
  //IconGem,
  IconArrowRight
} from "@tabler/icons-react";
import Footer from "../components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "ALEXANDER R.",
      position: "Global Financial Leader",
      company: "World Banking Consortium",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "The ancient financial wisdom revealed to me transformed my understanding of global economics. I now influence markets using principles hidden for centuries. The power is beyond imagination.",
      rating: 5,
      achievement: "Shaped Global Economic Policies",
      joined: "Initiated 2018"
    },
    {
      name: "ISABELLA V.",
      position: "Political Influencer",
      company: "Global Governance Council",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "Through the brotherhood's guidance, I gained access to corridors of power I never knew existed. My influence now shapes national policies and international relations.",
      rating: 5,
      achievement: "Directed Policy Decisions",
      joined: "Initiated 2017"
    },
    {
      name: "MARCUS A.",
      position: "Industry Titan",
      company: "Ancient Enterprises",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "The business strategies revealed to me created an empire. The brotherhood's wisdom is beyond any modern education. Wealth flows when you understand the hidden patterns.",
      rating: 5,
      achievement: "Built Multi-Billion Empire",
      joined: "Initiated 2016"
    },
    {
      name: "DR. HELENA P.",
      position: "Research Director",
      company: "Advanced Sciences Institute",
      image: "https://images.unsplash.com/photo-1551836026-d5c88ac5c73d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "The forbidden knowledge I accessed through the order revolutionized my research. We're pioneering technologies that will remain classified for decades to come.",
      rating: 5,
      achievement: "Pioneered Classified Technologies",
      joined: "Initiated 2019"
    },
    {
      name: "LORD WILLIAM B.",
      position: "Global Negotiator",
      company: "International Relations Bureau",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "The diplomatic strategies taught within our sacred circles have allowed me to broker agreements that shape the future of nations. Power truly lies in understanding human nature.",
      rating: 5,
      achievement: "Brokered Historic Agreements",
      joined: "Initiated 2015"
    },
    {
      name: "MADAME SOPHIA R.",
      position: "Global Leader",
      company: "World Change Foundation",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "The ancient principles of influence and social dynamics revealed to me have transformed global philanthropy. True change comes from understanding the levers of power.",
      rating: 5,
      achievement: "Directed Global Humanitarian Efforts",
      joined: "Initiated 2018"
    },
    {
      name: "BARON VICTOR S.",
      position: "Wealth Strategist",
      company: "Ancient Capital Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "The financial secrets passed down through generations have multiplied my wealth exponentially. The brotherhood understands money in ways modern finance cannot comprehend.",
      rating: 5,
      achievement: "Mastered Ancient Wealth Principles",
      joined: "Initiated 2017"
    },
    {
      name: "COUNTESS ELEANOR M.",
      position: "Cultural Influencer",
      company: "Global Arts Consortium",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: "The understanding of mass psychology and cultural dynamics I've gained allows me to shape global trends. True influence comes from understanding the human psyche.",
      rating: 5,
      achievement: "Shaped Global Cultural Trends",
      joined: "Initiated 2019"
    }
  ];

  const stats = [
    {
      icon: IconCrown,
      value: "500+",
      label: "ENLIGHTENED MEMBERS",
      description: "Global network of influential minds"
    },
    {
      icon: IconStar,
      value: "100%",
      label: "POWER ACHIEVEMENT",
      description: "All members report significant influence growth"
    },
    {
      icon: IconStar,
      value: "5.0/5",
      label: "ANCIENT WISDOM RATING",
      description: "Based on sacred member reviews"
    },
    {
      icon: IconShield,
      value: "LIFETIME",
      label: "BROTHERHOOD BOND",
      description: "Once initiated, forever connected"
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
            <Stack justify="center" align="center" style={{ height: '100%', color: 'white', textAlign: 'center' }}>
              <Title 
                order={1} 
                style={{ 
                  fontSize: rem(48),
                  fontWeight: 900
                }}
              >
                SUCCESS STORIES
              </Title>
              <Text size="xl" opacity={0.9} style={{ maxWidth: rem(600) }}>
                Hear From Our Enlightened Members Who Have Shaped World Events
              </Text>
            </Stack>
          </Container>
        </BackgroundImage>
      </Box>

      {/* Stats Section */}
      <Container size="lg" py={80}>
        <Grid gutter={50}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <Stack align="center" style={{ textAlign: 'center' }}>
                  <ThemeIcon size={80} radius="md" variant="light" color="#FFD700">
                    <IconComponent size={40} />
                  </ThemeIcon>
                  <Text size="xl" fw={900} style={{ color: '#2D1B69' }}>
                    {stat.value}
                  </Text>
                  <Text fw={600} size="lg" style={{ color: '#2D1B69' }}>
                    {stat.label}
                  </Text>
                  <Text size="sm" color="dimmed">
                    {stat.description}
                  </Text>
                </Stack>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>

      {/* Brief Message Section */}
      <Paper 
        style={{ 
          backgroundColor: '#1A0F3D'
        }} 
        py={80}
      >
        <Container size="lg">
          <Stack align="center" style={{ textAlign: 'center', color: 'white' }}>
            <Title order={2}>
              ANCIENT WISDOM, MODERN POWER
            </Title>
            <Text size="lg" opacity={0.9} style={{ maxWidth: rem(800) }}>
              For centuries, our brotherhood has guided exceptional individuals toward their true potential. 
              These testimonials reveal how ancient principles, when applied with modern understanding, 
              create unprecedented influence and success beyond ordinary comprehension.
            </Text>
            <Badge size="lg" variant="filled" color="#FFD700">
              TRUSTED BY WORLD INFLUENCERS SINCE 1776
            </Badge>
          </Stack>
        </Container>
      </Paper>

      {/* Testimonials Grid */}
      <Container size="lg" py={80}>
        <Title order={2}  mb="md" style={{ color: '#2D1B69' }}>
          WORDS OF THE ENLIGHTENED
        </Title>
        <Text size="lg"  mb="xl" color="dimmed">
          Hear directly from those who have embraced their power through ancient wisdom
        </Text>

        <Grid gutter="xl">
          {testimonials.map((testimonial, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <Card 
                p="xl" 
                radius="lg" 
                withBorder
                style={{ 
                  height: '100%',
                  position: 'relative',
                  transition: 'transform 0.3s ease',
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
                {/* Quote Icon */}
                <Box
                  style={{
                    position: 'absolute',
                    top: rem(20),
                    right: rem(20),
                    opacity: 0.1
                  }}
                >
                  <IconQuote size={60} color="#FFD700" />
                </Box>

                <Stack >
                  {/* Rating */}
                  <Group>
                    <Rating value={testimonial.rating} readOnly color="yellow" />
                    <Badge color="#FFD700" variant="light">
                      {testimonial.rating}.0
                    </Badge>
                  </Group>

                  {/* Quote */}
                  <Blockquote
                    cite={`– ${testimonial.name}`}
                    icon={<IconQuote size={24} color="#FFD700" />}
                    styles={{
                      root: { padding: 0 },
                      cite: { marginTop: 'md', fontSize: rem(14), color: 'white' },
                      
                    }}
                  >
                    {testimonial.quote}
                  </Blockquote>

                  {/* Member Info */}
                  <Group>
                    <Avatar 
                      size={60} 
                      radius="50%" 
                      src={testimonial.image} 
                    />
                    <Box style={{ flex: 1 }}>
                      <Text fw={700} size="lg">
                        {testimonial.name}
                      </Text>
                      <Text size="sm" color="#FFD700" fw={600}>
                        {testimonial.position}
                      </Text>
                      <Text size="sm" opacity={0.8}>
                        {testimonial.company}
                      </Text>
                    </Box>
                  </Group>

                  {/* Achievement & Join Date */}
                  <Group >
                    <Badge variant="outline" color="#FFD700" size="sm">
                      {testimonial.achievement}
                    </Badge>
                    <Text size="xs" opacity={0.8}>
                      {testimonial.joined}
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Paper 
        style={{ 
          backgroundColor: '#2D1B69',
          color: 'white'
        }} 
        py={80}
      >
        <Container size="sm">
          <Stack align="center" style={{ textAlign: 'center' }}>
            <IconCrown size={60} color="#FFD700" />
            <Title order={2}>
              READY TO JOIN THE RANKS OF POWER?
            </Title>
            <Text size="lg" opacity={0.9}>
              Your journey toward ultimate influence and enlightenment awaits. 
              Join the ancient brotherhood that has shaped human history for centuries.
            </Text>
            <Group>
              <Link to="/registration">
                <Button 
                  size="lg" 
                  variant="gradient"
                  gradient={{ from: '#FFD700', to: '#FFA500' }}
                  rightSection={<IconArrowRight size={20} />}
                >
                  JOIN NOW
                </Button>
              </Link>
              <Link to="/how-to-join">
                <Button 
                  size="lg" 
                  variant="outline"
                  color="white"
                >
                  LEARN MORE
                </Button>
              </Link>
            </Group>
          </Stack>
        </Container>
      </Paper>

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
          <IconEye size={60} color="#FFD700" style={{ margin: '0 auto 20px' }} />
          <Title order={2} mb="md">
            THE WORLD NEEDS YOUR VISION
          </Title>
          <Text size="lg" mb="xl" opacity={0.9}>
            Ordinary success is for ordinary minds. You were destined for influence that transcends 
            conventional boundaries. Take your place among those who truly shape our world's destiny.
          </Text>
          <Link to="/registration">
            <Button 
              size="lg" 
              variant="gradient"
              gradient={{ from: '#FFD700', to: '#FFA500' }}
            >
              CLAIM YOUR DESTINY
            </Button>
          </Link>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Testimonials;