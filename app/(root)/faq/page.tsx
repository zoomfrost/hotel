import FaqComponent from "@/components/FaqComponent";
import Container from "@/components/ui/container";

const Faq = () => {
  return (
    <Container title="Faq">
      <section className="w-full paddings">
        <FaqComponent />
      </section>
    </Container>
  );
};

export default Faq;
