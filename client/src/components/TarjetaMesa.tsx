interface Mesa {
    id_mesa: number;
    estado: string;
}

interface Props {
    mesa: Mesa;
    onClick: (mesa: Mesa) => void;
}

const estilos: Record<string, string> = {
    vacia: 'border-[#16A34A] bg-[#16A34A]/5 text-[#16A34A]',
    ocupada: 'border-[#DC2626] bg-[#DC2626]/5 text-[#DC2626]',
    lista: 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB]',
    por_pagar: 'border-[#D97706] bg-[#D97706]/5 text-[#D97706]',
};

const etiquetas: Record<string, string> = {
    vacia: 'Disponible',
    ocupada: 'Ocupada',
    lista: 'Orden lista',
    por_pagar: 'Por pagar',
};

export default function TarjetaMesa({ mesa, onClick }: Props) {
    return (
        <button
            onClick={() => onClick(mesa)}
            className={`min-h-36 rounded-2xl border bg-white p-5 text-left transition active:scale-[0.99] ${estilos[mesa.estado] ?? 'border-[#E4E4E4] text-[#6B7280]'}`}
        >
            <span className="block text-sm font-medium text-[#6B7280]">Mesa</span>
            <span className="mt-2 block text-4xl font-extrabold text-[#0A0A0A]">{mesa.id_mesa}</span>
            <span className="mt-4 inline-flex rounded-full border border-current px-3 py-1 text-xs font-semibold">
                {etiquetas[mesa.estado] ?? mesa.estado}
            </span>
        </button>
    );
}
