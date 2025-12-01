import { 
  Title, 
  Paper, 
  Text, 
  Container, 
  Grid, 
  Group, 
  Stack, 
  Card, 
  TextInput, 
  Textarea, 
  Button, 
  BackgroundImage, 
  Overlay, 
  Box, 
  rem,
  ThemeIcon,
  List,
  //ActionIcon,
  Badge
} from "@mantine/core";
import { 
  IconPhone, 
  IconMail, 
  IconMapPin, 
  IconClock, 
  IconSend,
  IconBrandWhatsapp,
  //IconBrandTwitter,
  // IconBrandLinkedin,
  // IconBrandFacebook,
  // IconBrandInstagram,
  IconMessageCircle
} from "@tabler/icons-react";
import Footer from "../components/Footer";


declare global {
  interface Window {
    BFM?: {
      open?: () => void;
    };
  }
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  // Function to open WhatsApp chat directly
  const openWhatsApp = () => {
    const phoneNumber = "256700000000"; // Your WhatsApp business number
    const message = "Hello! I visited your website and would like to learn more about CorporateCo.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };




  // Function to trigger the bot.space widget programmatically
  const openChatBot = () => {
   if (window.BFM && window.BFM.open) {
  window.BFM.open();
}

  };

  return (
    <>
      {/* Hero Section */}
      <Box style={{ position: 'relative', height: rem(400), marginTop: rem(-70) }}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          style={{ height: '100%' }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(10, 37, 64, 0.7) 0%, rgba(10, 37, 64, 0.9) 100%)"
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
                Get In Touch
              </Title>
              <Text size="xl" opacity={0.9} mb="lg">
                We're here to help you grow and succeed. Reach out anytime.
              </Text>
              
              <Badge 
                size="xl" 
                variant="filled" 
                color="green"
                leftSection={<IconBrandWhatsapp size={16} />}
                style={{ cursor: 'pointer' }}
                onClick={openChatBot}
              >
                Live Chat Available
              </Badge>
            </Stack>
          </Container>
        </BackgroundImage>
      </Box>

      <Container size="lg" py={80}>
        <Grid gutter={50}>
          {/* Contact Form Card */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Card p="xl" radius="lg" withBorder shadow="sm">
              <Group  mb="md">
                <Title order={2} >
                  Send Us a Message
                </Title>
                <Badge color="green" variant="light">
                  <Group >
                    <IconMessageCircle size={14} />
                    <Text size="sm">Quick Response</Text>
                  </Group>
                </Badge>
              </Group>
              
              <Text color="dimmed" mb="xl">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </Text>

              <form onSubmit={handleSubmit}>
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Full Name"
                      placeholder="Enter your full name"
                      required
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <TextInput
                      label="Subject"
                      placeholder="What is this regarding?"
                      required
                    />
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Textarea
                      label="Message"
                      placeholder="Tell us how we can help you..."
                      autosize
                      minRows={5}
                      required
                    />
                  </Grid.Col>
                </Grid>

                <Group grow>
                  <Button 
                    type="submit" 
                    size="lg" 
                    mt="xl"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                    rightSection={<IconSend size={20} />}
                  >
                    Send Message
                  </Button>
                  
                  <Button 
                    size="lg" 
                    mt="xl"
                    variant="filled"
                    color="green"
                    leftSection={<IconBrandWhatsapp size={20} />}
                    onClick={openChatBot}
                  >
                    WhatsApp Chat
                  </Button>
                </Group>
              </form>
            </Card>
          </Grid.Col>

          {/* Contact Information Card */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack>
              <Card p="lg" radius="lg" withBorder>
                <Title order={3} mb="md" >
                  Contact Information
                </Title>
                <Stack >
                  <Group>
                    <ThemeIcon size={50} radius="md" variant="light" color="blue">
                      <IconPhone size={24} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Phone</Text>
                      <Text size="sm" color="dimmed">+27834332530</Text>
                      
                    </div>
                  </Group>
                  
                  <Group>
                    <ThemeIcon size={50} radius="md" variant="light" color="green">
                      <IconBrandWhatsapp size={24} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>WhatsApp</Text>
                      <Text size="sm" color="dimmed">27834332530</Text>
                      <Text size="sm" color="dimmed" style={{ cursor: 'pointer' }} onClick={openWhatsApp}>
                        Click to chat instantly
                      </Text>
                    </div>
                  </Group>
                  
                  <Group>
                    <ThemeIcon size={50} radius="md" variant="light" color="orange">
                      <IconMail size={24} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Email</Text>
                      <Text size="sm" color="dimmed">agentillumination@gmail .com</Text>
                      
                    </div>
                  </Group>
                  
                  <Group>
                    <ThemeIcon size={50} radius="md" variant="light" color="red">
                      <IconMapPin size={24} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Location</Text>
                      <Text size="sm" color="dimmed">
                        58 Sandton city Pretoria South Africat<br />
                        Kampala, Uganda
                      </Text>
                    </div>
                  </Group>
                  
                  <Group>
                    <ThemeIcon size={50} radius="md" variant="light" color="grape">
                      <IconClock size={24} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Business Hours</Text>
                      <Text size="sm" color="dimmed">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 1:00 PM
                      </Text>
                    </div>
                  </Group>
                </Stack>
              </Card>

              {/* Quick Actions Card */}
              <Card p="lg" radius="lg" withBorder>
                <Title order={4} mb="md" >
                  Quick Actions
                </Title>
                <Stack >
                  <Button 
                    variant="light" 
                    color="green" 
                    leftSection={<IconBrandWhatsapp size={16} />}
                    onClick={openChatBot}
                    fullWidth
                  >
                    Start WhatsApp Chat
                  </Button>
                  <Button 
                    variant="light" 
                    color="blue"
                    component="a"
                    href="tel:+256700000000"
                    leftSection={<IconPhone size={16} />}
                    fullWidth
                  >
                    Call Us Now
                  </Button>
                  <Button 
                    variant="light" 
                    color="orange"
                    component="a"
                    href="mailto:agentillumination@gmail .com"
                    leftSection={<IconMail size={16} />}
                    fullWidth
                  >
                    Send Email
                  </Button>
                </Stack>
              </Card>

              {/* Response Time Card */}
              <Card p="lg" radius="lg" withBorder style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <Stack align="center">
                  <IconMessageCircle size={32} color="#40c057" />
                  <Text fw={600} >Average Response Time</Text>
                  <Badge color="green" size="lg">
                    Under 5 minutes
                  </Badge>
                  <Text size="sm" color="dimmed" >
                    Via WhatsApp during business hours
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* WhatsApp Features Section */}
        <Paper 
          mt={50}
          p="xl" 
          radius="lg" 
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white'
          }}
        >
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Title order={2} mb="md">
                Instant Support via WhatsApp
              </Title>
              <Text size="lg" mb="lg" opacity={0.9}>
                Get immediate answers to your questions through our AI-powered WhatsApp chatbot. 
                Available 24/7 for instant support.
              </Text>
              <List spacing="sm" size="lg">
                <List.Item icon={<IconBrandWhatsapp color="white" />}>
                  Instant responses to common questions
                </List.Item>
                <List.Item icon={<IconBrandWhatsapp color="white" />}>
                  Schedule calls and meetings
                </List.Item>
                <List.Item icon={<IconBrandWhatsapp color="white" />}>
                  Get membership information
                </List.Item>
                <List.Item icon={<IconBrandWhatsapp color="white" />}>
                  Connect with human support when needed
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="center">
                <IconBrandWhatsapp size={80} color="white" />
                <Button 
                  size="lg" 
                  variant="white"
                  color="dark"
                  leftSection={<IconBrandWhatsapp size={20} />}
                  onClick={openChatBot}
                >
                  Start Chat Now
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Rest of your existing sections (Google Maps, FAQ, CTA) */}
        {/* ... */}
      </Container>

      <Footer />
    </>
  );
}