import { DocsShell } from '@/components/Layout';
import { docsTree, tabs } from '@/components/siteData';

export function APIIndexPage() {
  return (
    <DocsShell
      title="API Index"
      tabs={tabs('API')}
      leftNav={docsTree}
      toc={[{ label: 'Types', href: '#types' }]}
    >
      <section id="types" class="space-y-2">
        <h2 class="text-lg font-semibold">Types</h2>
        <ul class="list-disc pl-5 text-muted">
          <li><a class="text-accentSoft" href="/api/T_Shiron_Lib_Logging_Logger/">T:Shiron.Lib.Logging.Logger</a></li>
          <li><a class="text-accentSoft" href="/api/T_System_String/">T:System.String</a></li>
        </ul>
      </section>
    </DocsShell>
  );
}
