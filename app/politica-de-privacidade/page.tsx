import type { Metadata } from "next";
import document from "./document.json";
import { LegalPage, type LegalDocument } from "../legal-page";
export const metadata: Metadata = { title: "Política de Privacidade | WAVY", description: "Saiba como a WAVY trata e protege dados pessoais." };
export default function Page(){ return <LegalPage document={document as LegalDocument}/>; }
