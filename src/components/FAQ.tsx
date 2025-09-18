import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is SwiftGo available in my city?",
      answer: "We're expanding rapidly. Check our Route Finder to see if we operate in your area."
    },
    {
      question: "Can I cancel a booking?",
      answer: "Yes, you can cancel or reschedule up to 30 minutes before your scheduled pickup."
    },
    {
      question: "Are the routes flexible?",
      answer: "Our shuttles run on fixed routes to maintain timeliness and efficiency."
    },
    {
      question: "Do I need to book in advance?",
      answer: "We recommend booking at least 15 minutes before departure to ensure seat availability."
    },
    {
      question: "Is SwiftGo safe?",
      answer: "Absolutely. All drivers are background-checked, vehicles are tracked, and safety is our top priority."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and in-app wallet credits. All transactions are secure and encrypted."
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer: "Yes, you can modify pickup/drop points and time slots up to 2 hours before departure, subject to availability. Changes may affect the fare based on the new route."
    },
    {
      question: "Do you offer corporate packages?",
      answer: "Yes! We offer customized corporate mobility solutions including employee shuttles, bulk booking discounts, and dedicated customer support for businesses."
    }
  ];

  return (
    <section className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about SwiftGo's services and booking process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-gradient shadow-soft rounded-lg border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;