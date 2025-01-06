import { Link } from "react-router-dom";

const sections = [
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
      <div className="w-72 p-8 hidden lg:block overflow-y-auto max-h-screen backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-300">
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-8">RPC Documentation</h2>
        <nav className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-white/80 hover:text-white py-3 px-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};