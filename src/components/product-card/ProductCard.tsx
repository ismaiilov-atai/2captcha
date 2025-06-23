import ProductDetailsDesctop from './ProductDetailsDesctops';
import type { ProductType } from '../../types/product_types';
import ProductDetailsMobile from './ProductDetailsMobile';
import useWindowSize from '../../hooks/useBreakPoints';
import Right_arrow from '../../assets/right_arrow.svg';
import Official from '../../assets/of.svg';
import { cn } from '../../lib/utils';

const card_mobile_styles = `max-sm:w-[364px] max-sm:px-mobile-card-x max-sm:py-mobile-card-y`;

interface PageProps {
  product: ProductType;
}

const ProductCard = ({ product }: PageProps) => {
  const userDevice = useWindowSize();

  return (
    <article
      className={cn(
        `space-y-[16px] relative card bg-product-card w-[760px] pt-[12px] pb-[13px] px-[20px] ${card_mobile_styles}`
      )}>
      <p className='absolute right-[20px] max-sm:right-[15px] max-sm:bottom-[17px] text-primary font-primary-weight'>
        {product.price}
      </p>
      <section className='flex gap-[15px] items-start'>
        <figure className='h-[90px] w-[90px] max-sm:h-[60px] max-sm:w-[60px] flex justify-center items-center bg-white rounded-[5px]'>
          <img src={product.icon[userDevice]} />
        </figure>

        <div className='flex flex-col text-title'>
          <p className='text-pretty font-primary-weight text-[20px] leading-[30px] max-sm:whitespace-pre-line'>
            {product.title}
            <img src={Right_arrow} className='inline w-[20px] h-[20px] ml-1' />
          </p>
          <ProductDetailsDesctop product={product} />
          <img
            src={Official}
            className={cn(
              `w-[143px] h-24px text-tertiary mt-[13px] sm:hidden`,
              {
                hidden: product.isOfficial,
              }
            )}
          />
        </div>
      </section>
      <ProductDetailsMobile product={product} />
      <p className='secondary-text text-tertiary max-sm:hidden'>
        {product.description}
      </p>
    </article>
  );
};

export default ProductCard;
