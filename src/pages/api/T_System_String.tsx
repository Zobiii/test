import { DocsShell } from '@/components/Layout';
import { docsTree, tabs } from '@/components/siteData';
import { APIClass, APIContentWrapper, APISummary, XMLText } from '@/components/api';

export function Page() {
  return (
    <DocsShell
      title="API · String"
      tabs={tabs('API')}
      leftNav={docsTree}
      toc={[{ label: 'Declaration', href: '#declaration' }, { label: 'Summary', href: '#summary' }]}
    >
      <APIContentWrapper>
        <APIClass name="String" modifiers={['public', 'sealed']}>
          <APISummary>
            <XMLText>Represents text as a sequence of UTF-16 code units.</XMLText>
          </APISummary>
        </APIClass>
      </APIContentWrapper>
    </DocsShell>
  );
}
