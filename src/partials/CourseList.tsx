import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const CourseList = () => (
  <Section
    title={
      <>
        <GradientText>Courses</GradientText> Offered
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Master Jetpack Compose | Beginner to Advanced"
        description="Learn and Master Jetpack Compose from someone who has been using and experimenting with it since the announcement. I was the first person outside Google to blog about Jetpack Compose. This course starts with basics of Jetpack Compose, and by the end of this course one should be able to call themselves an expert in Compose"
        link="/courses/jetpack-compose/"
        img={{
          src: '/assets/images/compose.jpg',
          alt: 'Master Jetpack Compose',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Kotlin</Tags>
            <Tags color={ColorTags.LIME}>Jetpack Compose</Tags>
            <Tags color={ColorTags.SKY}>Android</Tags>
          </>
        }
      />
      <Project
        name="Learn Kotlin Language"
        description="jkncdjknwdjkcn"
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Master Kotlin Multiplatform"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Learn Android Development Basics"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Master Android Apps Development"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { CourseList };
