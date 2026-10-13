import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@site/src/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold [&>svg]:h-3 [&>svg]:w-3',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'border-border text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
