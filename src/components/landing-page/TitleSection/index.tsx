interface TitleSectionProps {
  title: string;
  subHeading?: string;
  pill: string;
}
const TitleSection = ({ title, subHeading, pill }: TitleSectionProps) => {
  return (
    <>
      <section className='flex flex-col gap-4 justify-center items-start md:items-center'>
        <article className='rounded-full p-[1px] dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple'>
          <div className='rounded-full px-3 py-1 dark:bg-black'>{pill}</div>
        </article>
        {subHeading ? (
          <>
            <h2 className='text-left text-3xl sm:text-5xl md:text-center font-semibold'>
              {title}
            </h2>
            <p className='dark:text-washed-blue-700 sm:max-w[450px] md:text-center'>
              {subHeading}
            </p>
          </>
        ) : (
          <h1 className='text-left text-4xl sm:text-6xl sm:max-w-[850px] md:text-center text-semibold'>
            {title}
          </h1>
        )}
      </section>
    </>
  );
};

export default TitleSection;
