import { DocsShell } from '@/components/Layout';
import { docsTree, tabs } from '@/components/siteData';

export function MCPServerPage() {
  return (
    <DocsShell
      title="MCP Server"
      tabs={tabs('MCP Server')}
      leftNav={docsTree}
      toc={[{ label: 'Overview', href: '#overview' }, { label: 'Tools', href: '#tools' }]}
    >
      <section id="overview" class="space-y-2">
        <h2 class="text-lg font-semibold">Overview</h2>
        <p class="text-muted">Sample integration surface for connecting documentation intelligence into your MCP tools.</p>
      </section>
      <section id="tools" class="mt-4 space-y-2">
        <h2 class="text-lg font-semibold">Tools</h2>
        <p class="text-muted">Expose symbol lookup, DocID-to-URL mapping, and member search as MCP resources.</p>
      </section>
    </DocsShell>
  );
}
