import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  forwardRef,
} from 'react';
import clsx from 'clsx';

type BaseProps = {
  variant?: 'primary' | 'white' | 'ghost';
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type CtaButtonProps = ButtonProps | AnchorProps;

const baseStyle =
  'inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition duration-300 ease-out';

const variantStyles = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/40 hover:ring-2 hover:ring-blue-400/40 hover:scale-105',
  white:
    'bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:scale-105',
  ghost:
    'bg-transparent border border-white text-white hover:bg-white/10 hover:scale-105',
};

const CtaButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CtaButtonProps
>(({ as = 'button', variant = 'primary', className, children, ...rest }, ref) => {
  const combinedClassName = clsx(
    baseStyle,
    variantStyles[variant],
    className
  );

  if (as === 'a') {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={combinedClassName}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

export default CtaButton;
