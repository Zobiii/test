import { ComponentChildren } from 'preact';

export function docIdToHref(docId: string): string {
  return `/api/${docId.replace(':', '_').replaceAll('.', '_')}`;
}

export function APIContentWrapper({ children }: { children: ComponentChildren }) {
  return <article class="space-y-4 text-sm leading-6">{children}</article>;
}

export function APISummary({ children }: { children: ComponentChildren }) {
  return <section id="summary" class="space-y-1"><h3 class="text-accentSoft">Summary</h3>{children}</section>;
}

export function APIRemarks({ children }: { children: ComponentChildren }) {
  return <section id="remarks" class="space-y-1"><h3 class="text-accentSoft">Remarks</h3>{children}</section>;
}

export function APIClass({
  name,
  modifiers,
  children
}: {
  name: string;
  modifiers: string[];
  children: ComponentChildren;
}) {
  return (
    <section id="declaration" class="space-y-3">
      <h2 class="text-xl font-semibold">{name}</h2>
      <p class="font-mono text-xs text-muted">{modifiers.join(' ')} class {name}</p>
      {children}
    </section>
  );
}

export function APIClassMembers({ children }: { children: ComponentChildren }) {
  return <section id="members" class="space-y-2"><h3 class="text-accentSoft">Members</h3>{children}</section>;
}

export function APIProperty({
  name,
  typeName,
  typeRef,
  get,
  set
}: {
  name: string;
  typeName: string;
  typeRef: string;
  get: string[];
  set: string[];
}) {
  return (
    <div class="rounded-ui border border-line bg-surface/50 p-2">
      <p class="font-mono text-xs">{get.join(' ')} {set.join(' ')} {name}: <a class="text-accentSoft" href={docIdToHref(typeRef)}>{typeName}</a></p>
    </div>
  );
}

export function APIFunction({
  name,
  modifiers,
  returns,
  children
}: {
  name: string;
  modifiers: string[];
  returns: string;
  children: ComponentChildren;
}) {
  return (
    <div class="space-y-2 rounded-ui border border-line bg-surface/50 p-2">
      <p class="font-mono text-xs">{modifiers.join(' ')} {returns} {name}(...)</p>
      <div class="space-y-1">{children}</div>
    </div>
  );
}

export function APIFunctionParam({ name, typeName, typeRef }: { name: string; typeName: string; typeRef: string }) {
  return <p class="font-mono text-xs text-muted">• {name}: <a class="text-accentSoft" href={docIdToHref(typeRef)}>{typeName}</a></p>;
}

export function XMLText({ children }: { children: ComponentChildren }) {
  return <p class="text-muted">{children}</p>;
}

export function XMLBold({ children }: { children: ComponentChildren }) {
  return <strong class="font-semibold text-text">{children}</strong>;
}

export function XMLItalic({ children }: { children: ComponentChildren }) {
  return <em class="italic text-text">{children}</em>;
}
