import type { ProductType } from '../../types/product_types';
import CirlceCheck from '../../assets/circle_check.svg';
import Official from '../../assets/of.svg';
import Star from '../../assets/star.svg';
import { cn } from '../../lib/utils';

interface PageProps {
  product: ProductType;
}

const ProductDetailsDesctop = ({ product }: PageProps) => {
  return (
    <div className='flex flex-col gap-[15px] max-sm:hidden'>
      <p className=' flex items-center gap-[10px] secondary-text text-title'>
        <img src={CirlceCheck} className='inline w-[16px] h-[16px]' />
        {product.anySite}
      </p>
      <div className='flex gap-2.5 '>
        <p className='flex justify-center items-center gap-[5px] h-[24px] w-[60px] secondary-text font-primary-weight py-[5px] px-[10px]  bg-product-card-border rounded-xl'>
          {product.rating}
          <img src={Star} className='w-[14px] h-[14px]' />
        </p>
        <p className='flex items-center text-tertiary secondary-text'>
          {product.reviews} Reviews
        </p>
        <img
          src={Official}
          className={cn(`w-[143px] h-24px ml-[5px] text-tertiary`, {
            hidden: !product.isOfficial,
          })}
        />
      </div>
    </div>
  );
};

export default ProductDetailsDesctop;
