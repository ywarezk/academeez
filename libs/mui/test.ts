const testsContext = (require as any).context('.', true, /spec\.(ts|tsx)$/);
testsContext.keys().forEach(testsContext);
