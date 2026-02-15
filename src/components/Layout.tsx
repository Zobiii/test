import { ComponentChildren } from 'preact';

export type NavItem = { label: string; href: string; active?: boolean };
export type SidebarNode = { label: string; href?: string; children?: SidebarNode[] };

function SidebarTree({ nodes }: { nodes: SidebarNode[] }) {
  return (
    <ul class="space-y-1 text-sm text-muted">
      {nodes.map((node) => (
        <li>
          {node.href ? (
            <a class="block rounded-ui px-2 py-1 hover:bg-surface hover:text-text" href={node.href}>
              {node.label}
            </a>
          ) : (
            <div class="px-2 py-1 font-medium text-text">{node.label}</div>
          )}
          {node.children && <div class="ml-3 border-l border-line/70 pl-2"><SidebarTree nodes={node.children} /></div>}
        </li>
      ))}
    </ul>
  );
}

export function DocsShell({
  tabs,
  leftNav,
  toc,
  children,
  title
}: {
  tabs: NavItem[];
  leftNav: SidebarNode[];
  toc: SidebarNode[];
  children: ComponentChildren;
  title: string;
}) {
  return (
    <div class="mx-auto max-w-[1500px] p-3">
      <header class="glass mb-3 flex items-center justify-between rounded-ui p-3">
        <h1 class="text-base font-semibold">{title}</h1>
        <nav class="flex gap-1">
          {tabs.map((tab) => (
            <a class={`nav-link ${tab.active ? 'active' : ''}`} href={tab.href}>
              {tab.label}
            </a>
          ))}
        </nav>
      </header>
      <div class="grid grid-cols-[260px_minmax(0,1fr)_240px] gap-3">
        <aside class="glass rounded-ui p-3">
          <p class="mb-2 text-xs uppercase tracking-wide text-accentSoft">Documents</p>
          <SidebarTree nodes={leftNav} />
        </aside>
        <main class="glass rounded-ui p-4">{children}</main>
        <aside class="glass rounded-ui p-3">
          <p class="mb-2 text-xs uppercase tracking-wide text-accentSoft">On this page</p>
          <SidebarTree nodes={toc} />
        </aside>
      </div>
    </div>
  );
}
