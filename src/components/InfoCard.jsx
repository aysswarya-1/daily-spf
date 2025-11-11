const InfoCard = ({ Icon, title, description }) => {
  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white">
      <Icon className="mb-4 text-secondary size-7" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 text-sm mt-2">{description}</p>
    </div>
  )
}

export default InfoCard
