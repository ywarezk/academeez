'use client';

import {useState, type HTMLAttributes, useEffect} from 'react';
import {Button} from './Button';
import {cn} from '@/lib';
import {CheckIcon, CopyIcon} from '@radix-ui/react-icons';

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

interface CopyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function CopyButton({value, className, ...props}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn('relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50', className)}
      onClick={() => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
    </Button>
  );
}
