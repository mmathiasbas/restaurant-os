interface Mesa {
    id_mesa: number;
    estado: string;
}

interface Props {
    mesa: Mesa;
    onClick: (mesa: Mesa) => void;
}

const colores: Record<string, string> = {
    vacia: 'bg-green-100 border-green-300 hover:bg-green-200',
    ocupada: 'bg-red-100 border-red-300 hover:bg-red-200',
    lista: 'bg-blue-100 border-blue-300 hover:bg-blue-200',
    por_pagar: 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200',
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
    className={`border-2 rounded-xl p-6 flex flex-col items-center gap-2 transition-all ${colores[mesa.estado]}`}
>
    <span className="text-3xl font-black text-gray-800">{mesa.id_mesa}</span>
        <span className="text-xs font-medium text-gray-600">{etiquetas[mesa.estado]}</span>
        </button>
);
}