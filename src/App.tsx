import FAQ from "./components/FAQ";

function App() {
  const faqs = [
    {
      question: "Qu'est-ce que ce projet ?",
      answer: "C'est un composant FAQ réutilisable construit avec React, TSX et Tailwind.",
    },
    {
      question: "Puis-je l'intégrer dans un autre projet ?",
      answer: "Oui, il est totalement autonome et prêt à être utilisé ailleurs.",
    },
    {
      question: "Est-ce responsive ?",
      answer: "Oui, TailwindCSS gère la responsivité par défaut.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <FAQ items={faqs} />
    </div>
  );
}

export default App;
