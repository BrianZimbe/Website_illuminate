import { ActionIcon, Tooltip, Box, Paper, Text, Group, Avatar } from "@mantine/core";
import { IconBrandWhatsapp, IconX, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "+27834332530";
  const message = "Hello! I visited your website and would like to learn more.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      style={{
        position: 'fixed', // Changed to fixed for true overlay
        left: '20px',
        bottom: '20px',
        zIndex: 1000, // High z-index to ensure it's above everything
        pointerEvents: 'auto', // Ensure it's clickable
      }}
    >
      {/* WhatsApp Chat Interface */}
      {isOpen && (
        <Paper
          shadow="xl"
          radius="12px"
          style={{
            width: '320px',
            marginBottom: '15px',
            border: '1px solid #e0e0e0',
            overflow: 'hidden',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: 'white',
          }}
        >
          {/* Chat Header */}
          <Box
            style={{
              backgroundColor: '#25D366',
              padding: '12px 16px',
              color: 'white',
            }}
          >
            <Group >
              <Group>
                <Avatar 
                  size="md" 
                  radius="xl"
                  color="white"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <IconBrandWhatsapp size={20} />
                </Avatar>
                <Box>
                  <Text size="md"  style={{ color: 'white' }}>
                    Official Agent
                  </Text>
                  <Group >
                    <IconCheck size={12} color="white" />
                    <Text size="xs" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      Typically replies within a minute
                    </Text>
                  </Group>
                </Box>
              </Group>
              <ActionIcon 
                size="sm" 
                onClick={() => setIsOpen(false)}
                style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <IconX size={16} />
              </ActionIcon>
            </Group>
          </Box>

          {/* Chat Body */}
          <Box
            style={{
              padding: '16px',
              backgroundColor: '#f0f0f0',
              minHeight: '150px',
              maxHeight: '200px',
              overflowY: 'auto',
            }}
          >
            {/* Agent Message */}
            <Box
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '12px',
              }}
            >
              <Box
                style={{
                  backgroundColor: 'white',
                  padding: '8px 12px',
                  borderRadius: '8px 8px 8px 0',
                  maxWidth: '85%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                <Text size="sm" style={{ lineHeight: 1.4 }}>
                  Hi there! These secret brotherhood has been shrouded in mystery for centuries. But what is the truth behind this enigmatic organization?
                </Text>
                <Group  mt={4}>
                  <Text size="xs" color="dimmed">11:25</Text>
                  <IconCheck size={12} color="#25D366" />
                </Group>
              </Box>
            </Box>

            {/* Second Agent Message */}
            <Box
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '8px',
              }}
            >
              <Box
                style={{
                  backgroundColor: 'white',
                  padding: '8px 12px',
                  borderRadius: '8px 8px 8px 0',
                  maxWidth: '85%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                <Text size="sm" style={{ lineHeight: 1.4 }}>
                  Today you will find everything you need to know about the Illuminati, from its history and symbolism to its influence on planet earth.
                </Text>
                <Group mt={4}>
                  <Text size="xs" color="dimmed">11:25</Text>
                  <IconCheck size={12} color="#25D366" />
                </Group>
              </Box>
            </Box>

            {/* Third Agent Message */}
            <Box
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Box
                style={{
                  backgroundColor: 'white',
                  padding: '8px 12px',
                  borderRadius: '8px 8px 8px 0',
                  maxWidth: '85%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                <Text size="sm" style={{ lineHeight: 1.4 }}>
                  We offer a one-of-a-kind opportunity to those who seek enlightenment, wealth, spirituality, power and fame by joining our ranks.
                </Text>
                <Group mt={4}>
                  <Text size="xs" color="dimmed">11:25</Text>
                  <IconCheck size={12} color="#25D366" />
                </Group>
              </Box>
            </Box>
          </Box>

          {/* Start Chat Button */}
          <Box
            style={{
              padding: '16px',
              backgroundColor: 'white',
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <Paper
              component="button"
              onClick={openWhatsApp}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#128C7E';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#25D366';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Group>
                <IconBrandWhatsapp size={20} />
                <Text size="sm" >Start Chat</Text>
              </Group>
            </Paper>

            {/* Phone Number and Footer */}
            <Box mt="xs">
              <Text size="sm"  color="dark">
                {phoneNumber}
              </Text>
              <Text size="xs"  color="dimmed" mt={2}>
                by bot.space
              </Text>
            </Box>
          </Box>
        </Paper>
      )}

      {/* Floating WhatsApp Button */}
      <Tooltip
        label="Chat with us on WhatsApp"
        position="right"
        withArrow
        
      >
        <ActionIcon
          size="xl"
          radius="xl"
          variant="filled"
          color="green.7"
          onClick={toggleChat}
          style={{
            width: '60px',
            height: '60px',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
            animation: 'pulse 2s infinite',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <IconBrandWhatsapp size={30} />
        </ActionIcon>
      </Tooltip>

      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
            }
            50% {
              box-shadow: 0 4px 30px rgba(37, 211, 102, 0.6);
            }
            100% {
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
            }
          }
        `}
      </style>
    </Box>
  );
}