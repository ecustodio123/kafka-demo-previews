import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-neutral-950 text-white shadow-[0_18px_45px_rgba(15,23,42,0.24)] hover:bg-neutral-800 focus-visible:ring-neutral-950',
        secondary:
          'border border-neutral-200 bg-white/85 text-neutral-950 shadow-sm hover:border-neutral-300 hover:bg-white focus-visible:ring-neutral-400',
        ghost:
          'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:ring-neutral-300',
      },
      size: {
        default: 'min-h-11 px-5 py-3',
        lg: 'min-h-12 px-6 py-3.5 text-base',
        icon: 'size-11 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export function Button({ asChild = false, className, size, variant, ...props }) {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export function Badge({ className, variant = 'default', ...props }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold',
        variant === 'dark'
          ? 'border-white/15 bg-white/10 text-white'
          : 'border-neutral-200 bg-white text-neutral-700 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

export function Card({ className, ...props }) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('grid gap-3 p-6', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return (
    <h3 className={cn('text-xl font-semibold leading-tight', className)} {...props} />
  )
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm leading-6 text-neutral-600', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-6 pt-0', className)} {...props} />
}
