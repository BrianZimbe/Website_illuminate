import { Group, Text, rem, Box, ActionIcon, Tooltip, Container } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", premium: false },
    { path: "/about", label: "About", premium: false },
    { path: "/how-to-join", label: "Join Illuminati", premium: true },
    { path: "/benefits", label: "Members Benefits", premium: false },
    { path: "/testimonials", label: "Testimonials", premium: false },
    { path: "/contact", label: "Contact", premium: false },
    { path: "/registration", label: "Registration Form", premium: true },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  // Custom SVG Icons
  const CrownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: rem(4) }}>
      <path
        d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z"
        fill="#FFD700"
        stroke="#FFD700"
        strokeWidth="1.5"
      />
    </svg>
  );

  const ArrowUpRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: rem(4) }}>
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="#00FF87"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MenuIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Box
      style={{
        background: scrolled 
          ? "rgba(10, 15, 25, 0.95)" 
          : "linear-gradient(135deg, rgba(10, 15, 25, 0.98) 0%, rgba(20, 30, 48, 0.97) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled 
          ? "1px solid rgba(255, 255, 255, 0.15)" 
          : "1px solid rgba(255, 255, 255, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* Contact Info Bar - Above Navigation */}
      <Box
        style={{
          background: "linear-gradient(135deg, rgba(20, 25, 35, 0.95) 0%, rgba(30, 40, 55, 0.95) 100%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: `${rem(8)} 0`,
        }}
      >
        <Container size="lg">
          <Group justify="space-between" style={{ flexWrap: 'nowrap' }}>
            {/* Welcome Text */}
            <Text
              size="sm"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                whiteSpace: 'nowrap',
              }}
            >
              Welcome to our website!
            </Text>

            {/* Contact Info Group */}
            <Group gap="xl" visibleFrom="sm" style={{ flexWrap: 'nowrap' }}>
              {/* Location */}
              <Group gap="xs" style={{ flexWrap: 'nowrap' }}>
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
                <Text
                  size="sm"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: 400,
                    fontFamily: "'Inter', sans-serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  58 Sandton city Pretoria South Africa
                </Text>
              </Group>

              {/* Phone Number */}
              <Group gap="xs" style={{ flexWrap: 'nowrap' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V19.92C22 20.52 21.53 21.02 20.94 21.07C20.38 21.12 19.8 21.15 19.2 21.15C10.73 21.15 3.85 14.27 3.85 5.8C3.85 5.2 3.88 4.62 3.93 4.06C3.98 3.47 4.48 3 5.08 3H8.08C8.63 3 9.09 3.39 9.13 3.94C9.16 4.46 9.19 4.97 9.24 5.47C9.34 6.37 9.5 7.25 9.71 8.11C9.81 8.52 9.63 8.95 9.27 9.18L7.97 10.07C9.16 12.83 11.17 14.84 13.93 16.03L14.82 14.73C15.05 14.37 15.48 14.19 15.89 14.29C16.75 14.5 17.63 14.66 18.53 14.76C19.03 14.81 19.54 14.84 20.06 14.87C20.61 14.91 21 15.37 21 15.92Z"
                    fill="rgba(0, 245, 255, 0.8)"
                  />
                </svg>
                <Text
                  size="sm"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: 400,
                    fontFamily: "'Inter', sans-serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  +27 74 400 0980
                </Text>
              </Group>

              {/* Email */}
              <Group gap="xs" style={{ flexWrap: 'nowrap' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7L10.94 11.34C11.59 11.75 12.41 11.75 13.06 11.34L20 7M5 18H19C20.1 18 21 17.1 21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18Z"
                    stroke="rgba(0, 245, 255, 0.8)"
                    strokeWidth="1.5"
                  />
                </svg>
                <Text
                  size="sm"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: 400,
                    fontFamily: "'Inter', sans-serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  agentillumination@gmail .com
                </Text>
              </Group>
            </Group>

            {/* Mobile Contact Info - Simplified */}
            <Box hiddenFrom="sm">
              <Text
                size="xs"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: 400,
                }}
              >
                +27 74 400 0980
              </Text>
            </Box>
          </Group>
        </Container>
      </Box>

      {/* Main Navigation */}
      <Container size="lg">
        <Group
          justify="space-between"
          py="md"
          style={{ 
            height: rem(80),
            alignItems: "center",
          }}
        >

          {/* Logo */}
          <Box style={{ position: "relative" }}>
            <Text
              size="xl"
              fw={900}
              style={{
                background: "linear-gradient(135deg, #00F5FF 0%, #00FF87 50%, #FF00FF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: rem(2),
                fontSize: rem(28),
                filter: "drop-shadow(0 0 20px rgba(0, 245, 255, 0.3))",
                cursor: "pointer",
                position: "relative",
                zIndex: 2,
              }}
              className="logo-hover"
            >
              ILLUMINATIUNIT
            </Text>
          </Box>

          {/* Desktop Navigation - Fixed spacing */}
          <Group gap="sm" visibleFrom="md" style={{ position: "relative", alignItems: "center" }}>
            {navItems.map((item) => (
              <Box key={item.path} style={{ position: "relative" }}>
                <Link
                  to={item.path}
                  style={{
                    color: isActiveLink(item.path) ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)",
                    textDecoration: "none",
                    fontWeight: isActiveLink(item.path) ? 700 : 600,
                    fontSize: rem(13),
                    position: "relative",
                    padding: `${rem(8)} ${rem(12)}`,
                    borderRadius: rem(6),
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontFamily: "'Inter', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: rem(4),
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: isActiveLink(item.path)
                      ? "linear-gradient(135deg, #0066CC, #004499)"
                      : item.premium
                      ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                      : "linear-gradient(135deg, rgba(51, 51, 51, 0.9), rgba(85, 85, 85, 0.9))",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                    whiteSpace: "nowrap",
                    maxHeight: rem(36),
                  }}
                  className="nav-link-glow"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
                    e.currentTarget.style.background = isActiveLink(item.path)
                      ? "linear-gradient(135deg, #0077EE, #0055AA)"
                      : item.premium
                      ? "linear-gradient(135deg, #FFE135, #FFA500)"
                      : "linear-gradient(135deg, rgba(68, 68, 68, 0.9), rgba(102, 102, 102, 0.9))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
                    e.currentTarget.style.background = isActiveLink(item.path)
                      ? "linear-gradient(135deg, #0066CC, #004499)"
                      : item.premium
                      ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                      : "linear-gradient(135deg, rgba(51, 51, 51, 0.9), rgba(85, 85, 85, 0.9))";
                  }}
                >
                  {item.label}
                  {item.premium && <CrownIcon />}
                  {item.path === "/registration" && <ArrowUpRightIcon />}
                </Link>

                {/* Active link indicator */}
                {isActiveLink(item.path) && (
                  <Box
                    style={{
                      position: "absolute",
                      bottom: rem(-6),
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: rem(4),
                      height: rem(4),
                      background: "linear-gradient(135deg, #00F5FF, #00FF87)",
                      borderRadius: "50%",
                      filter: "blur(1px)",
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                )}
              </Box>
            ))}
          </Group>

          {/* Mobile Menu Button */}
          <Tooltip label="Menu" withArrow>
            <ActionIcon
              variant="gradient"
              gradient={{ from: '#00F5FF', to: '#00FF87' }}
              size="lg"
              radius="xl"
              onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
              hiddenFrom="md"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              {mobileMenuOpened ? <CloseIcon /> : <MenuIcon />}
            </ActionIcon>
          </Tooltip>
        </Group>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpened && (
        <Box
          hiddenFrom="md"
          style={{
            background: "linear-gradient(135deg, rgba(10, 15, 25, 0.98) 0%, rgba(20, 30, 48, 0.98) 100%)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(30px)",
            padding: "xl",
            animation: "slideDown 0.3s ease-out",
          }}
          p="xl"
        >
          <Group gap="md" style={{ flexDirection: "column" }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpened(false)}
                style={{
                  color: isActiveLink(item.path) ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)",
                  textDecoration: "none",
                  fontWeight: isActiveLink(item.path) ? 700 : 600,
                  fontSize: rem(14),
                  width: "100%",
                  textAlign: "center",
                  padding: `${rem(12)} ${rem(16)}`,
                  borderRadius: rem(8),
                  transition: "all 0.3s ease",
                  fontFamily: "'Inter', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  background: isActiveLink(item.path)
                    ? "linear-gradient(135deg, #0066CC, #004499)"
                    : item.premium
                    ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                    : "linear-gradient(135deg, rgba(51, 51, 51, 0.9), rgba(85, 85, 85, 0.9))",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: rem(6),
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
                  e.currentTarget.style.background = isActiveLink(item.path)
                    ? "linear-gradient(135deg, #0077EE, #0055AA)"
                    : item.premium
                    ? "linear-gradient(135deg, #FFE135, #FFA500)"
                    : "linear-gradient(135deg, rgba(68, 68, 68, 0.9), rgba(102, 102, 102, 0.9))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.background = isActiveLink(item.path)
                    ? "linear-gradient(135deg, #0066CC, #004499)"
                    : item.premium
                    ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                    : "linear-gradient(135deg, rgba(51, 51, 51, 0.9), rgba(85, 85, 85, 0.9))";
                }}
              >
                {item.label}
                {item.premium && <CrownIcon />}
                {item.path === "/registration" && <ArrowUpRightIcon />}
              </Link>
            ))}
          </Group>
        </Box>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        .logo-hover:hover {
          filter: drop-shadow(0 0 30px rgba(0, 245, 255, 0.5)) brightness(1.1);
          transform: scale(1.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 1; }
          50% { transform: translateX(-50%) scale(1.1); opacity: 0.7; }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .nav-link-glow:hover {
          color: #FFFFFF !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }
      `}</style>
    </Box>
  );
}