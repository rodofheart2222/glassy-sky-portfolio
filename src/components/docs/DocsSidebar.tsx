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
    <div className="h-screen sticky top-0 left-0 pt-6">
      <div className="w-64 glass-card p-6 hidden lg:block overflow-y-auto max-h-[calc(100vh-2rem)]">
        <h3 className="text-2xl font-bold text-white mb-6">Documentation</h3>
        <nav className="space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left glass-card hover:scale-105 transition-all duration-300 text-white/80 hover:text-white py-2 px-3 rounded-lg"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};