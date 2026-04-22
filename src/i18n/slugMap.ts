// Maps English post slugs to Spanish post slugs and vice versa
const enToEs: Record<string, string> = {
  'shipwrights-playbook': 'menos-pilotos-mas-producto',
  'ai-is-widening-the-gap': 'la-ia-esta-ampliando-la-brecha',
  'from-full-stack-developer-to-full-stack-product-engineer': 'de-desarrollador-full-stack-a-ingeniero-de-producto',
  'building-elite-performance-engineering-product-teams': 'construyendo-equipos-de-ingenieria-de-alto-rendimiento',
};

const esToEn: Record<string, string> = Object.fromEntries(
  Object.entries(enToEs).map(([en, es]) => [es, en])
);

export function getAlternatePostUrl(pathname: string): string | null {
  const enMatch = pathname.match(/^\/post\/([^/]+)\/?$/);
  if (enMatch) {
    const esSlug = enToEs[enMatch[1]];
    return esSlug ? `/es/post/${esSlug}/` : null;
  }

  const esMatch = pathname.match(/^\/es\/post\/([^/]+)\/?$/);
  if (esMatch) {
    const enSlug = esToEn[esMatch[1]];
    return enSlug ? `/post/${enSlug}/` : null;
  }

  return null;
}
