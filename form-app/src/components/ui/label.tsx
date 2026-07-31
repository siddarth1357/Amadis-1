import { clsx } from 'clsx'

export function Label({ className, ...props }: React.ComponentProps<'label'>) {
    return (
        <label
            className={clsx('text-sm font-medium leading-none', className)}
            {...props}
        />
    )
}