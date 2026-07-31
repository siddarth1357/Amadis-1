import { clsx } from 'clsx'

export function Input({ className, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            className={clsx(
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
                'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
                'transition-colors',
                className,
            )}
            {...props}
        />
    )
}