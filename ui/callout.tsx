import {Alert, AlertDescription, AlertTitle} from './alert';
import { CheckCircledIcon } from '@radix-ui/react-icons';

interface CalloutProps {
  icon?: 'success';
  title?: string;
  children?: React.ReactNode;
}

export function Callout({title, children, icon = 'success', ...props}: CalloutProps) {
  let Icon = <CheckCircledIcon className='h-8 w-8' />;
  
  return (
    <Alert {...props}>
      <div className="px-4 py-4">      
      {title && (
        <AlertTitle className="text-2xl font-display font-bold text-green/80 dark:text-green-40 flex">
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
