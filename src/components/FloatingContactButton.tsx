import { Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const FloatingContactButton = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };
  return <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-scale-in">
      {/* <Button aria-label="Contact Us" className="shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full w-14 h-14 p-0 text-white bg-red-700 hover:bg-red-600">
        <a href='tel:+919837091228'>
        <Phone className="h-6 w-6" />
        </a>
      </Button>
      <Button className="bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full w-14 h-14 p-0" aria-label="Get Quote">
        <a href='https://wa.me/919837091228'>
        <img className="h-6 w-6" src="lovable-uploads/img/icons8-whatsapp-144.png" alt="" />
        </a>
      </Button> */}
    </div>;
};
export default FloatingContactButton;