import { NavItem, SidebarNode } from './Layout';

export function tabs(active: 'Guide' | 'API' | 'MCP Server'): NavItem[] {
  return [
    { label: 'Guide', href: '/guide/', active: active === 'Guide' },
    { label: 'API', href: '/api/', active: active === 'API' },
    { label: 'MCP Server', href: '/mcp-server/', active: active === 'MCP Server' }
  ];
}

export const docsTree: SidebarNode[] = [
  { label: 'Guide', href: '/guide/' },
  {
    label: 'API',
    children: [
      { label: 'Logger', href: '/api/T_Shiron_Lib_Logging_Logger/' },
      { label: 'String', href: '/api/T_System_String/' }
    ]
  },
  { label: 'MCP Server', href: '/mcp-server/' }
];
