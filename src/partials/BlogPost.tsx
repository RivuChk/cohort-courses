import type { IFrontmatter } from 'astro-boilerplate-components';
import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { CourseCommonHeader } from '@/templates/CourseCommonHeader';
import { AppConfig } from '@/utils/AppConfig';
import { CourseRegistration } from '@/partials/CourseRegistration';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />
    <CourseCommonHeader />
    <PostContent content={props.frontmatter}>{props.children}</PostContent>
    <CourseRegistration props={props.frontmatter} />
  </Section>
);

export { BlogPost };
