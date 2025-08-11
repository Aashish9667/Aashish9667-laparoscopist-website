import * as React from 'react';
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical';
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react';
import cn from '@/lib/cn';
import classes from './rich-text.module.css';

type NodeTypes = DefaultNodeTypes | SerializedBlockNode;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { relationTo, value } = linkNode.fields.doc!;
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object');
  }
  const slug = value.slug;
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
});

export type RichTextProps = {
  data: DefaultTypedEditorState;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function RichText(props: RichTextProps) {
  const { className, enableGutter = true, enableProse = true, ...rest } = props;
  return (
    <ConvertRichText
      className={cn(
        {
          [classes.container]: enableGutter,
          [classes.prose]: enableProse,
          [classes['max-w-none']]: !enableGutter,
        },
        'payload-richtext',
        className,
      )}
      converters={jsxConverters}
      {...rest}
    />
  );
}

export default RichText;
