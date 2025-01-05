import { Link } from "react-router-dom";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "overview", label: "Overview of RPC Endpoints" },
  { id: "getting-started", label: "Getting Started" },
  { id: "accessing-endpoints", label: "Accessing the RPC Endpoints" },
  { id: "authentication", label: "Authentication and Security" },
  { id: "making-requests", label: "Making RPC Requests" },
  { id: "advanced-usage", label: "Advanced Usage" },
  { id: "error-handling", label: "Error Handling" },
  { id: "performance", label: "Performance Optimization" },
  { id: "best-practices", label: "Best Practices" },
  { id: "use-cases", label: "Use Cases" },
  { id: "case-studies", label: "Case Studies" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "api-reference", label: "API Reference" },
  { id: "changelog", label: "Changelog" },
  { id: "faqs", label: "FAQs" },
  { id: "glossary", label: "Glossary" },
  { id: "resources", label: "Additional Resources" },
  { id: "contribution", label: "Contribution Guidelines" },
  { id: "license", label: "License" }
];

export const DocsSidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 p-6 hidden lg:block">
      <div className="sticky top-6">
        <h3 className="text-lg font-bold text-white mb-4">Documentation</h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left text-white/80 hover:text-white transition-colors py-1 cursor-pointer"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};