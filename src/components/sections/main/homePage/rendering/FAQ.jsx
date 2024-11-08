import { motion } from 'framer-motion';
import { useState } from 'react';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer:
        'Nous sommes ouverts du lundi au vendredi de 09:00 à 19:00, et le samedi de 09:00 à 17:00. Nous sommes fermés le dimanche.'
    },
    {
      question: "Proposez-vous des services d'urgence ?",
      answer:
        "Oui, nos services d'urgence sont disponibles 24h/24 et 7j/7 pour répondre aux situations critiques."
    },
    {
      question: "Quels types d'animaux traitez-vous ?",
      answer:
        "Nous traitons principalement les chiens et les chats, mais nous pouvons également prendre en charge d'autres petits animaux de compagnie."
    },
    {
      question: 'Quels services offrez-vous ?',
      answer:
        'Nous offrons une gamme complète de services vétérinaires, y compris les consultations, les vaccinations, les chirurgies, les soins dentaires, et plus encore.'
    },
    {
      question: 'Comment puis-je prendre rendez-vous ?',
      answer:
        'Vous pouvez prendre rendez-vous en nous appelant directement ou en utilisant notre formulaire de contact en ligne sur notre site web.'
    },
    {
      question: 'Acceptez-vous les nouvelles consultations ?',
      answer:
        "Oui, nous acceptons de nouveaux patients. N'hésitez pas à nous contacter pour planifier votre première visite."
    },
    {
      question: 'Quels modes de paiement acceptez-vous ?',
      answer:
        "Nous acceptons les paiements par carte de crédit, espèces, et chèques. Veuillez nous contacter pour plus d'informations sur les options de paiement."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-12 py-10  lg:px-24">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <span className="inline-block border-b-2 border-primary bg-gradient-to-r from-primary to-secondary bg-clip-text pb-2 text-2xl font-bold text-transparent md:text-6xl lg:pb-4">
            FAQ
          </span>
          <p className="mb-20 text-center text-xl lg:mb-24">
            Retrouvez ici les réponses à vos questions les plus fréquentes.
          </p>
        </motion.div>
        <div className="w-full max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-semibold text-primary focus:outline-none"
              >
                {faq.question}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-base">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
