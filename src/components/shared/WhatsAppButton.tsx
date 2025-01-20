export default function WhatsAppButton({ phoneNumber = "+543435048422", message = "Hola, estoy interesado en sus productos." }) {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 bg-black hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 z-50 group"
      aria-label="Abrir chat de WhatsApp"
    >
      <div className="relative w-7 h-7">
        <img
          src="/img/whatsapp.svg"
          alt="WhatsApp Icon"
          className="transition-all duration-300 group-hover:filter-none filter brightness-0 invert"
        />
      </div>
    </button>
  );
}
