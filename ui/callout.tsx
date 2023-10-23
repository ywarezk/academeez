import {Alert, AlertDescription, AlertTitle} from './alert';

interface CalloutProps {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
}

export function Callout({title, children, icon, ...props}: CalloutProps) {
  return (
    <Alert {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && (
        <AlertTitle>
          <h3 className="text-2xl font-display font-bold text-green/80 dark:text-green-40">{title}</h3>
        </AlertTitle>
      )}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
