import { cn } from '@/lib';
import {Alert, AlertDescription, AlertTitle} from './alert';
import { CheckCircledIcon, CrossCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons';

interface CalloutProps {
  variant?: 'default' | 'destructive' | 'info';
  title?: string;
  children?: React.ReactNode;
}

export function Callout({title, children, variant = 'default', ...props}: CalloutProps) {
  
  
  let Icon = <CheckCircledIcon className='h-8 w-8' />;
  
  switch (variant) {
    case 'destructive':
      Icon = <CrossCircledIcon className='h-8 w-8' />;
      break;
    case 'info':
      Icon = <InfoCircledIcon className='h-8 w-8' />;
      break;
  }
  
  return (
    <Alert variant={variant} {...props}>
      <div className="px-4 py-4">      
      {title && (
        <AlertTitle className={cn("text-2xl font-display font-bold flex", variant === 'default'? "text-green/80 dark:text-green-40" : "text-red-50")}>
          <span className="mr-4 text-2xl">{Icon}</span> {title}
        </AlertTitle>
      )}
      <AlertDescription className='leading-base py-2'>
        {children}
      </AlertDescription>
      </div>
    </Alert>
  );
}
