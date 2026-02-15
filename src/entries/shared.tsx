import { render, VNode } from 'preact';
import '@/styles/main.css';

export function mount(node: VNode) {
  const app = document.getElementById('app');
  if (!app) throw new Error('Missing #app element');
  render(node, app);
}
