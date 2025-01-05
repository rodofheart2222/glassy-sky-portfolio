import { DocsHeader } from "@/components/docs/DocsHeader";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsContent } from "@/components/docs/DocsContent";

const Documentation = () => {
  return (
    <div className="min-h-screen flex">
      <DocsSidebar />
      <div className="flex-1 min-h-screen overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <DocsHeader />
          <DocsContent />
        </div>
      </div>
    </div>
  );
};

export default Documentation;