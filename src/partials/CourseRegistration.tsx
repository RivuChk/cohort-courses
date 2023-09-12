import { Section } from 'astro-boilerplate-components';
import type { IFrontmatter } from 'astro-boilerplate-components/dist/esm/types/types/IFrontMatter';

const CourseRegistration = (props: IFrontmatter) => (
  <Section>
    <form name="register-compose" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name:<br/> <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Your Email:<br/> <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Your City:<br/> <input type="text" name="city" required />
        </label>
      </p>
      <p>
        <label>
          Your State:<br/> <input type="text" name="state" required />
        </label>
      </p>
      <p>
        <label>
          Number of Years Experience:{' '}<br/>
          <input type="number" name="yoe" required />
        </label>
      </p>
      <input
        type="hidden"
        id="courseName"
        name="courseName"
        value={props.title}
      />
      <p>
        <button type="submit" className="button-outlined title text-cyan-400 hover:underline h-10">Enroll</button>
      </p>
    </form>
  </Section>
);

export { CourseRegistration };
