import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Where is SwiftGo available?",
      answer: "SwiftGo is currently expanding to major metropolitan areas. Check our app or website for available service areas in your city. We're continuously adding new routes and locations."
    },
    {
      question: "How do cancellations work?",
      answer: "You can cancel your ride up to 30 minutes before the scheduled departure time without any charges. Cancellations within 30 minutes may incur a small fee. Emergency cancellations are handled case-by-case."
    },
    {
      question: "What are the booking rules?",
      answer: "Book rides up to 7 days in advance. Same-day bookings are available subject to seat availability. You need to arrive at your pickup point at least 5 minutes before the scheduled time."
    },
    {
      question: "How does SwiftGo ensure safety?",
      answer: "All drivers undergo thorough background checks and training. Vehicles are regularly inspected and maintained. We provide real-time tracking, emergency contacts, and 24/7 customer support for your safety."
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
      question: "What happens if I miss my ride?",
      answer: "If you miss your scheduled ride, you can book the next available slot. No-show fees may apply. We recommend arriving 5 minutes early to ensure you don't miss your ride."
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