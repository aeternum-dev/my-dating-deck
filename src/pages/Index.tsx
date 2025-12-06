import { Helmet } from "react-helmet-async";
import PitchDeck from "@/components/PitchDeck";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dating Pitchdeck | Get to Know Me</title>
        <meta name="description" content="A creative introduction for dating - learn about who I am through this interactive pitchdeck." />
      </Helmet>
      <main className="min-h-screen bg-background">
        <PitchDeck />
      </main>
    </>
  );
};

export default Index;
