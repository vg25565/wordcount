export const Header = ({heading, subHeading}) => {
    return (
      <section className="header" >
          <h1 className="m-0 text-2xl font-semibold" data-testid="heading">{heading}</h1>
          <p data-testid="subHeading" className="text-xl">{subHeading}</p>
      </section>
    )
  }
  