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
import Prose from '@/components/piplup-jsrepo/prose/prose';

type NodeTypes = DefaultNodeTypes | SerializedBlockNode;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { relationTo, value } = linkNode.fields.doc!;
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object');
  }
  const slug = value.slug;
  return relationTo === 'posts' ? `/blog/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
});

export type RichTextProps = {
  data: DefaultTypedEditorState;
  enableContainer?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function RichText(props: RichTextProps) {
  const { className, enableContainer = true, enableProse = true, ...rest } = props;
  return (
    <Prose
      className={className}
      enableContainer={enableContainer}
      enableProse={enableProse}
      asChild
    >
      <ConvertRichText converters={jsxConverters} {...rest} />
    </Prose>
  );
}

export default RichText;
