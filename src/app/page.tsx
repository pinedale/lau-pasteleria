import { whatsappLink } from "@/lib/site";
import Logo from "@/components/Logo";



export default function Home() {
	return (
		<main className="p-10">
			<h1 className="font-display text-cafe text-5xl">Lau Pastelería</h1>
			<p className="font-script text-4xl text-muted">Hecho con amor</p>
			<p className="mt-4">Tortas, postres y sorpresas en Barranquilla.</p>
			<a href={whatsappLink("¡Hola Lau! Quiero hacer un pedido 🎂")} className="text-cafe underline">
				Pedir por WhatsApp
			</a>
			<Logo className="h-12 w-auto text-cafe" />
			<div className="bg-ink p-6 mt-6">
				<Logo className="h-12 w-auto text-white" />
			</div>
		</main>
	);
}