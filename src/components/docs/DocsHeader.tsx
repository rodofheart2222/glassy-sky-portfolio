import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const DocsHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="glass-card p-2 rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 text-white" />
              <span className="text-white">Back</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="glass-card p-2 rounded-lg">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                  to="/docs"
                  className="transition-colors hover:text-primary text-white"
                >
                  Documentation
                </Link>
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden text-white transition-colors hover:text-primary sm:block"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};