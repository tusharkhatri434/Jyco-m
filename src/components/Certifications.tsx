export default function Certifications({ onlyLogo }) {
  const certifications = [
    {
      img: "/lovable-uploads/certificates/MSME.jpg",
      title: "MSME",
    },
    {
      img: "/lovable-uploads/certificates/Make_in_India.jpg",
      title: "Make In India",
    },
    {
      img: "/lovable-uploads/certificates/Gem.jpg",
      title: "GEM",
    },
    {
      img: "/lovable-uploads/certificates/ISO1.jpg",
      title: "ISO 9001:2015",
    },
    {
      img: "/lovable-uploads/certificates/ISO14.jpg",
      title: "ISO 14001:2015",
    },
    {
      img: "/lovable-uploads/certificates/BIS.jpg",
      title: "BIS",
    },
  ];

  return (
    <div className={`${onlyLogo ? "" : "bg-gray-100"} py-12 px-6 text-center`}>
      {/* Heading */}
      {!onlyLogo && (
        <>
          <h2 className="text-2xl font-bold mb-4">Our Certifications</h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
            Our commitment to quality is validated by certifications and
            government approvals
          </p>
        </>
      )}

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-10">
        {certifications.map((cert, index) => (
          <div key={index} className="flex flex-col items-center w-40">
            <div className="h-32 w-full flex items-center justify-center mb-3">
              <img
                src={cert.img}
                alt={cert.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="font-semibold text-center">{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
