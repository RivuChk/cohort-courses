import type { IFrontmatter } from 'astro-boilerplate-components';
import { GradientText, PostContent, PostHeader, Section } from 'astro-boilerplate-components';
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
    <a href="#course-fees"><GradientText>Jump to Fees and Enrollment</GradientText></a>
    <CourseCommonHeader />
    <PostContent content={props.frontmatter}>{props.children}</PostContent>
    <CourseRegistration />
  </Section>
);

export { BlogPost };
