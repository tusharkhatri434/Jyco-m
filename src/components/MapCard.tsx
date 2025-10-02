export default function MapCard() {
  const lat = 28.9492406;
  const lng = 77.7589743;
  const zoom = 16;
  const embedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.285995753388!2d77.75897429999999!3d28.949240600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7b9966da7c6d%3A0x3326b4e3dfee26d9!2sJayco%20Electricals!5e0!3m2!1sen!2sin!4v1759137018849!5m2!1sen!2sin`;

  return (
    <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <iframe
        title="Jayco Electricals Map"
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96 border-0"
        allowFullScreen
      />
    </div>
  );
}

