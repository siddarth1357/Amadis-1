import { clsx } from 'clsx'

export function Button({ className, ...props }: React.ComponentProps<'button'>) {
    return (
        <button
            className={clsx(
                'inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground',
                'px-4 py-2 text-sm font-medium hover:bg-primary/90',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                'focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                'transition-colors cursor-pointer',
                className,
            )}
            {...props}
        />
    )
}