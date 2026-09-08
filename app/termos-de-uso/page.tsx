import type { Metadata } from "next";
import document from "./document.json";
import { LegalPage, type LegalDocument } from "../legal-page";
export const metadata: Metadata = { title: "Termos de Uso | WAVY", description: "Condições para acesso e utilização dos canais digitais da WAVY." };
export default function Page(){ return <LegalPage document={document as LegalDocument}/>; }
