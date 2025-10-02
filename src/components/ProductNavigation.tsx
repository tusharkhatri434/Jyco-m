import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
interface ProductNavigationProps {
  onCategorySelect: (category: string) => void;
  currentCategory: string;
}
const ProductNavigation = ({
  onCategorySelect,
  currentCategory
}: ProductNavigationProps) => {
  const categories = [{
    id: 'all-products',
    label: 'All Products'
  }, {
    id: 'transformers',
    label: 'Power Transformers'
  }, {
    id: 'stabilizers',
    label: 'Voltage Stabilizers'
  }];
  return;
};
export default ProductNavigation;