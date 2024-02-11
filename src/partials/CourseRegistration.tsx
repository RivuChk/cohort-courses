import { GradientText, Section } from 'astro-boilerplate-components';

const CourseRegistration = () => (
  <Section>
    <div id="payment" className="mb-12 text-2xl md:flex md:items-center">
      <div className="w-full md:items-center">
        <GradientText>
          Enrollments for next batch will be announced soon. The courses and the structure will be revisited, keep an eye here.
        </GradientText>{' '}
        
      </div>
    </div>
  </Section>
);

export { CourseRegistration };
