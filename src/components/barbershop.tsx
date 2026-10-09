import { useState } from "react";
import { ArrowUpRight, MessageCircle, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, getWhatsAppUrl } from "@/lib/business";
import logo from "@/assets/uploads/6901.png";

export function Brand({ footer = false }: { footer?: boolean }) {
  if (!footer) return <a href="#inicio" className="brand brand-logo" aria-label="Preto Barbearia — início"><img src={logo} alt="Preto Barbearia" width={512} height={512} /></a>;
  return <a href="#inicio" className="brand brand-footer" aria-label="Preto Barbearia — início"><img className="brand-footer-logo" src={logo} alt="Preto Barbearia" width={120} height={120} /></a>;
}

export function WhatsAppButton({ label = "Agendar pelo WhatsApp", compact = false, floating = false }: { label?: string; compact?: boolean; floating?: boolean }) {
  const [open, setOpen] = useState(false);
  const url = getWhatsAppUrl(business.whatsappNumber);
  const content = <><MessageCircle size={18} /><span>{label}</span>{!compact && <ArrowUpRight size={17} />}</>;
  return <>
    {url ? <Button asChild variant="brand" className={floating ? "floating-contact" : ""}><a href={url} target="_blank" rel="noopener noreferrer" aria-label={floating ? label : undefined}>{content}</a></Button> : <Button variant="brand" onClick={() => setOpen(true)} className={floating ? "floating-contact" : ""} aria-label={floating ? label : undefined}>{content}</Button>}
    {open && <div className="modal-backdrop" onClick={() => setOpen(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" onClick={e => e.stopPropagation()} onKeyDown={e => { if (e.key === "Escape") setOpen(false); }}><Button variant="ghost" size="icon" className="modal-close" aria-label="Fechar" onClick={() => setOpen(false)} autoFocus><X /></Button><MessageCircle className="text-primary" size={32} /><h2 id="contact-modal-title">Vamos conversar?</h2><p>O número de WhatsApp está aguardando confirmação. Por enquanto, fale com a Preto Barbearia pelo Instagram.</p><Button asChild variant="brand"><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">Abrir Instagram <ArrowUpRight /></a></Button></section></div>}
  </>;
}

export function ServiceIcon({ kind }: { kind: string }) {
  if (kind === "razor") return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="m10 29 17-17 5 5-17 17-5-5ZM27 12l3-3 5 5-3 3M13 26l5 5M8 31l-3 4M17 12l-4-4M13 16H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (kind === "sparkles") return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="m20 6 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10ZM32 4v8M28 8h8M7 29v7M3.5 32.5h7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>;
  return <Scissors strokeWidth={1.2} />;
}
