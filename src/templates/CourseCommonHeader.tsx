import { Section } from 'astro-boilerplate-components';

const CourseCommonHeader = () => (
  <Section>
    <div>
      <ul className="list-inside list-disc">
        <li>3+ hours of Live Classes on Each Weekends (IST) for the Duration of the Course</li>
        <li>1:1 Mentorship Sessions every other week</li>
        <li>Lifetime access to the cohort recordings</li>
        <li>Lifetime access to the Network and Community</li>
        <li>Open forums and interaction with the cohort</li>
        <li>Doubt resolution during and post live sessions</li>
        <li>Language of communication will be strictly english</li>
        <li>
          Courses are not focused towards interview preparation, rather it's
          focused on having in depth understanding of tech{' '}
        </li>
      </ul>
    </div>
  </Section>
);

export { CourseCommonHeader };
