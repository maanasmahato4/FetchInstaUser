// packages and libraries
import { Container } from "@mantine/core"; // mantine

// custom components
import ExtractorForm from "../components/ExtractorFrom"; // instagram user extractor form

function Home() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Get Instragram User</h1>
      <ExtractorForm />
    </Container>
  );
};

export default Home;