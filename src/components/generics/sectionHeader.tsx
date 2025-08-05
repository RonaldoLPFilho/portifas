interface SectionHeaderProps{
    title: string,
    subtitle?: string,
    className?: string
}

export function SectionHeader({title, subtitle, className}: SectionHeaderProps){
    return (
        <div className={`mb-12 text-center ` + className }>
            <h2 className="text-4xl font-bold mb-2 text-white">{title}</h2>
            {subtitle && <p className="text-xl text-gray-400">{subtitle}</p>}
        </div>
    )
}