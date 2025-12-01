import { useState, useEffect } from "react";
import {
  TextInput,
  Textarea,
  Button,
  Title,
  Paper,
  Container,
  Grid,
  Group,
  Stack,
  Select,
  NumberInput,
  BackgroundImage,
  Overlay,
  Box,
  rem,
  Text,
  Card,
  ThemeIcon,
  List,
  Loader,
  Alert,
} from "@mantine/core";
import {
  //IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  //IconBriefcase,
  //IconCurrencyDollar,
  IconCheck,
  IconArrowRight,
  IconAlertCircle,
} from "@tabler/icons-react";
import Footer from "../components/Footer";

interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  idd: {
    root: string;
    suffixes: string[];
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
}

interface RegistrationForm {
  name: string;
  age: number | string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  country: string;
  job: string;
  salary: number | string;
  message: string;
}

export default function Registration() {
  const [form, setForm] = useState<RegistrationForm>({
    name: "",
    age: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    country: "",
    job: "",
    salary: "",
    message: "",
  });

  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);
  const [countryCodes, setCountryCodes] = useState<
    { value: string; label: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch countries and country codes from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch countries from REST Countries API
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch countries: ${response.status}`);
        }

        const countriesData: Country[] = await response.json();

        // Process countries for dropdown (sorted alphabetically)
        const countryOptions = countriesData
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => ({
            value: country.name.common,
            label: country.name.common,
          }));

        // Process country codes for dropdown
        const countryCodeOptions = countriesData
          .filter(
            (country) =>
              country.idd &&
              country.idd.root &&
              country.idd.suffixes &&
              country.idd.suffixes.length > 0
          )
          .map((country) => {
            // Get the full country code (root + first suffix)
            const code = country.idd.root + (country.idd.suffixes[0] || "");
            const flag = getFlagEmoji(country.cca2);
            return {
              value: code,
              label: `${flag} ${code} (${country.name.common})`,
            };
          })
          // Remove duplicates and sort alphabetically
          .filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.value === item.value)
          )
          .sort((a, b) => a.label.localeCompare(b.label));

        setCountries(countryOptions);
        setCountryCodes(countryCodeOptions);

        console.log(
          `Loaded ${countryOptions.length} countries and ${countryCodeOptions.length} country codes`
        );
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(
          `Failed to load countries. Please refresh the page. Error: ${errorMessage}`
        );
        console.error("Error fetching countries:", err);

        // Fallback to basic list if API fails
        setCountries(getFallbackCountries());
        setCountryCodes(getFallbackCountryCodes());
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Fallback country list
  const getFallbackCountries = () =>
    [
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Germany",
      "France",
      "Japan",
      "India",
      "Brazil",
      "China",
      "South Africa",
      "Nigeria",
      "Kenya",
      "Uganda",
      "Rwanda",
      "Tanzania",
      "Ghana",
      "Egypt",
      "South Korea",
      "Mexico",
    ].map((country) => ({ value: country, label: country }));

  // Fallback country codes list
  const getFallbackCountryCodes = () => [
    { value: "+1", label: "🇺🇸 +1 (US/Canada)" },
    { value: "+44", label: "🇬🇧 +44 (UK)" },
    { value: "+61", label: "🇦🇺 +61 (Australia)" },
    { value: "+49", label: "🇩🇪 +49 (Germany)" },
    { value: "+33", label: "🇫🇷 +33 (France)" },
    { value: "+81", label: "🇯🇵 +81 (Japan)" },
    { value: "+91", label: "🇮🇳 +91 (India)" },
    { value: "+55", label: "🇧🇷 +55 (Brazil)" },
    { value: "+86", label: "🇨🇳 +86 (China)" },
    { value: "+27", label: "🇿🇦 +27 (South Africa)" },
    { value: "+234", label: "🇳🇬 +234 (Nigeria)" },
    { value: "+254", label: "🇰🇪 +254 (Kenya)" },
    { value: "+256", label: "🇺🇬 +256 (Uganda)" },
    { value: "+250", label: "🇷🇼 +250 (Rwanda)" },
    { value: "+255", label: "🇹🇿 +255 (Tanzania)" },
    { value: "+233", label: "🇬🇭 +233 (Ghana)" },
    { value: "+20", label: "🇪🇬 +20 (Egypt)" },
    { value: "+82", label: "🇰🇷 +82 (South Korea)" },
    { value: "+52", label: "🇲🇽 +52 (Mexico)" },
  ];

  // Function to get flag emoji from country code
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const handleChange = (
    field: keyof RegistrationForm,
    value: string | number
  ) => {
    setForm({ ...form, [field]: value });
  };

  // Auto-select country code when country changes
  const handleCountryChange = (value: string | null) => {
    if (!value) return; // guard for null

    handleChange("country", value);

    if (countryCodes.length > 0) {
      const matchingCode = countryCodes.find((code) =>
        code.label.toLowerCase().includes(value.toLowerCase())
      );
      if (matchingCode) {
        handleChange("countryCode", matchingCode.value);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.name ||
      !form.email ||
      !form.phoneNumber ||
      !form.country ||
      !form.job
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Combine country code and phone number
    const fullPhoneNumber = `${form.countryCode}${form.phoneNumber}`;

    const submissionData = {
      ...form,
      phone: fullPhoneNumber,
      timestamp: new Date().toISOString(),
    };

    console.log("Form submitted:", submissionData);

    // Here you would typically send to your backend API
    // await fetch('/api/registration', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData)
    // });

    // Show success message
    alert(
      `Thank you ${form.name}! Your application has been submitted successfully. We will contact you at ${form.email} within 24-48 hours.`
    );

    // Reset form
    setForm({
      name: "",
      age: "",
      email: "",
      countryCode: "+1",
      phoneNumber: "",
      country: "",
      job: "",
      salary: "",
      message: "",
    });
  };

  const jobTitles = [
    "Software Engineer",
    "Product Manager",
    "Marketing Manager",
    "Sales Executive",
    "Data Scientist",
    "UX Designer",
    "Project Manager",
    "Business Analyst",
    "Financial Analyst",
    "HR Manager",
    "Operations Manager",
    "Consultant",
    "Entrepreneur",
    "Student",
    "Other",
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        style={{ position: "relative", height: rem(300), marginTop: rem(-70) }}
      >
        <BackgroundImage
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          style={{ height: "100%" }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(10, 37, 64, 0.7) 0%, rgba(10, 37, 64, 0.9) 100%)"
            opacity={0.9}
            zIndex={1}
          />

          <Container
            size="lg"
            style={{ position: "relative", zIndex: 2, height: "100%" }}
          >
            <Stack justify="center" style={{ height: "100%", color: "white" }}>
              <Title
                order={1}
                style={{
                  fontSize: rem(42),
                  fontWeight: 900,
                }}
              >
                Join Our Global Community
              </Title>
              <Text size="lg" opacity={0.9}>
                Connect with professionals from around the world
              </Text>
            </Stack>
          </Container>
        </BackgroundImage>
      </Box>

      <Container size="lg" py={80}>
        {error && (
          <Alert
            icon={<IconAlertCircle size={16} />}
            title="Loading Error"
            color="yellow"
            mb="md"
            variant="outline"
          >
            {error}
          </Alert>
        )}

        <Grid>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Paper p="xl" radius="lg" withBorder shadow="sm">
              <Group mb="lg">
                <Title order={2}>Member Registration</Title>
                {loading && (
                  <Group>
                    <Loader size="sm" />
                    <Text size="sm" color="dimmed">
                      Loading countries...
                    </Text>
                  </Group>
                )}
              </Group>

              <Text color="dimmed" mb="xl">
                Fields marked with * are required
              </Text>

              <form onSubmit={handleSubmit}>
                <Grid>
                  {/* Full Name */}
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Full Name *"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </Grid.Col>

                  {/* Age */}
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <NumberInput
                      label="Age"
                      placeholder="Enter your age"
                      value={form.age as number}
                      onChange={(value) => handleChange("age", value || "")}
                      min={18}
                      max={100}
                    />
                  </Grid.Col>

                  {/* Email */}
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                      label="Email *"
                      placeholder="Enter your email address"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </Grid.Col>

                  {/* Phone Number with Country Code */}
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack>
                      <Text size="sm" fw={500}>
                        Phone No (With country code) *
                      </Text>
                      <Group grow>
                        <Select
                          placeholder={loading ? "Loading..." : "Code"}
                          data={countryCodes}
                          value={form.countryCode}
                          onChange={(value) =>
                            handleChange("countryCode", value || "+1")
                          }
                          required
                          disabled={loading}
                          searchable
                          styles={{
                            input: {
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            },
                          }}
                        />
                        <TextInput
                          placeholder="706389097"
                          value={form.phoneNumber}
                          onChange={(e) => {
                            const cleanedValue = e.target.value.replace(
                              /[^\d]/g,
                              ""
                            );
                            handleChange("phoneNumber", cleanedValue);
                          }}
                          required
                          disabled={loading}
                          styles={{
                            input: {
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                              borderLeftWidth: 0,
                            },
                          }}
                        />
                      </Group>
                      <Text size="xs" color="dimmed">
                        Full number: {form.countryCode}
                        {form.phoneNumber}
                      </Text>
                    </Stack>
                  </Grid.Col>

                  {/* Country */}
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Select
                      label="Country"
                      placeholder="Select country"
                      data={countries}
                      value={form.country}
                      onChange={handleCountryChange}
                      required
                      leftSection={<IconMapPin size={16} />}
                      disabled={false}
                      searchable
                      nothingFoundMessage="No country found"
                    />
                  </Grid.Col>

                  {/* Job Title */}
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Select
                      label="What is your Job? *"
                      placeholder="Select your job title"
                      data={jobTitles}
                      value={form.job}
                      onChange={(value) => handleChange("job", value || "")}
                      required
                      searchable
                    />
                  </Grid.Col>

                  {/* Monthly Salary */}
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <NumberInput
                      label="Monthly Salary"
                      placeholder="Enter your monthly salary"
                      value={form.salary as number}
                      onChange={(value) => handleChange("salary", value || "")}
                      min={0}
                      step={100}
                    />
                  </Grid.Col>
                </Grid>

                {/* Message */}
                <Textarea
                  label="Why do you want to join?"
                  placeholder="Tell us about your career goals, what you hope to achieve, and why you're interested in joining our community..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  autosize
                  minRows={4}
                  mt="md"
                />

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  mt="xl"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  rightSection={<IconArrowRight size={20} />}
                  disabled={loading}
                >
                  {loading ? "Loading Countries..." : "Submit Application"}
                </Button>
              </form>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack>
              {/* Benefits Card */}
              <Card p="lg" radius="lg" withBorder>
                <Title order={3} mb="md">
                  Global Network Benefits
                </Title>
                <List
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThemeIcon color="green" size={20} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Connect with professionals worldwide</List.Item>
                  <List.Item>International career opportunities</List.Item>
                  <List.Item>Cross-cultural networking</List.Item>
                  <List.Item>Global industry insights</List.Item>
                  <List.Item>Multilingual community</List.Item>
                  <List.Item>International events and webinars</List.Item>
                </List>
              </Card>

              {/* Stats Card */}
              <Card p="lg" radius="lg" withBorder>
                <Title order={3} mb="md">
                  Our Global Reach
                </Title>
                <Stack>
                  <Group>
                    <Text size="sm">Countries</Text>
                    <Text fw={700} color="blue">
                      {countries.length}+
                    </Text>
                  </Group>
                  <Group>
                    <Text size="sm">Members</Text>
                    <Text fw={700} color="blue">
                      10,000+
                    </Text>
                  </Group>
                  <Group>
                    <Text size="sm">Industries</Text>
                    <Text fw={700} color="blue">
                      50+
                    </Text>
                  </Group>
                </Stack>
              </Card>

              {/* Contact Info */}
              <Card p="lg" radius="lg" withBorder>
                <Title order={3} mb="md">
                  Need Help?
                </Title>
                <Stack>
                  <Group>
                    <ThemeIcon
                      size={30}
                      radius="md"
                      variant="light"
                      color="blue"
                    >
                      <IconMail size={16} />
                    </ThemeIcon>
                    <Text size="sm">membership@corporateco.com</Text>
                  </Group>
                  <Group>
                    <ThemeIcon
                      size={30}
                      radius="md"
                      variant="light"
                      color="blue"
                    >
                      <IconPhone size={16} />
                    </ThemeIcon>
                    <Text size="sm">+27834332530</Text>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
