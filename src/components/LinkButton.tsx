'use client';

import React from 'react';
import Link from 'next/link';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type LinkProps = BaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className' | 'children'> & {
    href: React.ComponentPropsWithoutRef<typeof Link>['href'];
  };

type ButtonProps = BaseProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'className' | 'children'> & {
    href?: undefined;
  };

type LinkButtonProps = LinkProps | ButtonProps;

function LinkButton(props: LinkProps): React.ReactElement;
function LinkButton(props: ButtonProps): React.ReactElement;
function LinkButton(props: LinkButtonProps) {
  const baseClassName = 'inline-flex items-center justify-center';
  if (typeof (props as LinkProps).href !== 'undefined') {
    const { href, className = '', children, ...linkProps } = props as LinkProps;
    return (
      <Link href={href} className={`${baseClassName} ${className}`} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { className = '', children, ...buttonProps } = props as ButtonProps;
  return (
    <button className={`${baseClassName} ${className}`} {...buttonProps}>
      {children}
    </button>
  );
}

export default LinkButton;