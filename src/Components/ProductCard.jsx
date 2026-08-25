'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye, Check, Heart, Tag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { PostCart } from '@/lib/Action/PostData/PostCart';
import PostWishlist from '@/lib/Action/PostData/PostWishlist';

export default function ProductCard({ product }) {
  const t = useTranslations('ProductShowing');
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  // User Data 
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Normalize product properties cleanly
  const id = product._id || product.id || '1';
  const title = product.title || product.name || 'Untitled Product';
  const category = product.category || 'General';
  const price = typeof product.price === 'number' ? product.price : parseFloat(product.price || 0);
  const imageSrc = !imageError && product.image
    ? product.image
    : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop';

  const handleAddToCart = async (product) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (user.role === "Admin") {
      toast.error("Admin Can not add to cart");
      return;
    }
    const Data = {
      ...product, email: user.email
    }

    const result = await PostCart(Data)

    if (result) {
      setIsAdded(true);
      toast.success(`${title} ${t('addedToCart')}`);
      setTimeout(() => setIsAdded(false), 2000);
    } else {
      toast.error(result.message);
    }
  };

  const handleToggleWishlist = async (product) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (user.role === "Admin") {
      toast.error("Admin Can not add to WishList");
      return;
    }
    const Data = {
      ...product, email: user.email
    }

    const result = await PostWishlist(Data)
    if (result) {
      setIsWishlisted(true);
      toast.success(`${title} Wishlisted`);
      setTimeout(() => setIsWishlisted(false), 2000);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-400/10">

      {/* Product Image & Floating Badges */}
      <div className="relative h-60 w-full overflow-hidden bg-neutral-950 sm:h-64">
        {/* Category Badge */}
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-neutral-950/80 px-3 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md shadow-md">
          <Tag size={12} className="text-amber-400" />
          <span>{category}</span>
        </div>

        {/* Wishlist Quick Action */}
        <button
          type="button"
          onClick={() => handleToggleWishlist(product)}
          aria-label="Add to wishlist"
          className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 backdrop-blur-md shadow-md ${isWishlisted
            ? 'border-red-500/50 bg-red-500/20 text-red-500'
            : 'border-neutral-700 bg-neutral-950/70 text-neutral-300 hover:border-amber-400 hover:text-amber-400'
            }`}
        >
          <Heart size={16} className={isWishlisted ? 'fill-red-500' : ''} />
        </button>

        {/* Image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          unoptimized
          onError={() => setImageError(true)}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Soft dark overlay glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Title */}
          <h3 className="text-base font-bold text-neutral-100 transition-colors group-hover:text-amber-400 line-clamp-1 sm:text-lg">
            {title}
          </h3>

          {/* Description if present */}
          {product.description && (
            <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Price */}
          <div className="mt-4 flex items-baseline justify-between border-t border-neutral-800/80 pt-3">
            <span className="text-xs font-medium text-neutral-400">{t('price')}</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-amber-400">{t('currencySymbol')}</span>
              <span className="text-xl font-black tracking-tight text-amber-400">
                {price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons: View Details & Add to Cart */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {/* View Details Button */}
          <Link
            href={`/${id}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-800/80 px-3 py-2.5 text-xs font-semibold text-neutral-200 transition-all hover:border-amber-400/60 hover:bg-neutral-800 hover:text-amber-400 active:scale-95"
          >
            <Eye size={15} />
            <span>{t('viewDetails')}</span>
          </Link>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={() => handleAddToCart(product)}
            disabled={isAdded}
            className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-bold transition-all duration-200 active:scale-95 ${isAdded
              ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
              : 'bg-amber-400 text-neutral-950 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20'
              }`}
          >
            {isAdded ? (
              <>
                <Check size={15} />
                <span>{t('addedToCart')}</span>
              </>
            ) : (
              <>
                <ShoppingCart size={15} />
                <span>{t('addToCart')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
