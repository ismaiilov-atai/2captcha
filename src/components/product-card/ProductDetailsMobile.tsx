import type { ProductType } from '../../types/product_types';
import CirlceCheck from '../../assets/circle_check.svg';
import Star from '../../assets/star.svg';

interface PageProps {
  product: ProductType;
}

const ProductDetailsMobile = ({ product }: PageProps) => {
  return (
    <>
      <p className='flex text-nowrap items-center gap-[10px] secondary-text text-title sm:hidden'>
        <img src={CirlceCheck} className='inline w-[16px] h-[16px]' />
        {product.anySite}
      </p>
      <div className='flex gap-2.5 sm:hidden'>
        <p className='flex justify-center items-center gap-[5px] h-[24px] w-[60px] secondary-text font-primary-weight py-[5px] px-[10px]  bg-product-card-border rounded-xl'>
          {product.rating} <img src={Star} className='w-[14px] h-[14px]' />
        </p>
        <p className='flex items-center text-tertiary secondary-text'>
          {product.reviews} Reviews
        </p>
      </div>
    </>
  );
};

export default ProductDetailsMobile;
