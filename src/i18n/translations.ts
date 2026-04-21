export const languages = {
  en: 'EN',
  es: 'ES',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'site.name': 'cesar.ships',
    'site.description': 'Product Engineer, Digital Artisan & Strategist. 25 years of shipping value.',
    'hero.title': 'PRODUCT ENGINEER.',
    'hero.subtitle': 'Digital Artisan & Strategist.',
    'hero.accent': '25 Years of Shipping.',
    'manifesto.cost': 'cost',
    'manifesto.product': 'product',
    'manifesto.code': 'Code is a',
    'manifesto.value': 'Value is the',
    'nav.return': 'RETURN_TO_BASE',
    'nav.transmissions': 'TRANSMISSIONS_LOG',
    'nav.subscribe': 'Subscribe_to_transmissions',
    'nav.contact': 'CONTACT',
    'nav.end': '/// END_OF_TRANSMISSION ///',
    'footer.status': 'System Status:',
    'footer.online': 'Online',
    'footer.location': 'Location: Earth',
    'contact.title': 'OPEN_CHANNEL',
    'contact.description': 'Got a question, idea, or just want to say hi? Send a transmission.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'SEND_TRANSMISSION',
    'contact.success': "/// TRANSMISSION SENT SUCCESSFULLY. I'LL GET BACK TO YOU.",
    'contact.error': '/// ERROR: TRANSMISSION FAILED. PLEASE TRY AGAIN.',
    'subscribe.success': "/// TRANSMISSION RECEIVED. YOU'RE IN.",
    'subscribe.duplicate': '/// ALREADY SUBSCRIBED. STANDING BY.',
    'subscribe.error': '/// ERROR: SUBSCRIPTION FAILED. PLEASE TRY AGAIN.',
    'subscribe.invalid': '/// INVALID EMAIL FORMAT.',
    'subscribe.button': 'SUBSCRIBE',
    'subscribe.sending': 'SENDING...',
  },
  es: {
    'site.name': 'cesar.ships',
    'site.description': 'Ingeniero de Producto, Artesano Digital y Estratega. 25 anos enviando valor.',
    'hero.title': 'INGENIERO DE PRODUCTO.',
    'hero.subtitle': 'Artesano Digital y Estratega.',
    'hero.accent': '25 Anos Enviando.',
    'manifesto.cost': 'costo',
    'manifesto.product': 'producto',
    'manifesto.code': 'El codigo es un',
    'manifesto.value': 'El valor es el',
    'nav.return': 'VOLVER_A_BASE',
    'nav.transmissions': 'REGISTRO_DE_TRANSMISIONES',
    'nav.subscribe': 'Suscribirse_a_transmisiones',
    'nav.contact': 'CONTACTO',
    'nav.end': '/// FIN_DE_TRANSMISION ///',
    'footer.status': 'Estado del Sistema:',
    'footer.online': 'En linea',
    'footer.location': 'Ubicacion: Tierra',
    'contact.title': 'CANAL_ABIERTO',
    'contact.description': 'Tienes una pregunta, idea, o solo quieres saludar? Envia una transmision.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'ENVIAR_TRANSMISION',
    'contact.success': '/// TRANSMISION ENVIADA CON EXITO. TE RESPONDERE PRONTO.',
    'contact.error': '/// ERROR: TRANSMISION FALLIDA. INTENTA DE NUEVO.',
    'subscribe.success': '/// TRANSMISION RECIBIDA. ESTAS DENTRO.',
    'subscribe.duplicate': '/// YA ESTAS SUSCRITO. EN ESPERA.',
    'subscribe.error': '/// ERROR: SUSCRIPCION FALLIDA. INTENTA DE NUEVO.',
    'subscribe.invalid': '/// FORMATO DE EMAIL INVALIDO.',
    'subscribe.button': 'SUSCRIBIRSE',
    'subscribe.sending': 'ENVIANDO...',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalePath(path: string, lang: keyof typeof ui) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
