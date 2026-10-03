import type { ProjectLanguage } from './projects';

export type StackGroupId = 'web' | 'mobile' | 'database' | 'cloud' | 'ai' | 'misc';

export type StackGroup = {
	id: StackGroupId;
	/** Filter button label. */
	label: Record<ProjectLanguage, string>;
};

export type Technology = {
	id: string;
	name: string;
	/** Two-character "element" symbol shown on the tile. */
	symbol: string;
	group: StackGroupId;
	/** Web sub-group, shown in the tile tag. */
	sub?: 'frontend' | 'backend';
};

export const stackGroups: StackGroup[] = [
	{ id: 'web', label: { en: 'WEB', es: 'WEB' } },
	{ id: 'mobile', label: { en: 'MOBILE', es: 'MÓVIL' } },
	{ id: 'database', label: { en: 'DATA', es: 'DATOS' } },
	{ id: 'cloud', label: { en: 'CLOUD', es: 'NUBE' } },
	{ id: 'ai', label: { en: 'AI', es: 'IA' } },
	{ id: 'misc', label: { en: 'TOOLS', es: 'HERRAMIENTAS' } },
];

export const technologies: Technology[] = [
	{ id: 'angular', name: 'Angular', symbol: 'Ng', group: 'web', sub: 'frontend' },
	{ id: 'react', name: 'React', symbol: 'Re', group: 'web', sub: 'frontend' },
	{ id: 'dotnet', name: '.NET / C#', symbol: 'C#', group: 'web', sub: 'backend' },
	{ id: 'nextjs', name: 'Next.js', symbol: 'Nx', group: 'web', sub: 'backend' },
	{ id: 'astro', name: 'Astro', symbol: 'As', group: 'web', sub: 'backend' },
	{ id: 'react-native', name: 'React Native', symbol: 'Rn', group: 'mobile' },
	{ id: 'expo', name: 'Expo', symbol: 'Ex', group: 'mobile' },
	{ id: 'mysql', name: 'MySQL', symbol: 'My', group: 'database' },
	{ id: 'sql-server', name: 'SQL Server', symbol: 'Ss', group: 'database' },
	{ id: 'sqlite', name: 'SQLite', symbol: 'Sl', group: 'database' },
	{ id: 'aws', name: 'AWS', symbol: 'Aw', group: 'cloud' },
	{ id: 'azure', name: 'Azure', symbol: 'Az', group: 'cloud' },
	{ id: 'opencode', name: 'OpenCode', symbol: 'Oc', group: 'ai' },
	{ id: 'codex', name: 'Codex', symbol: 'Cx', group: 'ai' },
	{ id: 'copilot', name: 'Copilot', symbol: 'Cp', group: 'ai' },
	{ id: 'github', name: 'GitHub', symbol: 'Gh', group: 'misc' },
	{ id: 'docker', name: 'Docker', symbol: 'Dk', group: 'misc' },
];

/** Short tag shown in the tile corner, e.g. WEB/FE. */
export const technologyTag = (tech: Technology) => {
	const group = { web: 'WEB', mobile: 'MOB', database: 'DB', cloud: 'CLOUD', ai: 'AI', misc: 'TOOLS' }[tech.group];
	return tech.sub ? `${group}/${tech.sub === 'frontend' ? 'FE' : 'BE'}` : group;
};

const icons = import.meta.glob<string>('../assets/stack-icons/*.svg', { eager: true, query: '?raw', import: 'default' });

/** Raw SVG markup for a stack icon id (file name in src/assets/stack-icons), or '' if none. */
export const stackIcon = (id: string) => icons[`../assets/stack-icons/${id}.svg`] ?? '';

/** Icon for a project stack label: drops the version, e.g. 'NEXT.JS 15' → nextjs, 'EXPO SDK 57' → expo. */
export const projectStackIcon = (label: string) =>
	stackIcon(label.toLowerCase().replace(/\s+(sdk\s+)?\d[\d.]*$/, '').replace(/\./g, '').replace(/\s+/g, '-'));
