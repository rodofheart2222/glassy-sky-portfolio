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
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="h-screen sticky top-0 left-0">
      <div className="w-72 hidden lg:block overflow-y-auto max-h-screen p-8 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <h3 className="text-2xl font-bold text-white mb-8 bg-clip-text bg-gradient-to-r from-white to-white/70">Documentation</h3>
        <nav className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/80 hover:text-white py-3 px-4 rounded-lg border border-white/10 hover:border-white/20 hover:shadow-lg hover:scale-105"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};