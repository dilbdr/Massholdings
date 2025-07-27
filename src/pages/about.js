import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Breadcrumbs from "../comon/breadcrumbs";

const About = (props) => {
  const { slug } = useParams();
  const content = props.content;
  const breadcrum = props.breadcrum;

  console.log("----Params----", content);

  return (
    <>
      <Breadcrumbs />
      <section className="intro container row m-auto py-5" aria-label="Introduction Section">
        {content?.length === 0
          ? "No Content"
          : content?.map((content, index) => (
              <div key={index} className="row mb-5">
                {index % 2 === 0 ? (
                  <>
                    <div className="col-sm-12 col-md-12 col-lg-5 pb-3">
                      <img src={content.CoverImage} alt={content.title} />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <h1 className="big-text text-blue">{content.title}</h1>
                      <div
                        className="normal-text"
                        dangerouslySetInnerHTML={{ __html: content.Description }}
                      ></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <h1 className="big-text text-blue">{content.title}</h1>
                      <div
                        className="normal-text"
                        dangerouslySetInnerHTML={{ __html: content.Description }}
                      ></div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5 pb-3">
                      <img src={content.CoverImage} alt={content.title} />
                    </div>
                  </>
                )}
              </div>
            ))}
      </section>
    </>
  );
};

export default About;
