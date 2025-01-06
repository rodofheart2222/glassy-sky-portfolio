import { Link } from "react-router-dom";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "overview", label: "Overview of RPC Endpoints" },
  { id: "getting-started", label: "Getting Started" },
  { id: "accessing-rpc-endpoints", label: "Accessing the RPC Endpoints" },
  { id: "authentication-and-security", label: "Authentication and Security" },
  { id: "making-rpc-requests", label: "Making RPC Requests" },
  { id: "api-reference", label: "API Reference" }
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
    <div className="w-64 glass-card p-6 hidden lg:block sticky top-6">
      <h3 className="text-2xl font-bold text-white mb-6">Documentation</h3>
      <nav className="space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="block w-full text-left text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};