import { Section } from 'astro-boilerplate-components';

const CourseRegistration = (title: string) => (
  <Section>
    <form
      name="register-compose"
      method="POST"
      data-netlify="true"
      className="max-w-s w-full rounded bg-black px-8 pt-6 pb-8 shadow-md"
    >
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-2 block text-sm font-bold text-gray-300"
            htmlFor="name"
          >
            Your Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-2 block text-sm font-bold text-gray-300"
            htmlFor="email"
          >
            Your Email:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-2 block text-sm font-bold text-gray-300"
            htmlFor="city"
          >
            Your City:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="text"
            id="city"
            name="city"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-2 block text-sm font-bold text-gray-300"
            htmlFor="state"
          >
            Your State:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="text"
            name="state"
            id="state"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-2 block text-sm font-bold text-gray-300"
            htmlFor="yoe"
          >
            Number of Years Experience:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="number"
            name="yoe"
            id="yoe"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-2 block text-sm font-bold text-gray-300"
            htmlFor="mobile"
          >
            Phone Number:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            type="tel"
            name="mobile"
            id="mobile"
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            required
          />
        </div>
      </div>
      <input type="hidden" id="courseName" name="courseName" value={title.toString()} />
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            type="submit"
            className="focus:shadow-outline w-60 rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
          >
            Enroll
          </button>
        </div>
      </div>
    </form>
  </Section>
);

export { CourseRegistration };
