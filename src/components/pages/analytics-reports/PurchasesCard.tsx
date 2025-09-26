const PurchasesCard = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className="bg-white/50 p-3 rounded px-10">
      <div className="text-sm text-gray-50 uppercase font-[Bebas_Neue]">
        {text}
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  );
};

export default PurchasesCard;
