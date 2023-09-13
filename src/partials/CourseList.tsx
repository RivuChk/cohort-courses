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
        description="Learn Kotlin from India's first GDE (Google Developer Expert) for Kotlin, and author of 3 Kotlin Books."
        link="/courses/kotlin-lang/"
        img={{ src: '/assets/images/code.jpeg', alt: 'Kotlin' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Kotlin</Tags>
          </>
        }
      />
      <Project
        name="Master Kotlin Multiplatform"
        description="Learn and Master Kotlin Multiplatform. Will discuss optimisations, interoperability, architecture and system design, db, vraeting SDKs and a lot more"
        link="/courses/kmp/"
        img={{ src: '/assets/images/devices.png', alt: 'KMP' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Kotlin</Tags>
            <Tags color={ColorTags.INDIGO}>iOS</Tags>
            <Tags color={ColorTags.ROSE}>Web</Tags>
            <Tags color={ColorTags.SKY}>Android</Tags>
            <Tags color={ColorTags.EMERALD}>React</Tags>
          </>
        }
      />
      <Project
        name="Learn and Master Ktor for Backend"
        description="To be announced"
        link="/"
        img={{ src: '/assets/images/code.jpeg', alt: 'Ktor' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Kotlin</Tags>
            <Tags color={ColorTags.INDIGO}>Ktor</Tags>
          </>
        }
      />
      <Project
        name="Learn Android Development Basics"
        description="To be announced"
        link="/"
        img={{ src: '/assets/images/code.jpeg', alt: 'Android' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Kotlin</Tags>
            <Tags color={ColorTags.ROSE}>Android</Tags>
          </>
        }
      />
      <Project
        name="Master Android Apps Development"
        description="To be announced"
        link="/"
        img={{ src: '/assets/images/code.jpeg', alt: 'Android' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Kotlin</Tags>
            <Tags color={ColorTags.INDIGO}>Android</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { CourseList };
