// TODO (de cerut de la client): numărul de WhatsApp al clinicii. 0359 450 657 este linie fixă, nu merge pe WhatsApp.
export const WHATSAPP_NUMBER = "40700000000";

export const waLink = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
