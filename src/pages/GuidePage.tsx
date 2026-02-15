import { DocsShell } from '@/components/Layout';
import { docsTree, tabs } from '@/components/siteData';

export function GuidePage() {
  return (
    <DocsShell
      title="Shiron Docs"
      tabs={tabs('Guide')}
      leftNav={docsTree}
      toc={[{ label: 'Getting started', href: '#getting-started' }, { label: 'Generation model', href: '#generation-model' }]}
    >
      <section id="getting-started" class="space-y-2">
        <h2 class="text-lg font-semibold">Getting started</h2>
        <p class="text-muted">Each symbol is an isolated TSX file, ideal for source-generator output and incremental builds.</p>
      </section>
      <section id="generation-model" class="mt-4 space-y-2">
        <h2 class="text-lg font-semibold">Generation model</h2>
        <p class="text-muted">DocID <code>T:System.String</code> maps to <code>/api/T_System_String</code>. Routing uses URL paths directly for shareable links.</p>
      </section>
    </DocsShell>
  );
}
