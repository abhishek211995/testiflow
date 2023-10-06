export default function PageIntro(props) {
  return (
    <>
      <div className="tf_page_intro_wrap mb-5">
        <h3 className="text-2xl font-bold">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
}
