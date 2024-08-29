import Title from "./Title";
import Author from "./Author";
import Description from "./Description";
import Type from "./Type";
const NovelBlog = (props) => {
  return (
    <>
      <Title title={props.title} />
      <Author author={props.author} />
      <Description description={props.description} />
      <Type type={props.type} />
    </>
  );
};

export default NovelBlog;
