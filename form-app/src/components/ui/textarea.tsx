import { clsx } from 'clsx'

export function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            className={clsx(
                'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
                'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
                'transition-colors',
                className,
            )}
            {...props}
        />
    )
}