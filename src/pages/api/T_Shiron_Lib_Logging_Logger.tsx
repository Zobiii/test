import { DocsShell } from '@/components/Layout';
import { docsTree, tabs } from '@/components/siteData';
import { APIClass, APIClassMembers, APIContentWrapper, APIFunction, APIFunctionParam, APIProperty, APIRemarks, APISummary, XMLBold, XMLItalic, XMLText } from '@/components/api';

export function Page() {
  return (
    <DocsShell
      title="API · Logger"
      tabs={tabs('API')}
      leftNav={docsTree}
      toc={[{ label: 'Declaration', href: '#declaration' }, { label: 'Summary', href: '#summary' }, { label: 'Remarks', href: '#remarks' }, { label: 'Members', href: '#members' }]}
    >
      <APIContentWrapper>
        <APIClass name="Logger" modifiers={['public', 'sealed']}>
          <APISummary>
            <XMLText>This class is a basic <XMLBold>Logger</XMLBold>.</XMLText>
          </APISummary>
          <APIRemarks>
            <XMLText>Some <XMLItalic>text</XMLItalic>.</XMLText>
          </APIRemarks>
          <APIClassMembers>
            <APIProperty name="Prefix" typeName="string" typeRef="T:System.String" get={['public']} set={['private']} />
            <APIFunction name="Log" modifiers={['public']} returns="void">
              <APIFunctionParam name="message" typeName="string" typeRef="T:System.String" />
              <APIFunctionParam name="important" typeName="bool" typeRef="T:System.Bool" />
            </APIFunction>
          </APIClassMembers>
        </APIClass>
      </APIContentWrapper>
    </DocsShell>
  );
}
