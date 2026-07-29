import { MDXRemote } from 'next-mdx-remote/rsc';
import { Heading } from '../typography/Heading';
import { BodyText } from '../typography/BodyText';
import { CodeBlock } from '../ui/CodeBlock';

const components = {
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  p: (props: any) => <BodyText variant="primary" {...props} />,
  pre: (props: any) => {
    const codeContent = props.children?.props?.children || '';
    const className = props.children?.props?.className || '';
    const language = className.replace(/language-/, '') || 'plaintext';
    return <CodeBlock code={codeContent.trim()} language={language} />;
  }
};

interface MDXRendererProps {
  source: string;
}

export function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <MDXRemote source={source} components={components} />
  );
}
